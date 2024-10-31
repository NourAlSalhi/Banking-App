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
    <section className="auth-form">
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
          <p className="text-sm text-[#475467]">
          Please enter your details.
          </p>
        </div>
      )}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            className="mt-5"
          />
        </form>
      </FormProvider>
    </section>
  );
};

export default AuthForm;
