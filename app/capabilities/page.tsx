import { CapabilitiesHero, CapabilitiesInfra, CapabilitiesIntro, CapabilitiesStats, Services } from "../components/capabilities/allcomps";
import Buyers from "../components/capabilities/buyers";

export default function Page() {
    return (
      <>
        <CapabilitiesHero />
        <CapabilitiesIntro />
        <CapabilitiesStats />
        <Services />
        <CapabilitiesInfra />
        <Buyers />
      </>
    );
  }