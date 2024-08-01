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
    <div className="border--2 border-[green] w-full h-screen lg:grid lg:grid-cols-5 overflow-hidden overflow-y-auto">
      <div className="border--2 border-[red] hidden lg:flex lg:flex-col lg:justify-center lg:items-center col-span-3">
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
          <div className="grid gap-2 max-md:text-center text-start">
            <h4 className={`max-md:text-2xl text-[1.7rem] font-medium text-center text-white-color`}>
              Sign In to your Account
            </h4>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-2">
              <Field type="email" className={`min-w-full px-5`} styles={{ borderRadius: '10rem' }} />
            </div>

            <div className="grid gap-2">
              <Field type="password" className={`min-w--full px-3 rounded-[8rem]`} />
              <div className="flex items-center">
                <Link
                  href="/forgot-password"
                  className={`ml-auto inline-block text-sm text-white-color no-underline`}
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <div className="w-full flex justify-center">
              <Button
                name={`Sign In`}
                pClass={`font-semibold text-[#fff]`}
                className="border-2 border-[#fff] w--full bg-transparent w-[60%] rounded-[10rem]"
                bgcolor={'bg-transparent'}
                onClick={() => router.push('/dashboard')}
              />
            </div>
          </div>

          <div
            className={`mt-4 text-center text-sm absolute bottom-5 left-[50%] translate-x-[-45%] text-white-color`}
          >
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
