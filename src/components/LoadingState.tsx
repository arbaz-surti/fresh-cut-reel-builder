'use client';

interface LoadingStateProps {
  message: string;
}

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {/* Spinner */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-brand-light-brown/30" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-brown animate-spin" />
      </div>

      {/* Message */}
      <p className="text-brand-brown font-medium text-lg text-center animate-pulse">
        {message}
      </p>

      {/* Tip */}
      <p className="text-brand-grey text-sm mt-4 text-center max-w-xs">
        This usually takes about 30-60 seconds. Don't close the app.
      </p>
    </div>
  );
}
