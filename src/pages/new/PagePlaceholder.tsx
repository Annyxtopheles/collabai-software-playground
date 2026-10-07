import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageSeoHead from "@/components/PageSeoHead";

interface Props {
  title: string;
  phase: string;
  description?: string;
}

const PagePlaceholder = ({ title, phase, description }: Props) => (
  <>
    <PageSeoHead title={`${title} — Control Tower (staging)`} description={description ?? title} noindex />
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        <Construction className="h-3.5 w-3.5" /> {phase}
      </span>
      <h1 className="mt-5 text-4xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
      <p className="mt-6 text-sm text-muted-foreground">
        This route is reserved on the new sitemap. Real content lands in its scheduled phase.
      </p>
      <Button asChild variant="outline" className="mt-8">
        <Link to="/new"><ArrowLeft className="mr-2 h-4 w-4" /> Back to /new home</Link>
      </Button>
    </section>
  </>
);

export default PagePlaceholder;