import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-background py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              Transforme seu negócio com automações acessíveis.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Aprenda como fazer sua empresa economizar tempo e dinheiro com ferramentas gratuitas e inteligentes.
            </p>
            <Button 
              size="xl" 
              variant="accent"
              className="group"
              onClick={() => window.open('https://chat.whatsapp.com/FgWJYHioQxIDKgB7f4j8ZT?mode=wwt', '_blank')}
            >
              Quero participar gratuitamente
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={heroImage} 
                alt="Automação e tecnologia para empresas" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
