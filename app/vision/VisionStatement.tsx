import { visionContent } from "./visionContent";

export default function VisionStatement() {
  const { statement } = visionContent;

  return (
    <section className="section">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        <h2 className="md:col-span-4 text-2xl font-medium">
          {statement.title}
        </h2>

        <div className="md:col-span-8 space-y-6 leading-relaxed">
          {statement.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
