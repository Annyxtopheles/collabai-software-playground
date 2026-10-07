import { Outlet } from "react-router-dom";
import NavigationNew from "@/components/new/NavigationNew";
import FooterNew from "@/components/new/FooterNew";
import IndustryChooserModal from "@/components/new/IndustryChooserModal";

const LayoutNew = () => (
  <div className="flex min-h-screen flex-col bg-background text-foreground">
    <NavigationNew />
    <main className="flex-1 instapaper_body">
      <Outlet />
    </main>
    <FooterNew />
    <IndustryChooserModal />
  </div>
);

export default LayoutNew;