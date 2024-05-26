"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/Logo.png";
import { getUserInfo, isLoggedIn, logOut } from "@/utils/auth/auth.service";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const Navbar = () => {
  const pathName = usePathname();
  const [loggoutTrigger, setLoggoutTrigger] = useState(true);
  const [isLogggedUser, setIsLogggedUser] = useState(false);

  useEffect(() => {
    setIsLogggedUser(isLoggedIn());
  }, [loggoutTrigger]);

  type TUserInfo = {
    email?: string;
    id?: string;
    role?: string;
    iat?: Number;
    exp?: Number;
  };

  const currentPath= usePathname()
  const userInfo: TUserInfo | null = getUserInfo();
  console.log(userInfo);
  const isActive = (route:string) => {
       
    return currentPath === route ? 'text-red-500 '  : 'text-white';
  };
  const NavItems = (
    
          <>
      <span className={`text-xl  font-bold ${isActive('/')}`}>
        <Link href="/">Home</Link>
      </span>
      <span className={`text-xl font-bold ${isActive('/about')}`}>
        <Link href="/about">About</Link>
      </span>
      {userInfo?.role === 'admin' && (
        <span className={`text-xl font-bold ${isActive('/dashboard')}`}>
          <Link href="/dashboard">Dashboard</Link>
        </span>
      )}
      {userInfo?.email && (
        <span className={`text-xl font-bold ${isActive('/profile')}`}>
          <Link href="/profile">MyProfile</Link>
        </span>
      )}
    </>
  );
  return (
    <section className="navbar bg-[rgb(60,0,64)]  text-white md:px-[3rem] ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-[#3C0040]   mt-5 z-[1] p-5 shadow  rounded-box w-max"
          >
            {NavItems}
          </ul>
        </div>
          <Link href={'/'}>
        <p className="   flex items-center justify-center md:gap-2">
          {" "}
          <span className="hidden md:block">
            <Image src={logo} alt="logo" width={40} height={30}></Image>
          </span>{" "}
          <span className=" text-lg md:text-2xl font-bold md:mt-1 rancho-regular"><span className="text-red-500">Pet</span> Harmony</span>
        </p>
          </Link>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 ">{NavItems}</ul>
      </div>
      <div className="navbar-end gap-5 ">
        {userInfo?.id ? (
          <button
            onClick={() => {
              logOut(), setLoggoutTrigger(!loggoutTrigger);
            }}
            className="btn bg-[#FF7D5A] text-xl font-bold border-0 rounded-[4rem] text-white "
          >
            Log Out
          </button>
        ) : (
          <Link href={"/login"}>
            <button
              onClick={() => {
                localStorage.setItem("redirectAfterLoginPath", pathName);
              }}
              className="btn text-xl font-bold bg-[#FF7D5A] border-0 rounded-[4rem] text-white "
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Navbar;
