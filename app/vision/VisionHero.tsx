import { visionContent } from "./vision.config";

export default function VisionHero() {
  const { hero } = visionContent;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-28">
        <p className="mb-6 text-sm uppercase tracking-widest text-neutral-500">
          {hero.eyebrow}
        </p>

        <h1 className="whitespace-pre-line text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
          {hero.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-neutral-600 leading-relaxed">
          {hero.description}
        </p>
      </div>
    </section>
  );
}
