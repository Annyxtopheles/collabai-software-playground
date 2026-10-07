import { Menu, ChevronDown } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

interface ShadcnNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  auth?: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const ShadcnNavbar = ({
  logo = {
    url: "/",
    src: "/lovable-uploads/aed406e1-e3d5-4045-9238-c551bc2ca3a4.png",
    alt: "CollabAI",
    title: "CollabAI",
  },
  menu = [],
  mobileExtraLinks = [],
  auth = {
    login: { text: "Log in", url: "#" },
    signup: { text: "Try Demo", url: "/try-demo" },
  },
}: ShadcnNavbarProps) => {
  return (
    <section className="py-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="h-12 w-auto" alt={logo.alt} />
            </a>
          </div>
          <div className="flex items-center justify-center flex-1">
            <ul className="flex items-center gap-1">
              {menu.map((item) => renderMenuItem(item))}
            </ul>
          </div>
          <div className="flex gap-2">
            <Button
              className="group relative w-40 cursor-pointer overflow-hidden rounded-full border bg-black p-2 text-center font-semibold"
              asChild
            >
              <a href={auth.signup.url}>
              <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {auth.signup.text}
              </span>
              <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                <span>{auth.signup.text}</span>
              </div>
              <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-black transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
              </a>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="h-12 w-auto" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="h-12 w-auto" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  {mobileExtraLinks.length > 0 && (
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <a
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                            href={link.url}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-3">
                    <Button
                      className="group relative cursor-pointer overflow-hidden rounded-full border bg-black p-2 text-center font-semibold"
                      asChild
                    >
                      <a href={auth.signup.url}>
                      <span>{auth.signup.text}</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <li key={item.title} className="relative group">
        <span className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-trust-blue cursor-default select-none flex items-center gap-1">
          {item.title}
          <ChevronDown className="h-3 w-3" />
        </span>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute left-0 top-full mt-2 min-w-64 rounded-md border bg-popover text-popover-foreground shadow-[0_12px_40px_hsl(var(--primary)/0.25)] transition-all duration-300 z-50 hover:visible hover:opacity-100">
          <ul className="w-80 p-3">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                <a
                  className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors text-foreground/80 hover:text-trust-blue"
                  href={subItem.url}
                >
                  {subItem.icon}
                  <div>
                    <div className="text-sm font-semibold">{subItem.title}</div>
                    {subItem.description && (
                      <p className="text-sm leading-snug text-muted-foreground">
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li key={item.title}>
      <a
        className="group inline-flex h-auto w-max items-center justify-center px-4 py-2 text-sm font-medium transition-colors text-foreground/80 hover:text-trust-blue"
        href={item.url}
      >
        {item.title}
      </a>
    </li>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-[hsl(0,0%,96%)] hover:text-[hsl(0,0%,7%)] text-[hsl(0,0%,20%)]"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-[hsl(0,0%,20%)] hover:text-[hsl(0,0%,7%)]">
      {item.title}
    </a>
  );
};

export { ShadcnNavbar };