import { visionContent } from "./visionContent";

export default function VisionPrinciples() {
  const { principles } = visionContent;

  return (
    <section className="section bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="mb-12 text-3xl font-semibold">
          Our Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {principles.map((item) => (
            <div key={item.id} className="card">
              <span className="text-xs text-muted-foreground">
                {item.id}
              </span>
              <h3 className="mt-3 text-xl font-medium">
                {item.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
