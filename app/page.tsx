import CallUs from "@/components/CallUs";
import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import OtherMaterials from "@/components/OtherMaterials";
import OtherStyles from "@/components/OtherStyles";
import Team from "@/components/Team";
import VideoQuote from "@/components/VideoQuote";
import WhyMN from "@/components/WhyMN";

export default function Home() {
  return (
    <main>
      <Header />
      <VideoQuote />
      <CallUs />
      <Team />
      <OtherStyles />
      <OtherMaterials />
      <WhyMN />
      <FAQ />
    </main>
  );
}