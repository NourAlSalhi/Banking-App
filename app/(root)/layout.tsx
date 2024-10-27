import Image from "next/image";
import Sidebar from "@/components/Sidebar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Nour", lastName: "Alsalhi"};
  return (
    <main className="flex p-4 h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col">
        {children}
      </div>
      {/* <Sidebar user={loggedIn} /> */}
    </main>
  );
}
