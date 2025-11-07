import { BookOpen, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Aprendizado",
    description: "Métodos práticos e acessíveis para qualquer empreendedor"
  },
  {
    icon: Users,
    title: "Conexão",
    description: "Comunidade ativa de empresários locais"
  },
  {
    icon: TrendingUp,
    title: "Resultados",
    description: "Crescimento sustentável e mensurado"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl text-primary">
              Sobre o Movimento
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Hub do Crescimento é uma iniciativa que ajuda empreendedores a automatizar processos e crescer de forma acessível, prática e sustentável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-card hover:shadow-lg transition-shadow duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
