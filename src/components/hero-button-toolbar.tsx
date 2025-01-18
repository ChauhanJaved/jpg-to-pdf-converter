//Internal Imports
import { Button } from "@/components/ui/button";

interface HeroButtonToolbarProps {
  caption?: string;
  handleOnClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ElementType;
}

export default function HeroButtonToolbar({
  caption = "",
  handleOnClick,
  disabled = false,
  className = "",
  icon: Icon,
}: HeroButtonToolbarProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Button
        disabled={disabled}
        className={`${className} h-11 w-16 p-0 sm:h-10 sm:w-auto sm:px-4 sm:py-2`}
        onClick={handleOnClick}
        aria-label={caption}
      >
        {Icon && <Icon className="sm:mr-2 sm:h-6 sm:w-6" aria-hidden="true" />}

        <span className="hidden text-base sm:block">{caption}</span>
      </Button>
      <span className="mt-1 text-xs sm:sr-only">{caption}</span>
    </div>
  );
}
