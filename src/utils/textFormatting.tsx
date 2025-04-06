
import React from 'react';

/**
 * Formats text by converting parts enclosed in ** to bold
 * Example: "This is **bold** text" becomes "This is <strong>bold</strong> text"
 */
export const formatBoldText = (text: string): React.ReactNode[] => {
  if (!text || !text.includes('**')) {
    return [text];
  }

  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Extract content between ** and make it bold
      const boldContent = part.substring(2, part.length - 2);
      return <strong key={index}>{boldContent}</strong>;
    } else {
      return part;
    }
  });
};
