export type HeaderProps = {
  type: "title" | "greeting";
  title: string;
  subtext: string;
  user: string;
};
export type TotalBalanceBoxProps = {
  totalBanks: number;
  accounts: Account[];
  totalCurrentBalance: number;
};
export type SidebarProps = {
  user: User;
};
export type User = {
  firstName: string;
  lastName: string;
  email: string;
};
export type RightSidebarProps = {
  user: User;
  transactions?: Transaction[];
  banks?: Bank[];
};
