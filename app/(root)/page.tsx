import { HeaderBox } from "@/components";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = { firstName: "Nour" };
  return (
    <section className="home">
      <div className="home-content"></div>
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
    </section>
  );
};

export default Home;
