import { ShadcnNavbar } from "@/components/ui/shadcn-navbar";
import {
  Shield,
  TrendingUp,
  Users,
  Building2,
  Stethoscope,
  Calculator,
  Scale,
  FileText,
  BookOpen,
  Zap,
  HelpCircle,
  DollarSign,
  Mail,
  Database,
} from "lucide-react";

const Navigation = () => {
  const menuItems = [
    {
      title: "Features",
      url: "/features",
      items: [
        {
          title: "CollabAI Features",
          description: "Explore all AI-powered features and capabilities",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/features",
        },
        {
          title: "Security & Privacy Guaranteed",
          description: "Enterprise-grade security and privacy controls",
          icon: <Shield className="size-5 shrink-0" />,
          url: "/security",
        },
        {
          title: "Open-Source Innovation",
          description: "Built on open-source principles for transparency",
          icon: <FileText className="size-5 shrink-0" />,
          url: "/features/open-source",
        },
        {
          title: "Enterprise Architecture",
          description: "Deep dive into CollabAI's secure, scalable infrastructure",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/enterprise-architecture",
        },
        {
          title: "Built on Supabase",
          description: "How Supabase powers CollabAI's infrastructure",
          icon: <Database className="size-5 shrink-0" />,
          url: "/built-on-supabase",
        },
      ],
    },
    {
      title: "Industry",
      url: "/playbooks",
      items: [
        {
          title: "CollabAI for Healthcare",
          description: "Secure AI for healthcare providers",
          icon: <Stethoscope className="size-5 shrink-0" />,
          url: "/industry/healthcare",
        },
        {
          title: "CollabAI for Mortgage & Finance",
          description: "AI solutions for financial institutions",
          icon: <TrendingUp className="size-5 shrink-0" />,
          url: "/industry/mortgage",
        },
        {
          title: "CollabAI for Agency",
          description: "Agency-specific AI automation solutions",
          icon: <Building2 className="size-5 shrink-0" />,
          url: "/industry/agency",
        },
        {
          title: "CollabAI for Non-profit",
          description: "AI tools designed for non-profit organizations",
          icon: <Users className="size-5 shrink-0" />,
          url: "/industry/non-profit",
        },
        {
          title: "CollabAI for Accounting",
          description: "Streamline accounting workflows with AI",
          icon: <Calculator className="size-5 shrink-0" />,
          url: "/industry/accounting",
        },
        {
          title: "CollabAI for Legal (Law Firm)",
          description: "AI-powered legal document processing",
          icon: <Scale className="size-5 shrink-0" />,
          url: "/industry/legal",
        },
      ],
    },
    {
      title: "All AI Agents",
      url: "https://store.collabai.software/",
    },
    {
      title: "Resources",
      url: "/resources",
      items: [
        /* {
          title: "Case Studies",
          description: "Real-world success stories and implementations",
          icon: <FileText className="size-5 shrink-0" />,
          url: "/case-studies",
        }, */
        {
          title: "Blog",
          description: "Latest insights and industry updates",
          icon: <BookOpen className="size-5 shrink-0" />,
          url: "/blog",
        },
        /* {
          title: "Whitepapers",
          description: "In-depth technical documentation",
          icon: <FileText className="size-5 shrink-0" />,
          url: "/resources/whitepapers",
        }, */
        {
          title: "FAQs",
          description: "Frequently asked questions and answers",
          icon: <HelpCircle className="size-5 shrink-0" />,
          url: "/resources/faqs",
        },
        {
          title: "How to install CollabAI",
          description: "Complete installation guide and setup instructions",
          icon: <FileText className="size-5 shrink-0" />,
          url: "/resources/installation",
        },
        {
          title: "Contribute to CollabAI",
          description: "Join our open source community",
          icon: <BookOpen className="size-5 shrink-0" />,
          url: "https://github.com/sjinnovation/CollabAI/blob/main/CONTRIBUTING.md",
        },
        /* {
          title: "Knowledge Base",
          description: "Comprehensive documentation and articles",
          icon: <HelpCircle className="size-5 shrink-0" />,
          url: "/resources/knowledge-base",
        }, */
        {
          title: "Integrations",
          description: "Connect your favorite tools and platforms",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/integrations",
        },
      ],
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
  ];

  return (
    <ShadcnNavbar
      menu={menuItems}
      auth={{
        login: { text: "Log in", url: "#" },
        signup: { text: "Try Demo", url: "/try-demo" },
      }}
    />
  );
};

export default Navigation;
