import { visionContent } from "./vision.config";

export default function VisionPrinciples() {
  const { principles } = visionContent;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-16 text-3xl font-medium">Our Principles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {principles.map((item) => (
          <div key={item.id} className="space-y-4">
            <span className="text-sm text-neutral-400">{item.id}</span>
            <h3 className="text-xl font-medium">{item.title}</h3>
            <p className="text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
