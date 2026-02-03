'use client';

import { useState } from 'react';

interface CaptionEditorProps {
  caption: string;
  onSave: (caption: string) => void;
}

export function CaptionEditor({ caption, onSave }: CaptionEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(caption);
  const maxLength = 2200; // Instagram caption limit

  const handleEdit = () => {
    setEditValue(caption);
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(caption);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="space-y-3">
        <label className="block text-sm font-medium text-brand-brown">
          Edit Caption
        </label>
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          maxLength={maxLength}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-brand-light-brown/50 bg-white/80 text-brand-dark-brown text-sm focus:border-brand-brown focus:ring-1 focus:ring-brand-brown transition-colors resize-none"
          autoFocus
        />
        <div className="flex items-center justify-between">
          <span className="text-xs text-brand-grey">
            {editValue.length}/{maxLength}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleCancel}
              className="px-4 py-2 text-sm font-medium text-brand-grey hover:text-brand-brown transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium bg-brand-brown text-brand-cream rounded-lg hover:bg-brand-dark-brown transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-brand-brown">
          Caption
        </label>
        <button
          onClick={handleEdit}
          className="text-sm font-medium text-brand-light-brown hover:text-brand-brown transition-colors flex items-center gap-1"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
      </div>
      <div className="p-4 rounded-xl bg-white/80 border border-brand-light-brown/30">
        <p className="text-sm text-brand-dark-brown whitespace-pre-wrap">
          {caption}
        </p>
      </div>
    </div>
  );
}
