import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={`/transaction-history/?id=${account?.appwriteItemId}`}
        className="bank-card"
      >
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 px-5 pb-4 pt-5">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account?.name}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account?.currentBalance ?? 0)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">06/24</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              1234 1234 1234 <span className="text-16">{account?.mask}</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {/* {showBalance && <Copy title={account?.sharaebleId} />} */}
    </div>
  );
};

export default BankCard;
