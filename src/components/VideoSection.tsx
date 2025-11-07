import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

export const VideoSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl text-primary">
              Caso Real de Sucesso
            </h2>
            <p className="text-lg text-muted-foreground">
              Veja como uma pequena empresa local economizou 10 horas por semana com automações simples
            </p>
          </div>
          
          <Card className="overflow-hidden shadow-xl border-none">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center group cursor-pointer hover:from-primary/90 hover:to-primary/80 transition-all duration-300">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play className="w-10 h-10 text-accent-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-primary-foreground text-lg font-medium">Assistir caso de sucesso</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground italic">
              "Depois das automações, conseguimos focar no que realmente importa: atender melhor nossos clientes"
            </p>
            <p className="text-primary font-medium mt-2">— Empresário Local</p>
          </div>
        </div>
      </div>
    </section>
  );
};
