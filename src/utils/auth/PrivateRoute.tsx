// 'use client'

// import { usePathname, useRouter } from "next/navigation";
// import React, { ReactNode } from "react";
// import { getUserInfo, isLoggedIn } from "./auth.service";
// import { toast } from "sonner";

// const PrivateRoute = ({ children }:{children:ReactNode}) => {

//   type TUserInfo = {
//     email?: string;
//     id?: string;
//     role?: string;
//     iat?: Number;
//     exp?: Number;
//   };
//   const router = useRouter();

//   const pathName = usePathname();

//   const isLoggedInUser = isLoggedIn();
//   const userInfo:TUserInfo | null = getUserInfo()
//   if (!isLoggedInUser) {
//     router.push("/login");
//     localStorage.setItem("redirectAfterLoginPath", pathName);
//   }
//   if (userInfo?.role !== 'admin') {
//     router.push("/");
//     toast.success('Forbidden access')
//     localStorage.setItem("redirectAfterLoginPath", pathName);
//   }
//   else{
//       return <>{children}</>;
//     }
    
// return <div className="min-h-screen"></div>;
// };

// export default PrivateRoute;



'use client';

import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { getUserInfo, isLoggedIn } from "./auth.service";
import { toast } from "sonner";

type TUserInfo = {
  email?: string;
  id?: string;
  role?: string;
  iat?: number;
  exp?: number;
};

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const [isClient, setIsClient] = useState(false);
  const [userInfo, setUserInfo] = useState<TUserInfo | null>(null);

  useEffect(() => {
    setIsClient(true); 
    if (typeof window !== 'undefined') {
      const loggedIn = isLoggedIn();
      if (!loggedIn) {
        localStorage.setItem("redirectAfterLoginPath", pathName);
        router.push("/login");
        return;
      }

      const user = getUserInfo();
          //@ts-ignore
      if (user?.role !== 'admin') {
        localStorage.setItem("redirectAfterLoginPath", pathName);
        router.push("/");
        toast.success('Forbidden access');
        return;
      }
      //@ts-ignore
      setUserInfo(user);
    }
  }, [pathName, router]);

  // While client-specific checks are being executed, show a loading or empty screen
  if (!isClient || !userInfo) {
    return <div className="min-h-screen"></div>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
