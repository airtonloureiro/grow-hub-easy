import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Hub do Crescimento" 
              className="h-14 w-auto"
            />
          </div>
          
          <Button 
            variant="accent"
            size="lg"
            onClick={() => window.open('https://chat.whatsapp.com/your-link', '_blank')}
          >
            Entrar na Comunidade
          </Button>
        </div>
      </div>
    </header>
  );
};
