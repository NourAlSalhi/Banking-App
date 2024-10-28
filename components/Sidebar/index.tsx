"use client";

import type { SidebarProps } from "../types";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SidebarProps) => {
  const isActive = usePathname();
  return (
    <section className="sticky text-14 left-0 top-0 flex h-screen w-fit flex-col border-r border-gray-200 bg-white pt-8 max-md:hidden sm:p-4 xl:p-6 md:w-[280px]">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
      </nav>
      <div className="h-[180px] flex flex-col justify-between">
        {sidebarLinks.map((item) => {
          const IconComponent = item.imgURL;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`flex ${
                isActive !== item.route && `hover:bg-slate-100`
              } items-center rounded px-3 py-2  gap-3 ${
                isActive === item.route
                  ? "bg-[#0179FE] text-white font-semibold"
                  : "text-gray-800"
              }`}
            >
              <IconComponent
                className="w-6 h-6"
                style={{
                  stroke: isActive === item.route ? "white" : "none",
                }}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
