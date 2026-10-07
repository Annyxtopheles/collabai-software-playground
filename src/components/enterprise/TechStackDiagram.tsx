import { useScrollReveal } from "@/hooks/useScrollReveal";

const boxes = [
  { id: "frontend", label: "Frontend", items: ["React", "Vite", "TypeScript", "Tailwind"], x: 20, y: 20, w: 160, h: 110 },
  { id: "backend", label: "Backend", items: ["Node.js", "Express", "JWT", "Joi"], x: 220, y: 20, w: 160, h: 110 },
  { id: "database", label: "Database", items: ["PostgreSQL", "RLS", "Backups", "Monitoring"], x: 20, y: 170, w: 160, h: 110 },
  { id: "infra", label: "Infrastructure", items: ["Docker", "PM2", "Nginx", "CI/CD"], x: 220, y: 170, w: 160, h: 110 },
];

const connections = [
  { from: [180, 75], to: [220, 75] },   // Frontend → Backend
  { from: [100, 130], to: [100, 170] },  // Frontend → Database
  { from: [300, 130], to: [300, 170] },  // Backend → Infra
  { from: [180, 225], to: [220, 225] },  // Database → Infra
  { from: [220, 130], to: [100, 170] },  // Backend → Database (diagonal)
];

const TechStackDiagram = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div ref={ref} className="max-w-md mx-auto mb-10">
    </div>
  );
};

export default TechStackDiagram;