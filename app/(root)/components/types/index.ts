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
  $id?: string;
  email?: string;
  userId?: string;
  dwollaCustomerUrl?: string;
  dwollaCustomerId?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  address1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  dateOfBirth?: string;
  ssn?: string;
  
};
export type RightSidebarProps = {
  user: User;
  transactions?: Transaction[];
  banks?: Bank[];
};
