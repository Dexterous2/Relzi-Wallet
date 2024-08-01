"use client";

import Image from "next/image";
import Link from "next/link";

// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Field from "@/components/inputFIeld/Field";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";

export default function page() {

  const router = useRouter();

  return (
    <div className="border--2 border-[green] w-full h-screen lg:grid lg:grid-cols-5">
      <div className="border--2 border-[red] hidden bg-muted lg:flex lg:flex-col lg:justify-center lg:items-center col-span-3">
        <div>
        <img
            src="/image/main/logo.png"
            alt="logo.png"
            className="w-[17rem] mb-16"
          />

          <h4
            className={`md:text-5xl xl:text-7xl font-semibold leading-10 text-[#000]`}
          >
            A <span className={`text-primary-color`}> Wallet </span> <br />
            For Everything.
          </h4>
        </div>
      </div>

      <div
        className="flex items-center justify-center py-12 col-span-2 max-lg:h-full relative max-md:p-3"
        style={{ background: 'url("/image/main/bg.png")' }}
      >
        <img
          src="/image/main/logo.png"
          alt="logo.png"
          className="w-[10rem] mb-16 absolute top-10 left-[50%] translate-x-[-45%] hidden max-lg:block"
        />

        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h4 className={`max-md:text-2xl text-3xl font-medium text-white-color`}>
              Trouble logging in?
            </h4>
            <p className={`text-balance text--muted-foreground text-white-color tracking-wide`}>
              Enter your email or username and we'll send you a code to get back
              into your account.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-2">
              <Field type="email" className={`min-w-full rounded-[10rem] px-5`} />
            </div>

            <div className="w-full flex justify-center">
              <Button
                name={`Continue`}
                pClass={`font-semibold text-[#fff]`}
                className="border-2 border-[#fff] bg-transparent w-[60%] rounded-[10rem]"
                bgcolor={"bg-transparent"}
                onClick={()=>router.push('/verify-otp')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 