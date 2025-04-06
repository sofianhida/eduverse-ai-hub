
import React from 'react';

/**
 * Formats text by converting parts enclosed in ** to bold
 * Example: "This is **bold** text" becomes "This is <strong>bold</strong> text"
 */
export const formatBoldText = (text: string): React.ReactNode[] => {
  if (!text.includes('**')) {
    return [text];
  }

  const parts = text.split('**');
  return parts.map((part, index) => {
    // Even indices are regular text, odd indices are bold text
    if (index % 2 === 0) {
      return part;
    } else {
      return <strong key={index}>{part}</strong>;
    }
  });
};
