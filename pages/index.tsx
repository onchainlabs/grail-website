import appIcon from "../public/images/icon.png";
import undrawSecureServerPng from "../public/images/undraw-secure-server.png";
import undrawTeamPng from "../public/images/undraw-team.png";
import undrawPersonalPng from "../public/images/undraw-personal.png";
import undrawWorldPng from "../public/images/undraw-world.png";
import venmoLogoPng from "../public/images/venmo-logo.png";
import lockSvg from "../public/svg/lock.svg";
import identitySvg from "../public/svg/identity.svg";
import complianceSvg from "../public/svg/compliance.svg";
import twitterSvg from "../public/svg/twitter.svg";
import socialIconSvg from "../public/svg/social-icon.svg";
import linkDinIconSvg from "../public/svg/link-din.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [showMobileDropDown, setShowMobileDropDown] = useState(false);

  useEffect(() => {}, [showMobileDropDown]);

  const router = useRouter();

  return (
    <>
      <div className="bg-[#F9F8FF]">
        {/* nav bar start / */}
        <div className="container mx-auto">
          <nav className="pt-3 relative">
            <div className="px-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 bg-[#7659B9] items-center p-1">
                  <Link href="/">
                    <Image
                      className="block h-8 w-auto"
                      src={appIcon}
                      alt="app-icon.png"
                    />
                  </Link>
                </div>
                <div className={"hidden sm:block mx-auto"}>
                  <ul className="flex items-center space-x-4">
                    <li
                      className={
                        router.pathname == "/"
                          ? "text-slate-900"
                          : "text-[#8F8E90]"
                      }
                    >
                      <Link
                        href="/"
                        className="px-3 py-2 hover:text-slate-900 font-medium"
                        aria-current="page"
                      >
                        Home
                      </Link>
                    </li>
                    <li
                      className={
                        router.pathname == "/blog"
                          ? "text-slate-900"
                          : "text-[#8F8E90]"
                      }
                    >
                      <Link
                        href="#"
                        className="px-3 py-2 hover:text-slate-900  font-medium"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="absolute sm:block hidden inset-y-0 right-0 items-center sm:static sm:inset-auto sm:pr-0">
                  <button className="bg-[#8247E5] h-10 hover:bg-violet-600 w-32 text-white font-medium">
                    Contact
                  </button>
                </div>
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button start */}
                  <button
                    type="button"
                    onClick={() => setShowMobileDropDown(!showMobileDropDown)}
                    className="inline-flex items-center justify-center rounded-md"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="block h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#8247E5"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                  {/* Mobile menu button end*/}
                </div>
              </div>
            </div>
            {/* mobile screen  */}
            {/* <div className="sm:hidden"  id="mobile-menu"> */}
            <div
              className={
                (showMobileDropDown ? "block " : "hidden ") +
                "sm:hidden bg-[#F9F8FF] left-0 right-0 mx-6 absolute"
              }
              id="mobile-menu"
            >
              <div className="flex flex-col justify-center gap-y-2 items-center">
                <Link
                  href="/"
                  className="text-[#8F8E90]  hover:text-slate-900 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-[#8F8E90]  hover:text-slate-900  font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* nav bar end  */}
        {/* content - 1 start  */}
        <div className="sm:py-24 py-20 px-5 md:px-12 lg:px-24 container mx-auto">
          <div className="grid sm:grid-cols-2 sm:gap-4 gap-y-6">
            <div className="sm:text-left text-center">
              <p className="text-[#8F8E90] uppercase text-sm tracking-[3px]">
                Reputation & contributor management
              </p>
              <h1 className="text-[#342F42] sm:text-4xl text-3xl font-bold mt-3">
                Your quest for a secure identity ends with Grail.
              </h1>
              <p className="mt-8">
                Grail is a chain-agnostic and reusable one-click KYC solution
                powered by Zero Knowledge Cryptography,that gives the privacy
                experience you seek
              </p>
              <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-8 font-medium">
                Contact Us
              </button>
            </div>
            <div className="flex items-center justify-end md:ml-5">
              <Image
                className="md:w-[400px] object-contain"
                src={undrawSecureServerPng}
                alt="secure-server.png"
              />
            </div>
          </div>
        </div>
        {/* content - 1 end  */}
      </div>
      {/* content - 2 start  */}
      <div className="my-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#8F8E90] text-lg font-medium">Trusted by</h2>
            <div className="grid 2xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 mb-8">
              <div className="w-[300px]">
                <Image
                  src={venmoLogoPng}
                  className="object-contain mx-auto max-w-[100px] mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-[300px]">
                <Image
                  src={venmoLogoPng}
                  className="object-contain mx-auto max-w-[100px] mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-[300px]">
                <Image
                  src={venmoLogoPng}
                  className="object-contain mx-auto max-w-[100px] mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-[300px]">
                <Image
                  src={venmoLogoPng}
                  className="object-contain mx-auto max-w-[100px] mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-[300px]">
                <Image
                  src={venmoLogoPng}
                  className="object-contain mx-auto max-w-[100px] mt-2"
                  alt="trust-by.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content - 2 end  */}
      {/* content - 3 start  */}
      <div className="bg-gradient-to-b from-[#110734] to-[#443870] overflow-hidden relative">
        <div className="sm:py-16 py-12 px-5 md:px-12 lg:px-24 container mx-auto">
          <div className="grid place-content-center md:grid-cols-3 z-10 relative sm:grid-cols-4 gap-4">
            <div className="sm:col-span-4 md:col-auto">
              <div className="md:max-w-sm md:text-left text-center">
                <h1 className="text-white sm:text-3xl text-2xl font-bold">
                  Built with Users and DApps in mind
                </h1>
                <p className="mt-6 text-white">
                  Grail offers a decentralized and privacy-preserving compliance
                  solution which has a scope to be modular, self controllable,
                  and frictionless. Such a solution can leverage a combination
                  of sovereign IDs, off-chain reputation and On-chain data to
                  open up a whole new world of possibilities in the web3 world.{" "}
                </p>
                <div className="mt-6 text-white">
                  <Link
                    className="text-lg w-fit font-bold flex hover:text-violet-600 md:justify-start justify-center items-center"
                    href="/"
                  >
                    Know more{" "}
                    <span className="text-3xl ml-3 mb-0.5 font-medium">
                      &#62;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-auto">
              <div className="grid grid-rows-1 md:max-w-sm h-full rounded bg-white p-5">
                <Image
                  src={undrawTeamPng}
                  className="object-contain sm:mx-0 mx-auto h-40"
                  alt="team.png"
                />
                <h2 className="sm:text-3xl text-2xl font-bold text-[#342F42] mt-6">
                  For DApps
                </h2>
                <p className="text-[#342F42] font-medium mt-3">
                  Dapps need to implement KYC to comply with legal and
                  regulatory requirements and mitigate reputational risks. KYC
                  helps to establish trust and transparency, attract
                  institutional investors, and promote wider adoption of Dapps.
                </p>
                <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-medium">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="sm:col-span-2 md:col-auto">
              <div className="grid grid-rows-1 md:max-w-sm rounded bg-white p-5">
                <Image
                  src={undrawPersonalPng}
                  className="object-contain sm:mx-0 mx-auto h-40"
                  alt="personal.png"
                />
                <h2 className="sm:text-3xl text-2xl font-bold text-[#342F42] mt-6">
                  For Users
                </h2>
                <p className="text-[#342F42] mt-3 font-medium">
                  This is your chance to get priority access to a wider range of
                  Dapps and services, as well as establish trust and
                  credibility. Additionally, KYC can help to prevent fraud and
                  illegal activities, ensuring a safer and more secure
                  environment for all users
                </p>
                <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* rounded circle border start*/}
        <div className="border-[9px] absolute 2xl:right-[-312px] 2xl:top-[200px] xl:right-[-260px] xl:top-[212px] lg:right-[-360px] lg:top-[240px] md:right-[-280px] md:top-[280px] sm:right-[-400px] sm:top-[280px] 2xl:w-[1320px] 2xl:h-[1320px] xl:w-[1080px] xl:h-[1080px] lg:w-[992px] lg:h-[992px] md:w-[800px] md:h-[800px] sm:w-[1024px] sm:h-[1024px] right-[-636px] top-[320px] w-[1300px] h-[1300px] rounded-full border-[#A673EF]">
          {" "}
        </div>
        {/* rounded circle border end*/}
      </div>
      {/* content - 3 end  */}
      {/* content - 4 start  */}
      <div className="bg-[#F9F8FF] relative overflow-hidden ">
        <div className="container sm:py-24 py-20 px-5 md:px-12 lg:px-24 mx-auto">
          <h1 className="text-[#342F42] z-10 relative sm:text-4xl text-3xl lg:text-left text-center font-bold">
            What makes Grail private, secure and best
          </h1>
          <div className="grid lg:grid-cols-4 z-10 relative sm:grid-cols-2 sm:mt-24 mt-20 sm:gap-6 gap-y-7">
            <div className="sm:text-left flex flex-col items-center md:items-start text-center">
              <Image className="sm:ml-2 mx-auto" src={lockSvg} alt="lock.svg" />
              <span className="mt-4 h-full">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl font-bold">
                  ZK-Powered KYC
                </h3>
                <p className="text-[#342F42] mt-3 font-medium">
                  Dapps can securely verify customer identities without
                  collecting personal information using our ZK-powered KYC
                  solution, reducing fraud and data breach risks.
                </p>
              </span>
              <Link
                className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-bold mt-3 flex sm:justify-start justify-center items-center"
                href="/"
              >
                Know more{" "}
                <span className="text-3xl ml-3 mb-0.5 font-medium">&#62;</span>
              </Link>
            </div>
            <div className="sm:text-left flex flex-col items-center md:items-start text-center">
              <Image className="sm:ml-2 mx-auto" src={lockSvg} alt="lock.svg" />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl font-bold">
                  Sybil Resistance
                </h3>
                <p className="text-[#342F42] mt-3 font-medium">
                  Our Sybil resistant solution will improve user experience of
                  Dapps by making it more democratic, fair and profitable for
                  real users.
                </p>
              </span>
              <Link
                className="text-lg  w-fit text-[#8247E5] hover:text-violet-700 font-bold mt-3 flex sm:justify-start justify-center items-center"
                href="/"
              >
                Know more{" "}
                <span className="text-3xl ml-3 mb-0.5 font-medium">&#62;</span>
              </Link>
            </div>
            <div className="sm:text-left flex flex-col justify-between items-center md:items-start text-center">
              <Image
                className="sm:ml-2 mx-auto"
                src={identitySvg}
                alt="lock.svg"
              />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl font-bold">
                  Identity Management
                </h3>
                <p className="text-[#342F42] mt-3 font-medium">
                  Our identity management solution helps Users manage their
                  personal identities securely and efficiently. Dapss can reduce
                  the risk of fraud and improve the user-onboarding experience.
                  Compliance
                </p>
              </span>
              <Link
                className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-bold mt-3 flex sm:justify-start justify-center items-center"
                href="/"
              >
                Know more{" "}
                <span className="text-3xl ml-3 mb-0.5 font-medium">&#62;</span>
              </Link>
            </div>
            <div className="sm:text-left flex flex-col justify-between items-center md:items-start text-center">
              <Image
                className="sm:ml-2 mx-auto"
                src={complianceSvg}
                alt="lock.svg"
              />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl font-bold">
                  Compliance
                </h3>
                <p className="text-[#342F42] mt-3 font-medium">
                  Our compliance solution assists Dapps in meeting KYC and AML
                  regulations and requirements while safeguarding user’s privacy
                </p>
              </span>
              <Link
                className="text-lg md:absolute md:bottom-0 w-fit text-[#8247E5] hover:text-violet-700 font-bold mt-3 flex sm:justify-start justify-center items-center"
                href="/"
              >
                Know more{" "}
                <span className="text-3xl ml-3 mb-0.5 font-medium">&#62;</span>
              </Link>
            </div>
          </div>
        </div>
        {/* rounded circle border start*/}
        <div className="border-[9px] absolute 2xl:left-[-260px] 2xl:top-[-140px] xl:left-[-260px] xl:top-[-140px] lg:left-[-260px] lg:top-[-140px] md:left-[-240px] md:top-[-140px] sm:left-[-240px] sm:top-[-140px] 2xl:w-[336px] 2xl:h-[336px] xl:w-[336px] xl:h-[336px] lg:w-[336px] lg:h-[336px] md:w-[336px] md:h-[336px] sm:w-[336px] sm:h-[336px] left-[-252px] top-[-140px] w-[300px] h-[300px] rounded-full border-[#A673EF]">
          {" "}
        </div>
        {/* rounded circle border end*/}
      </div>
      {/* content - 4 end  */}
      {/* content - 5 start */}
      <div className="bg-white">
        <div className="container mx-auto sm:py-16 py-12 px-5 md:px-12 lg:px-24">
          <div className="grid sm:grid-cols-2 sm:gap-4 gap-y-6">
            <div className="sm:text-left text-center">
              <h1 className="text-[#342F42] sm:text-4xl text-3xl font-bold mt-3">
                Your quest for a secure identity ends with Grail.
              </h1>
              <Image
                src={undrawWorldPng}
                className="object-contain mt-6"
                alt=""
              />
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-4 gap-y-12">
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center  sm:text-left text-center  sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  Defi
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Grail helps Defi applications to reduce fraud, and stay
                  compliant with regulations while opening DeFi to new user
                  groups and mass adoption..
                </p>
              </div>
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  Gaming
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Spend less time on bot-proofing and improve the game mechanics
                  by making it fair for the players in your ecosystem. Reward
                  your real player with Grail.
                </p>
              </div>
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  DAO
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Enable 1 person 1 vote with strong sybil resistance which
                  unlocks more native democratic uses cases in a decentralized
                  ecosystem.
                </p>
              </div>
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  NFT Marketplaces
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Verify creators to avoid rugpulls/scams and erase the
                  possibility of fraud by vetting the buyers properly with
                  Grail.
                </p>
              </div>
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  Grant DAO/Pools
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Avoid regulatory scrutiny and limit payouts to trusted members
                  with Grail
                </p>
              </div>
              <div className="bg-[#F9F8FF] sm:bg-transparent flex flex-col sm:p-0 p-16  sm:justify-start justify-center sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-semibold">
                  Airdrop
                </h1>
                <p className="text-[#342F42] mt-3 font-medium">
                  Identify and reward real supporters in your airdrop campaign.
                  Avoid Sybil attacks with grail and create a fair ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content - 5 end  */}
      {/* content - 6 start  */}
      <div className="bg-gradient-to-b from-[#ffffffb4]  via-[#DAD7FA] to-[#DAD7FA]">
        <div className="sm:py-16 py-12 px-5 sm:px-0 container mx-auto">
          <div className="text-center">
            <h1 className="text-[#342F42] sm:text-4xl text-3xl font-bold mt-3">
              Ready to experience the benefits of our ZK-powered KYC solution?
            </h1>
            <p className="text-[#342F42] mt-4">
              Contact us today to learn more and schedule a demo.
            </p>
            <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-14 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* content - 6 end  */}
      {/* content - 7 start  */}

      <div className="bg-gradient-to-b from-[#110734] relative overflow-hidden to-[#443870]">
        <div className="sm:py-24 py-16 px-5 md:px-12 lg:px-24 container mx-auto">
          <div className="grid z-10  relative sm:grid-cols-2 px-10 sm:px-0 sm:gap-4 gap-y-12">
            <div className="sm:order-none order-last">
              <div className="flex items-center">
                <Link href="/">
                  <Image
                    className="object-contain"
                    src={appIcon}
                    alt="app-icon.png"
                  />
                </Link>
                <h1 className="text-white sm:text-3xl text-2xl font-medium ml-4">
                  Grail
                </h1>
              </div>
              <p className="text-white mt-4">
                Your quest for a secure identity end with Grail
              </p>
            </div>
            <div>
              <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-x-20  gap-y-6">
                <div className="text-white flex flex-col leading-8">
                  <Link className="hover:text-violet-600" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                </div>
                <div className="text-white flex flex-col leading-8">
                  <Link className="hover:text-violet-600" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                </div>
                <div className="text-white flex flex-col  leading-8">
                  <Link className="hover:text-violet-600" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600" href="/">
                    Careers
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 sm:justify-start justify-center mt-8">
            <Link className="m-0 sm:ml-auto" href="/">
              <Image
                className="object-contain"
                src={socialIconSvg}
                alt="social.png"
              />
            </Link>
            <Link href="/">
              <Image
                className="object-contain"
                src={twitterSvg}
                alt="twitter.png"
              />
            </Link>
            <Link
              className="m-0 2xl:mr-48 xl:mr-36 lg:mr-24 md:mr-16 sm:mr-11"
              href="/"
            >
              <Image
                className="object-contain"
                src={linkDinIconSvg}
                alt="link-din.png"
              />
            </Link>
          </div>
        </div>
        {/* rounded circle border start*/}
        <div className="border-[9px] absolute 2xl:left-[-260px] 2xl:bottom-[-140px] xl:left-[-260px] xl:bottom-[-140px] lg:left-[-260px] lg:bottom-[-140px] md:left-[-240px] md:bottom-[-140px] sm:left-[-240px] sm:bottom-[-140px] 2xl:w-[362px] 2xl:h-[362px] xl:w-[336px] xl:h-[336px] lg:w-[336px] lg:h-[336px] md:w-[336px] md:h-[336px] sm:w-[336px] sm:h-[336px] left-[-252px] bottom-[-140px] w-[300px] h-[300px] rounded-full border-[#A673EF]">
          {" "}
        </div>
        {/* rounded circle border end*/}
      </div>
      {/* content - 7 end  */}
    </>
  );
}
