import DashboardDrawer from "@/components/Dashboard/DashboardDrawer";
import PrivateRoute from "@/utils/auth/PrivateRoute";
import { isLoggedIn } from "@/utils/auth/auth.service";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const layout = ({ children }: { children: ReactNode }) => {

  return (
    <>
    <Toaster/>
    <PrivateRoute>
      <DashboardDrawer>
        {children}
        </DashboardDrawer>
    </PrivateRoute>
    </>
  );
};

export default layout;
