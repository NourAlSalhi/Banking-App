import { HeaderBox } from "@/components";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Nour",
    lastName: "Alsalhi",
    email: "nouralsalhi@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
            title="Welcom,"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={269812}
          />
        </header>
      </div>
      <RightSidebar user={loggedIn} />
    </section>
  );
};

export default Home;
