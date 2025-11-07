import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Library, Video } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Grupo gratuito no WhatsApp",
    description: "Troque experiências com outros empreendedores"
  },
  {
    icon: Library,
    title: "Biblioteca de automações",
    description: "Acesso a templates prontos para usar"
  },
  {
    icon: Video,
    title: "Lives práticas e diretas",
    description: "Aprenda com casos reais toda semana"
  }
];

export const CommunitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-primary">
              Faça Parte da Comunidade
            </h2>
            <p className="text-lg text-muted-foreground">
              Junte-se a centenas de empreendedores que já estão automatizando seus negócios
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="text-center border-none shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
