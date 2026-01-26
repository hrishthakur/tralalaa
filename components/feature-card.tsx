import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-md bg-muted">
            <Icon className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h3 className="text-base font-medium">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}