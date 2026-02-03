'use client';

interface DescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function DescriptionInput({ value, onChange }: DescriptionInputProps) {
  const maxLength = 500;
  const remaining = maxLength - value.length;

  return (
    <div className="space-y-2">
      <label
        htmlFor="description"
        className="block text-sm font-medium text-brand-brown"
      >
        Product Description
      </label>

      <textarea
        id="description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        rows={4}
        placeholder="Describe your product... (e.g., Handmade wooden cutting board, solid walnut, custom engraved)"
        className="w-full px-4 py-3 rounded-xl border border-brand-light-brown/50 bg-white/80 text-brand-dark-brown placeholder:text-brand-grey/60 focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-colors resize-none"
      />

      <div className="flex justify-end">
        <span
          className={`text-xs ${
            remaining < 50 ? 'text-amber-600' : 'text-brand-grey'
          }`}
        >
          {remaining} characters remaining
        </span>
      </div>
    </div>
  );
}
