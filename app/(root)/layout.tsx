import Sidebar from "@/app/(root)/components/Sidebar";
import MobileNav from "@/app/(root)/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Nour",
    lastName: "Alsalhi",
    email: "nouralsalhi@gmail.com",
  };

  return (
    <main className="flex max-md:flex-col h-screen w-full font-inter">
      <MobileNav user={loggedIn}/>
      <Sidebar user={loggedIn} />
      <div className="flex xl:flex-1 flex-col">{children}</div>
    </main>
  );
}
