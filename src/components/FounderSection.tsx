import profileImage from "@/assets/airtonsouza.png";

export const FounderSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="relative mx-auto max-w-xs md:max-w-sm">
            <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-background shadow-xl">
              <img
                src={profileImage}
                alt="Airton Souza - Hub de Crescimento Local"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-sm font-medium text-accent">
                Airton Souza | Hub de Crescimento Local
              </span>
              <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                Sou Engenheiro de Software e criador da Hub de Crescimento Local
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Conduzo um movimento que mostra, na prática, como fazer o seu negócio
              trabalhar sozinho. Acredito em automações acessíveis, no poder das
              ferramentas gratuitas e em estratégias aplicáveis no dia a dia de
              qualquer empreendedor que deseja crescer com inteligência.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Aqui você encontra um caminho claro para estruturar processos, ganhar
              tempo e se aproximar dos seus clientes, construindo uma operação que
              continua girando mesmo quando você não está por perto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

