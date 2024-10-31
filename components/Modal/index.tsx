"use client";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Modal = ({ onClose }: any) => {
  const isActive = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 700); 
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex justify-start items-start 
        ${isVisible ? "opacity-100" : "opacity-0"}
        transition-opacity duration-700 ease-in-out`}
    >
      <section
        className={`transform ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }
          w-64 h-full bg-white p-5 border-r border-gray-200 transition-transform duration-700 ease-in-out`}
      >
        <div className="flex items-center justify-between my-7">
          <Image
            src="/icons/logo.svg"
            width={20}
            height={20}
            alt="Horizon logo"
            className="size-9"
          />
          <button onClick={handleClose} className="self-end mb-4">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {sidebarLinks.map((item) => {
            const IconComponent = item.imgURL;
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`flex items-center gap-3 px-3 py-2 rounded ${
                  isActive === item.route
                    ? "bg-[#0179FE] text-white font-semibold"
                    : "text-gray-800 hover:bg-slate-100"
                }`}
                onClick={handleClose}
              >
                <IconComponent className="w-6 h-6" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </section>
    </div>
  );
};

export default Modal;
