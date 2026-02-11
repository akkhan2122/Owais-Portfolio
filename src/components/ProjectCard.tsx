import { ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  url: string;
  index: number;
}

export function ProjectCard({ title, category, description, url, index }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-card glass-card-hover h-full flex flex-col overflow-hidden group">
        <CardHeader className="p-6 pb-2">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
              {category}
            </Badge>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <h3 className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
        <CardContent className="p-6 pt-2 flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-white hover:text-primary transition-colors"
          >
            View Project <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
