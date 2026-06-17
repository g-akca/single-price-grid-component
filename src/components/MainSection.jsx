import HeroSection from "./HeroSection";
import SubscriptionSection from "./SubscriptionSection";

function MainSection() {
  return (
    <main className="rounded-lg shadow-[0_15px_30px_rgba(0,81,171,0.15)] w-full max-w-158.75 overflow-hidden flex flex-col">
      <HeroSection />
      <SubscriptionSection />
    </main>
  )
}

export default MainSection;