import VisionHero from "./VisionHero";
import VisionStatement from "./VisionStatement";
import VisionPrinciples from "./VisionPrinciples";
import VisionClosing from "./VisionClosing";

export const metadata = {
  title: "Our Vision | Remote Work Stays",
  description:
    "A new standard for remote work — thoughtfully designed stays in nature without compromising performance or comfort.",
};

export default function VisionPage() {
  return (
    <main className="bg-white">
      <VisionHero />
      <VisionStatement />
      <VisionPrinciples />
      <VisionClosing />
    </main>
  );
}