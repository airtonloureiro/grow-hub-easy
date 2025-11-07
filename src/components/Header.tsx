import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:h-20 sm:py-0">
          <BrandMark
            size="lg"
            textClassName="text-xl sm:text-2xl"
            className="gap-0"
            logoClassName="h-16 -mr-6 sm:h-36 sm:-mr-10"
          />
          
          <Button
            variant="accent"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() =>
              window.open(
                "https://chat.whatsapp.com/FgWJYHioQxIDKgB7f4j8ZT?mode=wwt",
                "_blank",
              )
            }
          >
            Entrar na Comunidade
          </Button>
        </div>
      </div>
    </header>
  );
};
