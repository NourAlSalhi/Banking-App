import HomeIcon from '/public/icons/home.svg';
import DollarCircleIcon from '/public/icons/dollar-circle.svg';
import TransactionIcon from '/public/icons/transaction.svg';
import MoneySendIcon from '/public/icons/money-send.svg';

export const sidebarLinks = [
    {
      imgURL: HomeIcon,
      route: "/",
      label: "Home",
    },
    {
      imgURL: DollarCircleIcon,
      route: "/my-banks",
      label: "My Banks",
    },
    {
      imgURL: TransactionIcon,
      route: "/transaction-history",
      label: "Transaction History",
    },
    {
      imgURL: MoneySendIcon,
      route: "/payment-transfer",
      label: "Transfer Funds",
    },
  ];