'use client';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
  onStartOver: () => void;
}

export function ErrorMessage({ message, onRetry, onStartOver }: ErrorMessageProps) {
  return (
    <div className="max-w-md mx-auto text-center py-8">
      {/* Error Icon */}
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
        <svg
          className="w-10 h-10 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* Message */}
      <h2 className="text-2xl font-bold text-brand-dark-brown mb-2">
        Something went wrong
      </h2>
      <p className="text-brand-grey mb-8">
        {message}
      </p>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onRetry}
          className="w-full py-4 px-6 rounded-xl bg-brand-dark-brown text-brand-cream font-semibold hover:bg-brand-brown active:scale-[0.98] transition-all"
        >
          Try Again
        </button>

        <button
          onClick={onStartOver}
          className="w-full py-3 px-6 rounded-xl border-2 border-brand-light-brown text-brand-brown font-medium hover:bg-brand-light-brown/10 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
