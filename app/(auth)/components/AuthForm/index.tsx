"use client";
import Input from "@/app/components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
interface FormData {
  firstName: string;
  email: string;
}
const AuthForm = ({ type }: { type: string }) => {
  const methods = useForm<FormData>({
    defaultValues: {
      firstName: "",
      email: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <section className="auth-form text-sm">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[30px] max-xl:size-10"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
      </nav>
      {type === "sign-in" ? (
        <div>
          <h1 className="text-2xl font-bold mb-2">Log in</h1>
          <p className="text-sm text-[#475467]">
            Welcome back! Please enter your details
          </p>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-2">Sign up</h1>
          <p className="text-sm text-[#475467]">Please enter your details.</p>
        </div>
      )}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {type === "sign-up" && (
            <div>
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name=""
                  label="First Name"
                  placeholder="ex: Nour"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name=""
                  label="Last Name"
                  placeholder="ex: Alsalhi"
                  className="mb-4 w-[190px] max-md:w-full"
                />
              </div>
              <Input
                name=""
                label="Address"
                placeholder="Enter your specific address"
                className="mb-4"
              />
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name=""
                  label="State"
                  placeholder="ex: NY"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name=""
                  label="Postal Code"
                  placeholder="ex: 11101"
                  className="mb-4 w-[190px] max-md:w-full"
                />
              </div>
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name=""
                  label="Date of Birth"
                  placeholder="yyyy-mm-dd"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name=""
                  label="SSN"
                  placeholder="ex: 1234"
                  className="mb-4 w-[190px] max-md:w-full"
                />
              </div>
            </div>
          )}
          <Input
            name=""
            label="Email"
            type="email"
            placeholder="Enter your email"
            className=""
          />
          <Input
            name=""
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="mt-4"
          />
          <button
            type="submit"
            className="bg-blue-500 border rounded text-white mt-6 w-full py-2 text-sm"
          >
            {type == "sign-in" ? "Login" : "Sign up"}
          </button>
        </form>
      </FormProvider>
      <p className="text-center text-[#475467] text-sm mt-4">
        {type == "sign-in"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <Link
          href={type == "sign-in" ? "/sign-up" : "/sign-in"}
          className="text-blue-500 font-semibold"
        >
          {type == "sign-in" ? "Sign up" : "Login"}
        </Link>
      </p>
    </section>
  );
};

export default AuthForm;
