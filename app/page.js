import Hero from "@/components/Hero";
import ProgramCards from "@/components/ProgramCards";
import CtaBanner from "@/components/CtaBanner";
import WelcomeNews from "@/components/WelcomeNews";
import GalleryStrip from "@/components/GalleryStrip";
import { buildMetadata, SITE } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SITE.name,
  description: SITE.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramCards />
      <CtaBanner />
      <WelcomeNews />
      <GalleryStrip />
    </>
  );
}
