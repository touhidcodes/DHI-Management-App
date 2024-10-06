"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/solid";

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
          isOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white transition-all duration-300`}
      >
        <nav className="h-full flex flex-col justify-between">
          {/* Top Navigation */}
          <div className="p-3">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-700 hover:bg-gray-600 w-full mb-4"
            >
              {isOpen ? "Close" : "Open"}
            </Button>
            <ul>
              {/* Dashboard Button */}
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700 flex items-center space-x-2"
                  variant="ghost"
                >
                  <HomeIcon className="h-6 w-6" />
                  {isOpen && (
                    <span className="whitespace-nowrap">Dashboard</span>
                  )}
                </Button>
              </li>

              {/* Profile Button */}
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700 flex items-center space-x-2"
                  variant="ghost"
                >
                  <UserIcon className="h-6 w-6" />
                  {isOpen && <span className="whitespace-nowrap">Profile</span>}
                </Button>
              </li>

              {/* Settings Button */}
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700 flex items-center space-x-2"
                  variant="ghost"
                >
                  <CogIcon className="h-6 w-6" />
                  {isOpen && (
                    <span className="whitespace-nowrap">Settings</span>
                  )}
                </Button>
              </li>

              {/* Student Button */}
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700 flex items-center space-x-2"
                  variant="ghost"
                >
                  <CogIcon className="h-6 w-6" />
                  {isOpen && <span className="whitespace-nowrap">Student</span>}
                </Button>
              </li>

              {/* Teacher Button */}
              <li className="mb-2">
                <Button
                  className="w-full justify-start text-left bg-transparent hover:bg-gray-700 flex items-center space-x-2"
                  variant="ghost"
                >
                  <CogIcon className="h-6 w-6" />
                  {isOpen && <span className="whitespace-nowrap">Teacher</span>}
                </Button>
              </li>
            </ul>
          </div>

          {/* Bottom Logout Button */}
          <div className="p-3">
            <Button className="w-full bg-red-600 hover:bg-red-500 flex items-center justify-center space-x-2">
              <UserIcon className="h-6 w-6" />
              {isOpen && <span className="whitespace-nowrap">Logout</span>}
            </Button>
          </div>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 overflow-auto">{children}</div>
    </div>
  );
};

export default DashboardDrawer;
