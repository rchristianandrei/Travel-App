import { HeroSection } from "@/pages/HeroSection";
import { ItinerarySection } from "@/pages/ItinerarySection";
import { MustVisitPlaces } from "./pages/MustVisitPlaces";

function App() {
  return (
    <div
      className="h-screen overflow-auto bg-cover bg-center px-5"
      style={{ backgroundImage: "url('/binondo-gate.webp')" }}
    >
      <HeroSection />
      <ItinerarySection />
      <MustVisitPlaces />
    </div>
  );
}

export default App;
