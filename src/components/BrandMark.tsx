import logo from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

type BrandMarkSize = "sm" | "md" | "lg";

type BrandMarkProps = {
  className?: string;
  size?: BrandMarkSize;
  textClassName?: string;
  hubClassName?: string;
  crescimentoClassName?: string;
  logoClassName?: string;
};

const sizeMap: Record<BrandMarkSize, { image: string; text: string }> = {
  sm: { image: "h-8", text: "text-xl" },
  md: { image: "h-10", text: "text-2xl" },
  lg: { image: "h-36", text: "text-3xl" },
};

export const BrandMark = ({
  className,
  size = "md",
  textClassName,
  hubClassName,
  crescimentoClassName,
  logoClassName,
}: BrandMarkProps) => {
  const sizes = sizeMap[size];

  const combinedTextClassName = textClassName ?? sizes.text;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src={logo}
        alt="Hub do Crescimento"
        className={cn("object-contain w-auto", sizes.image, logoClassName)}
      />

      <div className="flex items-center gap-1">
        <span
          className={cn("font-semibold text-primary", combinedTextClassName, hubClassName)}
        >
          Hub de
        </span>
        <span
          className={cn("font-semibold text-accent", combinedTextClassName, crescimentoClassName)}
        >
          Crescimento
        </span>
      </div>
    </div>
  );
};

