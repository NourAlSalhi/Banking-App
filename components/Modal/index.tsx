"use client";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Modal = ({ onClose }: any) => {
  const isActive = usePathname();
  return (
    <div className="fixed inset-0 z-50 bg-black bg-gray-900 bg-opacity-50 flex justify-start">
      <section className="flex flex-col w-64 bg-white p-5 border-r border-gray-200">
        <button onClick={onClose} className="self-end mb-4">
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
        <nav className="flex flex-col gap-4">
          {sidebarLinks.map((item) => {
            const IconComponent = item.imgURL; // Ensure imgURL is a valid React component
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`flex items-center gap-3 px-3 py-2 rounded ${
                  isActive === item.route
                    ? "bg-[#0179FE] text-white font-semibold"
                    : "text-gray-800 hover:bg-slate-100"
                }`}
                onClick={onClose}
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
