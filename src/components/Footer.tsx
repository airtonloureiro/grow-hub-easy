import { Instagram, Linkedin, Youtube } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";

export const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center space-y-4">
            <BrandMark
              size="lg"
              className="justify-center gap-0"
              hubClassName="text-primary-foreground"
              crescimentoClassName="text-accent"
              logoClassName="-mr-10"
            />
            <p className="text-primary-foreground/80 text-sm">
              Automações Acessíveis & Estratégias Digitais
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/airton_souzel/" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/airton-souza-b79144202/" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="https://www.youtube.com/@airtonsouza6036" 
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
          
          <div className="text-center text-primary-foreground/60 text-sm pt-6 border-t border-primary-foreground/10 w-full">
            <p>© 2025 Hub do Crescimento. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
