import BankCard from "../components/BankCard";

const MyBanksPage = () => {
  let Account = {
    name: "Bank of America",
    currentBalance: 100,
    id: "1",
    appwriteItemId: "1",
    sharaebleId: "123467",
  };

  return (
    <div className="mt-14 max-xl:m-5 mx-10">
      <div className="mb-10">
        <h1 className="text-2xl mb-2 font-bold max-xl:text-lg">
          My Bank Account
        </h1>
        <p className="text-gray-600 text-sm">
          Effortlessly Manage Your Banking Activities
        </p>
      </div>
      <div className="">
        <h2 className="font-bold mb-3 text-sm">Your cards</h2>
        <div className="flex flex-wrap gap-8">
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
          <BankCard
            userName="Nour Alsalhi"
            account={Account}
            classNames="w-[400px]"
            withGradient={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MyBanksPage;
