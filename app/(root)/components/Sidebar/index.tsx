"use client";

import type { SidebarProps } from "../types";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/app/(root)/constants";
import { usePathname, useRouter } from "next/navigation";
import { account } from "../../../lib/appwrite";

const Sidebar = ({ user }: SidebarProps) => {
  const isActive = usePathname();
  const router = useRouter();
  
  const handleLogout = async () => {
    await account.deleteSession("current");
    router.push("/sign-in");
  };

  return (
    <section className="sticky text-14 left-0 top-0 flex h-screen xl:w-[260px] flex-col max-xl:items-center border-r border-gray-200 bg-white p-5 max-md:hidden pr-3 ">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-8 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[30px] max-xl:size-10"
          />
          <h1 className="sidebar-logo hidden xl:block">Horizon</h1>
        </Link>
      </nav>
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="h-[180px] flex flex-col justify-between">
          {sidebarLinks.map((item) => {
            const IconComponent = item.imgURL;
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`flex max-xl:w-fit ${
                  isActive !== item.route && `hover:bg-slate-100`
                } items-center max-xl:justify-center rounded px-3 py-2  gap-3 ${
                  isActive === item.route
                    ? "bg-[#0179FE] text-white font-semibold"
                    : "text-black"
                }`}
              >
                <IconComponent
                  className="w-6 h-6"
                  style={{
                    stroke: isActive === item.route ? "white" : "gray",
                  }}
                />
                <span className="max-xl:hidden">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex-center size-12 rounded-full bg-gray-100 p-2 shadow-profile">
            <span className="text-2xl font-bold text-blue-500">N</span>
          </div>
          <div className="max-xl:hidden">
            <h1 className="text-gray-900 font-semibold">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-12 text-gray-600">{user.email}</p>
          </div>
          <button onClick={handleLogout}>
            <Image
              src="/icons/logout.svg"
              width={15}
              height={15}
              alt="logout"
              className="size-[15px] max-xl:hidden cursor-pointer"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
