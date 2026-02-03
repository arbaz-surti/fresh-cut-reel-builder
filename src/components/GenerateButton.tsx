'use client';

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export function GenerateButton({ onClick, disabled }: GenerateButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="w-full py-4 px-6 rounded-xl bg-brand-dark-brown text-brand-cream font-semibold text-lg shadow-lg shadow-brand-dark-brown/20 hover:bg-brand-brown active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
    >
      Generate Reel
    </button>
  );
}
