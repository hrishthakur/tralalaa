import { visionContent } from "./visionContent";

export default function VisionClosing() {
  const { closing } = visionContent;

  return (
    <section className="section border-t">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Closing thought
        </p>

        <h2 className="mt-3 text-3xl font-semibold">
          {closing.title}
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          {closing.description}
        </p>
      </div>
    </section>
  );
}
