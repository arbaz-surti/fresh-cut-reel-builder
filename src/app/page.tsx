'use client';

import { useReelBuilder } from '@/hooks/useReelBuilder';
import { ImageUploader } from '@/components/ImageUploader';
import { DescriptionInput } from '@/components/DescriptionInput';
import { GenerateButton } from '@/components/GenerateButton';
import { LoadingState } from '@/components/LoadingState';
import { PreviewPanel } from '@/components/PreviewPanel';
import { SuccessMessage } from '@/components/SuccessMessage';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function Home() {
  const {
    // State
    image,
    imagePreview,
    description,
    appState,
    progressMessage,
    videoUrl,
    caption,
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
  } = useReelBuilder();

  const canGenerate = image !== null && description.trim().length > 0;

  return (
    <main className="min-h-screen min-h-dvh flex flex-col">
      {/* Header */}
      <header className="bg-brand-dark-brown text-brand-cream px-4 py-3 flex items-center justify-center sticky top-0 z-10">
        <h1 className="text-lg font-semibold tracking-tight">
          Fresh Cut Woodworking
        </h1>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6 overflow-auto">
        {/* Input State */}
        {appState === 'input' && (
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-brand-dark-brown mb-2">
                Create a Reel
              </h2>
              <p className="text-brand-grey text-sm">
                Upload a product photo and we'll turn it into an Instagram-ready video
              </p>
            </div>

            <ImageUploader
              imagePreview={imagePreview}
              onImageSelect={setImage}
            />

            <DescriptionInput
              value={description}
              onChange={setDescription}
            />

            <GenerateButton
              onClick={generate}
              disabled={!canGenerate}
            />
          </div>
        )}

        {/* Generating State */}
        {appState === 'generating' && (
          <LoadingState message={progressMessage} />
        )}

        {/* Preview State */}
        {appState === 'preview' && videoUrl && (
          <PreviewPanel
            videoUrl={videoUrl}
            caption={caption}
            onCaptionChange={updateCaption}
            onPost={postToInstagram}
            onRetry={retry}
          />
        )}

        {/* Posting State */}
        {appState === 'posting' && (
          <LoadingState message="Posting to Instagram..." />
        )}

        {/* Success State */}
        {appState === 'success' && postUrl && (
          <SuccessMessage
            postUrl={postUrl}
            onCreateAnother={reset}
          />
        )}

        {/* Error State */}
        {appState === 'error' && error && (
          <ErrorMessage
            message={error}
            onRetry={retry}
            onStartOver={reset}
          />
        )}
      </div>
    </main>
  );
}
