import CountUpCounter from "../CountUpCounter";
import DoughnutChart from "../DoughnutChart";

import type { TotalBalanceBoxProps } from "../types";
const TotalBalanceBox = ({
  totalBanks,
  accounts = [],
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance font-inter">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="font-semibold">{totalBanks} Bank Accounts</h2>
        <div>
          <p className="text-sm text-[#475467] mb-2">Total Current Balance</p>
          <div className="font-bold text-[#101828] text-2xl">
            <CountUpCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
