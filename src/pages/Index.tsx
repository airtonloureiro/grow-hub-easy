import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { LearningSection } from "@/components/LearningSection";
import { VideoSection } from "@/components/VideoSection";
import { CommunitySection } from "@/components/CommunitySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <AboutSection />
      <LearningSection />
      <VideoSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
