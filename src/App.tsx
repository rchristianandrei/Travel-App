import { HeroSection } from "@/pages/HeroSection";
import { ItinerarySection } from "@/pages/ItinerarySection";

function App() {
  return (
    <div
      className="h-screen overflow-auto bg-cover bg-center px-5"
      style={{ backgroundImage: "url('/binondo-gate.webp')" }}
    >
      <HeroSection />
      <ItinerarySection />
    </div>
  );
}

export default App;
