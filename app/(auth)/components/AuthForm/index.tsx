"use client";
import Input from "@/app/components/Input";
import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  LoginFormData,
  SignUpFormData,
  loginSchema,
  signUpSchema,
} from "@/app/schemas/validationSchemas";

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const schema = type === "sign-up" ? signUpSchema : loginSchema;

  const methods = useForm<SignUpFormData | LoginFormData>({
    resolver: zodResolver(schema),
    defaultValues:
      type === "sign-up"
        ? {
            firstName: "",
            lastName: "",
            address: "",
            state: "",
            postalCode: "",
            dateOfBirth: "",
            ssn: "",
            email: "",
            password: "",
          }
        : {
            email: "",
            password: "",
          },
  });

  const onSubmit = (data: SignUpFormData | LoginFormData) => {
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

      <div>
        <h1 className="text-2xl font-bold mb-2">
          {type === "sign-in" ? "Log in" : "Sign up"}
        </h1>
        <p className="text-sm text-[#475467]">
          {type === "sign-in"
            ? "Welcome back! Please enter your details"
            : "Please enter your details."}
        </p>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {type === "sign-up" && (
            <>
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name="firstName"
                  label="First Name"
                  placeholder="ex: Nour"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  placeholder="ex: Alsalhi"
                  className="mb-2 w-[190px] max-md:w-full"
                />
              </div>
              <Input
                name="address"
                label="Address"
                placeholder="Enter your specific address"
                className="mb-2"
              />
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name="state"
                  label="State"
                  placeholder="ex: NY"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name="postalCode"
                  label="Postal Code"
                  placeholder="ex: 11101"
                  className="mb-2 w-[190px] max-md:w-full"
                />
              </div>
              <div className="flex max-md:flex-col justify-between">
                <Input
                  name="dateOfBirth"
                  label="Date of Birth"
                  placeholder="yyyy-mm-dd"
                  className="w-[190px] max-md:w-full max-md:mb-4"
                />
                <Input
                  name="ssn"
                  label="SSN"
                  placeholder="ex: 1234"
                  className="mb-2 w-[190px] max-md:w-full"
                />
              </div>
            </>
          )}

          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            className=""
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            className="mt-2"
          />

          <button
            type="submit"
            className="bg-blue-500 border rounded text-white mt-8 w-full py-2 text-sm"
          >
            {type === "sign-in" ? "Login" : "Sign up"}
          </button>
        </form>
      </FormProvider>

      <p className="text-center text-[#475467] text-sm mt-4">
        {type === "sign-in"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="text-blue-500 font-semibold"
        >
          {type === "sign-in" ? "Sign up" : "Login"}
        </Link>
      </p>
    </section>
  );
};

export default AuthForm;
