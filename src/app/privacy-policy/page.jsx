"use client";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/button/Button";

const Page = () => {
  const [padding, setPadding] = useState({
    padding_xl: "xl:px-[16rem]",
    padding_lg: "lg:px-[12rem]",
    padding_md: "md:px-[4rem]",
    padding_sm: "sm:px-[4rem]",
    padding_xs: "max-sm:px-[0.5rem]",
  });

  return (
    <>
      <div
        className={`border--2 border-[purple] w-full h-[85%] max-lg:h-fit pb-5  ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
        style={{
          background:
            "linear-gradient(to top, #00a3b1, #68b2cc, #a2c2dc, #cdd4e4, #eaeaea)",
        }}
      >
        <nav
          className={`border--2 border-[green] h-[5rem] max-sm:h-fit max-sm:gap-5 max-sm:py-2 flex max-sm:flex-col items-center justify-between`}
        >
          <img
            src="/image/main/logo.png"
            alt="logo.png"
            className="w-[13rem] min-h-[2.5rem] max-sm:min-h-[1rem]"
          />

          <div className="flex items-center justify-center gap-5">
            {/* <CartSheet ordersData={ordersData} setOrdersData={setOrdersData} /> */}

            <Button
              name={"Sign In"}
              bgcolor={"bg-primary-color"}
              pClass={"text-white"}
              mainClass={
                "text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"
              }
              onClick={() => router.push("/login")}
              // className={'rounded-full'}
            />
            <Button
              name={"Sign Up"}
              bgcolor={"bg-primary-color"}
              pClass={"text-white"}
              mainClass={
                "text-white px-4 py-2 bg-primary-color min-w-[6rem] max-sm:min-w-[2.8rem] rounded-full"
              }
              onClick={() => router.push("/signup")}
            />
          </div>
        </nav>
      </div>
      <Head>
        <title>Privacy Policy - Relzi Wallet</title>
        <meta name="description" content="Privacy Policy of Relzi Wallet" />
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        <p className="italic mb-4">Last updated: May 30, 2024</p>
        <p className="mb-4">
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p className="mb-4">
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy. This Privacy Policy has been
          created with the help of the Privacy Policy Generator.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Interpretation and Definitions
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
        <p className="mb-4">For the purposes of this Privacy Policy:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Account</strong> means a unique account created for You to
            access our Service or parts of our Service.
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is
            controlled by or is under common control with a party, where
            "control" means ownership of 50% or more of the shares, equity
            interest or other securities entitled to vote for election of
            directors or other managing authority.
          </li>
          <li>
            <strong>Application</strong> refers to Relzi Wallet, the software
            program provided by the Company.
          </li>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We",
            "Us" or "Our" in this Agreement) refers to Odiboh Industries LLC,
            1750 FM 423, Dallas, Texas, 75033.
          </li>
          <li>
            <strong>Country</strong> refers to: Texas, United States
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service
            such as a computer, a cellphone or a digital tablet.
          </li>
          <li>
            <strong>Personal Data</strong> is any information that relates to an
            identified or identifiable individual.
          </li>
          <li>
            <strong>Service</strong> refers to the Application.
          </li>
          <li>
            <strong>Service Provider</strong> means any natural or legal person
            who processes the data on behalf of the Company. It refers to
            third-party companies or individuals employed by the Company to
            facilitate the Service, to provide the Service on behalf of the
            Company, to perform services related to the Service or to assist the
            Company in analyzing how the Service is used.
          </li>
          <li>
            <strong>Usage Data</strong> refers to data collected automatically,
            either generated by the use of the Service or from the Service
            infrastructure itself (for example, the duration of a page visit).
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the
            Service, or the company, or other legal entity on behalf of which
            such individual is accessing or using the Service, as applicable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Collecting and Using Your Personal Data
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">
          Types of Data Collected
        </h3>
        <h4 className="text-lg font-semibold mt-4 mb-2">Personal Data</h4>
        <p className="mb-4">
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
        </ul>
        <h4 className="text-lg font-semibold mt-4 mb-2">Usage Data</h4>
        <p className="mb-4">
          Usage Data is collected automatically when using the Service.
        </p>
        <p className="mb-4">
          Usage Data may include information such as Your Device's Internet
          Protocol address (e.g. IP address), browser type, browser version, the
          pages of our Service that You visit, the time and date of Your visit,
          the time spent on those pages, unique device identifiers and other
          diagnostic data.
        </p>
        <p className="mb-4">
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </p>
        <p className="mb-4">
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </p>
        <h4 className="text-lg font-semibold mt-4 mb-2">
          Information Collected while Using the Application
        </h4>
        <p className="mb-4">
          While using Our Application, in order to provide features of Our
          Application, We may collect, with Your prior permission:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Information regarding your location</li>
          <li>Information from your Device's phone book (contacts list)</li>
          <li>
            Pictures and other information from your Device's camera and photo
            library
          </li>
        </ul>
        <p className="mb-4">
          We use this information to provide features of Our Service, to improve
          and customize Our Service. The information may be uploaded to the
          Company's servers and/or a Service Provider's server or it may be
          simply stored on Your device.
        </p>
        <p className="mb-4">
          You can enable or disable access to this information at any time,
          through Your Device settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Use of Your Personal Data
        </h2>
        <p className="mb-4">
          The Company may use Personal Data for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>To provide and maintain our Service</strong>, including to
            monitor the usage of our Service.
          </li>
          <li>
            <strong>To manage Your Account:</strong> to manage Your registration
            as a user of the Service. The Personal Data You provide can give You
            access to different functionalities of the Service that are
            available to You as a registered user.
          </li>
          <li>
            <strong>For the performance of a contract:</strong> the development,
            compliance and undertaking of the purchase contract for the
            products, items or services You have purchased or of any other
            contract with Us through the Service.
          </li>
          <li>
            <strong>To contact You:</strong> To contact You by email, telephone
            calls, SMS, or other equivalent forms of electronic communication,
            such as a mobile application's push notifications regarding updates
            or informative communications related to the functionalities,
            products or contracted services, including the security updates,
            when necessary or reasonable for their implementation.
          </li>
          <li>
            <strong>To provide You</strong> with news, special offers and
            general information about other goods, services and events which we
            offer that are similar to those that you have already purchased or
            enquired about unless You have opted not to receive such
            information.
          </li>
          <li>
            <strong>To manage Your requests:</strong> To attend and manage Your
            requests to Us.
          </li>
          <li>
            <strong>For business transfers:</strong> We may use Your information
            to evaluate or conduct a merger, divestiture, restructuring,
          </li>
        </ul>
      </div>
      <footer
        className={`border--2 border-[red] bg-secondary-color w-full h-fit p-5 ${padding.padding_xs} ${padding.padding_sm} ${padding.padding_md} ${padding.padding_lg} ${padding.padding_xl}`}
      >
        <div className="border--2 border-[green] w-full flex max-lg:flex-col justify-between items-center max-sm:flex-col max-sm:items-center pt-4">
          <div className="w-[50%] max-lg:w-full flex flex-col max-lg:justify-center max-lg:items-center ">
            <img
              src="/image/main/logo.png"
              alt="logo.png"
              className="border--2 border-[green] w-[13rem] min-h-[3rem] object-cover"
            />
            <p className="text-[#000] text-base pt-5">
              Relzi, the all-in-one mobile wallet app that redefines the way you
              manage your money, plan your trips, and make payments. With Relzi,
              your smartphone becomes your passport to a world of convenience
              and possibilities.
            </p>
            <div className="flex max-lg:justify-center justify-between items-center flex-wrap pt-5 gap-5">
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Email: support@relziapp.com{" "}
              </h5>
              <h5 className="min-w-fit text-primary-color font-bold text-base pt-3 max-lg:text-center">
                {" "}
                Phone: +1 800 555-Relzi{" "}
              </h5>
            </div>
          </div>

          <div className="border--2 border-[blue] h-full w-[50%] max-lg:w-full flex max-lg:flex-col max-lg:justify-between justify-around">
            <div className="flex flex-col justify-center items-center gap-5 mt-5">
              <img
                src="/image/main/appstore.png"
                alt="appstore.png"
                className="w-[10rem]"
              />
              <img
                src="/image/main/google-play.png"
                alt="google.png"
                className="w-[10rem]"
              />
            </div>

            <ul className="text-primary-color font-bold flex max-lg:items-center max-lg:mt-5 items-end justify-center flex-col gap-5">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border--2 border-[olive] w-full h-fit flex max-sm:flex-col justify-between items-center pt-14 gap-4">
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            <Link href={"/privacy-policy"}> Privacy Policy </Link> | 
            <Link href={'/terms-and-condition'}> Terms and Condition </Link> | Security{" "}
          </h5>
          <h5 className="text-primary-color font-semibold text-base max-sm:text-center">
            {" "}
            © 2023 Relzi. All rights reserved.{" "}
          </h5>
        </div>
      </footer>
    </>
  );
};

export default Page;
