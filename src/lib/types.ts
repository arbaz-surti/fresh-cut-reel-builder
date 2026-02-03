// App State Types
export type AppState = 'input' | 'generating' | 'preview' | 'posting' | 'success' | 'error';

// Generation Request/Response
export interface GenerateRequest {
  image: File;
  description: string;
}

export interface GenerateResponse {
  success: boolean;
  videoUrl?: string;
  caption?: string;
  generationId?: string;
  error?: string;
}

// Post Request/Response
export interface PostRequest {
  videoUrl: string;
  caption: string;
  generationId: string;
}

export interface PostResponse {
  success: boolean;
  postUrl?: string;
  mediaId?: string;
  error?: string;
}

// Hook State
export interface ReelBuilderState {
  // Input
  image: File | null;
  imagePreview: string | null;
  description: string;

  // App State
  appState: AppState;
  progressMessage: string;

  // Generated Content
  videoUrl: string | null;
  caption: string;
  generationId: string | null;

  // Result
  postUrl: string | null;

  // Error
  error: string | null;
}

// Progress Messages
export const PROGRESS_MESSAGES = {
  uploading: 'Uploading your image...',
  generating: 'Creating your video (about 30 seconds)...',
  caption: 'Writing your caption...',
  posting: 'Posting to Instagram...',
} as const;
