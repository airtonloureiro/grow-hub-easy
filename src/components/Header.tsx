import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <BrandMark
            size="lg"
            textClassName="text-2xl"
            className="gap-0"
            logoClassName="-mr-10"
          />
          
          <Button 
            variant="accent"
            size="lg"
            onClick={() => window.open('https://chat.whatsapp.com/FgWJYHioQxIDKgB7f4j8ZT?mode=wwt', '_blank')}
          >
            Entrar na Comunidade
          </Button>
        </div>
      </div>
    </header>
  );
};
