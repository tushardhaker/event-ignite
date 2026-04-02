import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LineupSection from "@/components/LineupSection";
import ScheduleSection from "@/components/ScheduleSection";
import ExperienceSection from "@/components/ExperienceSection";
import TicketsSection from "@/components/TicketsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <LineupSection />
    <ScheduleSection />
    <ExperienceSection />
    <TicketsSection />
    <ContactSection />
  </div>
);

export default Index;
