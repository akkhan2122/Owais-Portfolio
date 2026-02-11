import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  projectType: string;
}

export function TestimonialCard({ name, role, content, projectType }: TestimonialProps) {
  return (
    <Card className="bg-secondary/30 border-white/5 backdrop-blur-sm min-w-[300px] md:min-w-[400px] snap-center">
      <CardContent className="p-8 flex flex-col h-full relative">
        <Quote className="absolute top-6 right-6 text-primary/20 w-10 h-10" />
        <div className="mb-6 flex-grow">
          <p className="text-lg italic text-foreground/90 leading-relaxed">"{content}"</p>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg">{name}</h4>
          <p className="text-primary text-sm font-medium mb-1">{role}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">{projectType}</p>
        </div>
      </CardContent>
    </Card>
  );
}
