import { HeaderBox } from "@/components";

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
          title="Welcom"
        />
      </header>
    </section>
  );
};

export default Home;
