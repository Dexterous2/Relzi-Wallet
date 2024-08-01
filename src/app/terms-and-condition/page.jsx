'use client'
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
        <title>Terms and Conditions - Relzi Wallet</title>
        <meta name="description" content="Terms and Conditions of Relzi Wallet" />
      </Head>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Terms and Conditions</h1>
        <p className="italic mb-4">Last updated: May 30, 2024</p>
        <p className="mb-4">
          Please read these terms and conditions carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Interpretation</h3>
        <p className="mb-4">
          The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Definitions</h3>
        <p className="mb-4">For the purposes of these Terms and Conditions:</p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device, named RelziWallet.
          </li>
          <li>
            <strong>Application Store</strong> means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.
          </li>
          <li>
            <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
          </li>
          <li>
            <strong>Country</strong> refers to: Texas, United States.
          </li>
          <li>
            <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Odiboh Industries LLC, 1750 FM 423, Dallas, Texas, 75033.
          </li>
          <li>
            <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
          </li>
          <li>
            <strong>Service</strong> refers to the Application.
          </li>
          <li>
            <strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.
          </li>
          <li>
            <strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
          </li>
          <li>
            <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Acknowledgment</h2>
        <p className="mb-4">
          These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
        </p>
        <p className="mb-4">
          Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
        </p>
        <p className="mb-4">
          By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
        </p>
        <p className="mb-4">
          You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
        </p>
        <p className="mb-4">
          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Links to Other Websites</h2>
        <p className="mb-4">
          Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
        </p>
        <p className="mb-4">
          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
        </p>
        <p className="mb-4">
          We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
        <p className="mb-4">
          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
        </p>
        <p className="mb-4">
          Upon termination, Your right to use the Service will cease immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
        </p>
        <p className="mb-4">
          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
        </p>
        <p className="mb-4">
          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
        <p className="mb-4">
          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
        </p>
        <p className="mb-4">
          Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
        </p>
        <p className="mb-4">
          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
        <p className="mb-4">
          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Disputes Resolution</h2>
        <p className="mb-4">
          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">For European Union (EU) Users</h2>
        <p className="mb-4">
          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">United States Legal Compliance</h2>
        <p className="mb-4">
          You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Severability and Waiver</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Severability</h3>
        <p className="mb-4">
          If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Waiver</h3>
        <p className="mb-4">
          Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Translation Interpretation</h2>
        <p className="mb-4">
          These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms and Conditions</h2>
        <p className="mb-4">
          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
        </p>
        <p className="mb-4">
          By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms and Conditions, You can contact us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>By email: <a href="mailto:info@relziwallet.com" className="text-blue-500 hover:underline">info@relziwallet.com</a></li>
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
}

export default Page;