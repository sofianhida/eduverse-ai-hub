
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
}

const LoadingSpinner = ({ 
  size = "medium", 
  text, 
  className = "" 
}: LoadingSpinnerProps) => {
  const sizeClass = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 
        className={`${sizeClass[size]} text-edu-primary animate-spin mb-2`} 
      />
      {text && <p className="text-sm text-edu-dark/70">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
