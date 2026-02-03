import { GenerateResponse, PostResponse } from './types';

/**
 * Generate a reel from an image and description
 */
export async function generateReel(image: File, description: string): Promise<GenerateResponse> {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('description', description);

  const response = await fetch('/api/generate', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to generate reel');
  }

  return response.json();
}

/**
 * Post a reel to Instagram
 */
export async function postToInstagram(
  videoUrl: string,
  caption: string,
  generationId: string
): Promise<PostResponse> {
  const response = await fetch('/api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ videoUrl, caption, generationId }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to post to Instagram');
  }

  return response.json();
}

/**
 * Compress image if needed (for large camera roll images)
 */
export async function compressImage(file: File, maxSizeMB: number = 5): Promise<File> {
  // If file is small enough, return as-is
  if (file.size <= maxSizeMB * 1024 * 1024) {
    return file;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      // Calculate new dimensions (max 2048px on longest side)
      const maxDim = 2048;
      let { width, height } = img;

      if (width > height && width > maxDim) {
        height = (height * maxDim) / width;
        width = maxDim;
      } else if (height > maxDim) {
        width = (width * maxDim) / height;
        height = maxDim;
      }

      canvas.width = width;
      canvas.height = height;

      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          } else {
            reject(new Error('Failed to compress image'));
          }
        },
        'image/jpeg',
        0.85
      );
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}
