'use client'

import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { getUserInfo, isLoggedIn } from "./auth.service";
import { toast } from "sonner";

const PrivateRoute = ({ children }:{children:ReactNode}) => {

  type TUserInfo = {
    email?: string;
    id?: string;
    role?: string;
    iat?: Number;
    exp?: Number;
  };
  const router = useRouter();

  const pathName = usePathname();

  const isLoggedInUser = isLoggedIn();
  const userInfo:TUserInfo | null = getUserInfo()
  if (!isLoggedInUser) {
    router.push("/login");
    localStorage.setItem("redirectAfterLoginPath", pathName);
  }
  if (userInfo?.role !== 'admin') {
    router.push("/");
    toast.success('Forbidden access')
    localStorage.setItem("redirectAfterLoginPath", pathName);
  }
  else{
      return <>{children}</>;
    }
    
return <div className="min-h-screen"></div>;
};

export default PrivateRoute;
