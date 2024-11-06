"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "../Modal";

const MobileNav = ({ user }: { user: any }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className=" block md:hidden">
      <nav className="flex items-center w-full justify-between p-4 bg-white shadow border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="w-8 h-8"
          />
          <h1 className="text-lg hidden md:block">Horizon</h1>
        </Link>
        <button onClick={toggleModal} className="p-2 focus:outline-none">
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {isModalOpen && <Modal onClose={toggleModal} user={user} />}
    </div>
  );
};

export default MobileNav;
