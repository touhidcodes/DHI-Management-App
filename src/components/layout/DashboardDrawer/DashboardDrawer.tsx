"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardDrawer = ({ children }: DashboardLayoutProps) => {
  // State to control drawer visibility
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Drawer (Sidebar) */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-gray-800 text-white transition-all duration-300`}
      >
        <nav className="h-full flex flex-col justify-between">
          {/* Top Navigation */}
          <div className="p-4">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-700 hover:bg-gray-600 w-full mb-4"
            >
              {isOpen ? "Close" : "Open"}
            </Button>
            <ul>
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700"
                  variant="ghost"
                >
                  Dashboard
                </Button>
              </li>
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700"
                  variant="ghost"
                >
                  Profile
                </Button>
              </li>
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700"
                  variant="ghost"
                >
                  Settings
                </Button>
              </li>
            </ul>
          </div>

          {/* Bottom Logout Button */}
          <div className="p-4">
            <Button className="w-full bg-red-600 hover:bg-red-500">
              Logout
            </Button>
          </div>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
        {children}
      </div>
    </div>
  );
};

export default DashboardDrawer;
