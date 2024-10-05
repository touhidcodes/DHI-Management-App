"use client";

import DashboardDrawer from "@/components/layout/DashboardDrawer/DashboardDrawer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //   const router = useRouter();
  //   if (!isLoggedIn()) {
  //     return router.push("/login");
  //   }
  return <DashboardDrawer>{children} </DashboardDrawer>;
};

export default DashboardLayout;
