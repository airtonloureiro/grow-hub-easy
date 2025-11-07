import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Calendar, Zap } from "lucide-react";

const learningItems = [
  {
    icon: MessageSquare,
    title: "Automatize cobranças no WhatsApp",
    description: "Configure lembretes automáticos e nunca mais perca pagamentos"
  },
  {
    icon: Calendar,
    title: "Agende reuniões automaticamente",
    description: "Integre o Calendly e deixe seus clientes marcarem horários sozinhos"
  },
  {
    icon: Zap,
    title: "Fluxos de trabalho inteligentes",
    description: "Economize horas por semana automatizando tarefas repetitivas"
  }
];

export const LearningSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl text-primary">
              O que você vai aprender
            </h2>
            <p className="text-lg text-muted-foreground">
              Ferramentas práticas que transformam seu dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {learningItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index}
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
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
