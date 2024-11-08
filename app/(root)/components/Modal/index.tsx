"use client";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/app/(root)/constants";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Modal = ({ onClose, user }: any) => {
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
        <div className="flex flex-col justify-between h-[90%] gap-4">
          <div className="h-[180px] flex flex-col justify-between">
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
          </div>
          <div className="flex mb-4 gap-3 items-center">
            <div className="flex-center size-12 rounded-full bg-gray-100 p-2 shadow-profile">
              <span className="text-2xl font-bold text-blue-500">N</span>
            </div>
            <div>
              <h1 className="text-gray-900 font-semibold">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-12 text-gray-600">{user.email}</p>
            </div>
            <Link href="/sign-in">
              <Image
                src="/icons/logout.svg"
                width={15}
                height={15}
                alt="logout"
                className="size-[15px] cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
