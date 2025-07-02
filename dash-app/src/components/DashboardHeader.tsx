
import { Menu, User } from "lucide-react";
import { SidebarTrigger } from "../components/ui/sidebar";
import { Button } from "../components/ui/button";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SidebarTrigger>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
