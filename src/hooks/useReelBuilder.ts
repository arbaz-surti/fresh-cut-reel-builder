'use client';

import { useState, useCallback, useEffect } from 'react';
import { AppState, PROGRESS_MESSAGES } from '@/lib/types';
import { generateReel, postToInstagram as postToIG, compressImage } from '@/lib/api';

export function useReelBuilder() {
  // Input state
  const [image, setImageState] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  // App state
  const [appState, setAppState] = useState<AppState>('input');
  const [progressMessage, setProgressMessage] = useState('');

  // Generated content
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [generationId, setGenerationId] = useState<string | null>(null);

  // Result
  const [postUrl, setPostUrl] = useState<string | null>(null);

  // Error
  const [error, setError] = useState<string | null>(null);

  // Clean up image preview URL on unmount
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Set image with preview
  const setImage = useCallback((file: File | null) => {
    // Clean up previous preview
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageState(file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  }, [imagePreview]);

  // Generate reel
  const generate = useCallback(async () => {
    if (!image || !description.trim()) return;

    setAppState('generating');
    setError(null);

    try {
      // Compress image if needed
      setProgressMessage(PROGRESS_MESSAGES.uploading);
      const processedImage = await compressImage(image);

      // Generate reel
      setProgressMessage(PROGRESS_MESSAGES.generating);
      const result = await generateReel(processedImage, description);

      if (result.success && result.videoUrl && result.caption) {
        setVideoUrl(result.videoUrl);
        setCaption(result.caption);
        setGenerationId(result.generationId || null);
        setAppState('preview');
      } else {
        throw new Error(result.error || 'Failed to generate reel');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setAppState('error');
    }
  }, [image, description]);

  // Update caption
  const updateCaption = useCallback((newCaption: string) => {
    setCaption(newCaption);
  }, []);

  // Post to Instagram
  const postToInstagram = useCallback(async () => {
    if (!videoUrl || !caption || !generationId) return;

    setAppState('posting');
    setError(null);

    try {
      const result = await postToIG(videoUrl, caption, generationId);

      if (result.success && result.postUrl) {
        setPostUrl(result.postUrl);
        setAppState('success');
      } else {
        throw new Error(result.error || 'Failed to post to Instagram');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to post to Instagram');
      setAppState('error');
    }
  }, [videoUrl, caption, generationId]);

  // Retry (regenerate)
  const retry = useCallback(() => {
    setVideoUrl(null);
    setCaption('');
    setGenerationId(null);
    setError(null);
    setAppState('input');
  }, []);

  // Reset (start over)
  const reset = useCallback(() => {
    // Clean up image preview
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageState(null);
    setImagePreview(null);
    setDescription('');
    setAppState('input');
    setProgressMessage('');
    setVideoUrl(null);
    setCaption('');
    setGenerationId(null);
    setPostUrl(null);
    setError(null);
  }, [imagePreview]);

  return {
    // State
    image,
    imagePreview,
    description,
    appState,
    progressMessage,
    videoUrl,
    caption,
    generationId,
    postUrl,
    error,

    // Actions
    setImage,
    setDescription,
    generate,
    updateCaption,
    postToInstagram,
    retry,
    reset,
  };
}
