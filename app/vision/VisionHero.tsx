import { visionContent } from "./visionContent";

export default function VisionHero() {
  const { hero } = visionContent;

  return (
    <section className="hero-section">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-6 text-sm uppercase tracking-widest text-muted-foreground">
          {hero.eyebrow}
        </p>

        <h1 className="whitespace-pre-line text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-muted-foreground leading-relaxed">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
