import { visionContent } from "./vision.config";

export default function VisionStatement() {
  const { statement } = visionContent;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <h2 className="md:col-span-4 text-2xl font-medium">
          {statement.title}
        </h2>

        <div className="md:col-span-8 space-y-6 text-neutral-700 leading-relaxed">
          {statement.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
