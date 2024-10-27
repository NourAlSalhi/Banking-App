export type HeaderProps = {
  type: "title" | "greeting";
  title: string;
  subtext: string;
  user: string;
};
export type TotalBalanceBoxProps = {
  totalBanks: number;
  accounts:  Account[];
  totalCurrentBalance: number;
};
