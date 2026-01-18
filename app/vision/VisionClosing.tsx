import { visionContent } from "./vision.config";

export default function VisionClosing() {
  const { closing } = visionContent;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 border-t">
      <div className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-medium">{closing.title}</h2>
        <p className="text-lg text-neutral-700 leading-relaxed">
          {closing.description}
        </p>
      </div>
    </section>
  );
}
