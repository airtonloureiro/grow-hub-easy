import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-primary-foreground">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">100% Gratuito</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-primary-foreground font-bold">
            Dê o próximo passo no crescimento do seu negócio
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Entre agora na comunidade e comece a transformar sua empresa com automações inteligentes
          </p>
          
          <Button 
            size="xl" 
            variant="accent"
            className="group shadow-2xl"
            onClick={() => window.open('https://chat.whatsapp.com/your-link', '_blank')}
          >
            Entrar na Comunidade Gratuita
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-primary-foreground/70">
            ✓ Sem custos ocultos  ✓ Sem necessidade de conhecimento técnico  ✓ Suporte da comunidade
          </p>
        </div>
      </div>
    </section>
  );
};
