'use client';

import { useCallback, useRef } from 'react';

interface ImageUploaderProps {
  imagePreview: string | null;
  onImageSelect: (file: File | null) => void;
}

export function ImageUploader({ imagePreview, onImageSelect }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onImageSelect(null);
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    },
    [onImageSelect]
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-brand-brown">
        Product Photo
      </label>

      <button
        type="button"
        onClick={handleClick}
        className="w-full aspect-square rounded-2xl border-2 border-dashed border-brand-light-brown bg-white/50 hover:bg-white/80 transition-colors flex flex-col items-center justify-center overflow-hidden relative"
      >
        {imagePreview ? (
          <>
            <img
              src={imagePreview}
              alt="Product preview"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-3 right-3 w-8 h-8 bg-brand-dark-brown/80 hover:bg-brand-dark-brown rounded-full flex items-center justify-center text-brand-cream transition-colors"
              aria-label="Remove image"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </>
        ) : (
          <>
            <div className="w-16 h-16 mb-4 rounded-full bg-brand-light-brown/20 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-brand-brown"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-brand-brown font-medium">
              Tap to upload photo
            </span>
            <span className="text-brand-grey text-sm mt-1">
              JPG, PNG, or HEIC
            </span>
          </>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}
