
import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import { DashboardHeader } from "../components/DashboardHeader";
import { KPICards } from "../components/KPICards";
import { ChartsSection } from "../components/ChartsSection";
import { RecentOrders } from "../components/RecentOrders";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 space-y-6">
            <KPICards />
            <ChartsSection />
            <RecentOrders />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
