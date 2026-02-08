import VisionHero from "./VisionHero";
import VisionStatement from "./VisionStatement";
import VisionPrinciples from "./VisionPrinciples";
import VisionClosing from "./VisionClosing";
import { SITE_CONFIG } from '@/lib/site';


export const metadata = {
  title: `Our Vision | ${SITE_CONFIG.name}`,
  description:
    "A new standard for remote work — thoughtfully designed stays in nature without compromising performance or comfort.",
};

export default function VisionPage() {
  return (
    <main>
      <VisionHero />
      <VisionStatement />
      <VisionPrinciples />
      <VisionClosing />
    </main>
  );
}
