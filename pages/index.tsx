import appIcon from "../public/images/icon.png";
import undrawSecureServerPng from "../public/svg/undraw-secure-server.svg";
import undrawTeamSvg from "../public/svg/undraw-team.svg";
import undrawPersonalSvg from "../public/svg/undraw-personal.svg";
import undrawWorldPng from "../public/svg/undraw-world.svg";
import venmoLogo from "../public/images/logo/venmo-logo.png";
import sofiLogo from "../public/images/logo/sofi-logo.png";
import acornsLogo from "../public/images/logo/acorns-logo.png";
import betterMentLogo from "../public/images/logo/betterment-logo.png";
import chimeLogo from "../public/images/logo/chime-logo.png";
import sybilIcon from "../public/svg/sybil.svg";
import lockSvg from "../public/svg/lock.svg";
import identitySvg from "../public/svg/identity.svg";
import complianceSvg from "../public/svg/compliance.svg";
import twitterSvg from "../public/svg/twitter.svg";
import socialIconSvg from "../public/svg/social-icon.svg";
import linkDinIconSvg from "../public/svg/link-din.svg";
import Image from "next/image";
import Link from "next/link";
import RightArrow from "../public/svg/right-arrow.svg";
import RightArrowPurple from "../public/svg/purple-right-arrow.svg";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <div className="bg-[#F9F8FF]">
        <NavBar />
        {/* content - 1 start  */}
        <div className="sm:py-24 py-20 px-5 sm:px-0 md:px-8 lg:px-[99px] h-[511px] container mx-auto">
          <div className="grid sm:grid-cols-2 md:gap-3 lg:gap-24 2xl:gap-80 gap-y-6">
            <div className="sm:text-left text-center">
              {/* <p className="text-[#8F8E90] font-poppins-500 uppercase sm:-mr-7 text-[10px] md:text-xs tracking-[3px]">
                Reputation & contributor management
              </p> */}
              <h1 className="text-[#342F42] font-manrope-800 tracking-[-0.025em] leading-[38px] md:leading-[44px] lg:leading-[57px] md:text-[32px] lg:text-[42px] text-[28px] font-bold mt-2">
                Your quest for a secure identity ends with Grail.
              </h1>
              <p className="mt-6 lg:mt-7 font-poppins-400 text-xs md:text-sm lg:text-base">
                Grail is a chain-agnostic and reusable one-click KYC solution
                powered by Zero Knowledge Cryptography,that gives the privacy
                experience you seek
              </p>
              <Link target="_blank" href="https://cal.com/prasanna/grail">
                <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-poppins-600 font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center sm:justify-end md:ml-5">
              <Image
                className="w-[240px] md:w-[253px] lg:w-[340px] object-contain"
                src={undrawSecureServerPng}
                alt="secure-server.png"
              />
            </div>
          </div>
        </div>
        {/* content - 1 end  */}
      </div>
      {/* content - 2 start  */}
      {/* <div className="my-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#8F8E90] text-lg font-semibold font-poppins-600">
              Trusted by
            </h2>
            <div className="grid sm:grid-cols-3 content-around md:grid-cols-3 lg:grid-cols-5 grid-cols-3 w-11/12 md:w-fit gap-4 mt-4 mb-8">
              <div className="w-fit md:w-[300px]">
                <Image
                  src={venmoLogo}
                  className="object-contain mx-auto mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-fit md:w-[300px]">
                <Image
                  src={acornsLogo}
                  className="object-contain mx-auto mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-fit md:w-[300px]">
                <Image
                  src={betterMentLogo}
                  className="object-contain mx-auto mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-fit md:w-[300px]">
                <Image
                  src={chimeLogo}
                  className="object-contain mx-auto mt-2"
                  alt="trust-by.png"
                />
              </div>
              <div className="w-fit md:w-[300px]">
                <Image
                  src={sofiLogo}
                  className="mx-auto mt-2"
                  alt="trust-by.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* content - 2 end  */}
      {/* content - 3 start  */}
      <div className="bg-gradient-to-b from-[#110734] to-[#443870] overflow-hidden relative">
        <div className="sm:py-16 py-12 px-5 sm:px-0 md:px-8 lg:px-24 container mx-auto">
          <div className="grid lg:flex lg:gap-20 2xl:gap-40 lg:flex-row z-10 relative">
            <div className="sm:col-span-4 md:col-auto">
              <div className="lg:max-w-md lg:text-left text-center">
                <h1 className="text-white sm:text-3xl text-2xl font-manrope-800 font-bold">
                  Building Trust between Dapps and Users
                </h1>
                <p className="mt-6 font-poppins-400 font-normal text-base leading-6 tracking-[-0.04em] text-white">
                  Grail enables Dapps and users to create trust rails using
                  privacy preserving technology such as Zero Knowledge
                  Cryptography.
                </p>
                {/* <div className="flex lg:justify-start justify-center mt-6 text-white">
                  <Link
                    className="text-lg w-fit font-poppins-600 font-semibold flex hover:text-violet-600 md:justify-start justify-center items-center"
                    href="/"
                  >
                    Know more
                    <span className="ml-3 mt-0.5">
                      <Image
                        src={RightArrow}
                        className="object-contain sm:mx-0 mx-auto"
                        alt="team.png"
                      />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="grid mt-11 lg:mt-0 grid-rows-1 sm:grid-cols-4 md:grid-cols-2 gap-8">
              <div className="sm:col-span-2 md:col-auto">
                <div className="flex flex-col justify-between md:max-w-sm h-full rounded bg-white p-5">
                  <Image
                    src={undrawTeamSvg}
                    className="object-contain sm:mx-0 mx-auto h-24"
                    alt="team.png"
                  />
                  <span>
                    <h2 className="md:text-2xl text-[22px] font-bold font-manrope-800 leading-[33px] tracking-[-0.025em] text-[#342F42] mt-6 md:mt-0 lg:mt-6">
                      For DApps
                    </h2>
                    <p className="text-[#342F42] font-poppins-400 font-normal text-sm leading-[21px] tracking-[-0.04em] mt-3">
                      Using Know Your Customer solutions, Dapps can expand their
                      knowhow about their community and users, and set relevant
                      guardrails for participation. This helps Dapps secure
                      their network and create a more rewarding and trusted
                      system for their customers and also comply with regulatory
                      requirements
                    </p>
                  </span>
                  <Link target="_blank" href="https://cal.com/prasanna/grail">
                    <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-poppins-600 font-semibold">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
              <div className="sm:col-span-2 md:col-auto">
                <div className="flex flex-col justify-between md:max-w-sm rounded bg-white p-5">
                  <Image
                    src={undrawPersonalSvg}
                    className="object-contain sm:mx-0 mx-auto h-24"
                    alt="personal.png"
                  />
                  <span>
                    <h2 className="md:text-2xl text-[22px] font-bold font-manrope-800 leading-[33px] tracking-[-0.025em] text-[#342F42] mt-6">
                      For Users
                    </h2>
                    <p className="text-[#342F42] font-poppins-400 font-normal text-sm leading-[21px] tracking-[-0.04em] mt-3">
                      Grail Identity platform and private wallets will allow
                      users the most private and secure way to control their
                      interactions with Dapps. Users can control what
                      information is shared with which Dapp in the most private
                      way possible and feel completely secure about the
                      interactions
                    </p>
                  </span>
                  <Link target="_blank" href="https://cal.com/prasanna/grail">
                    <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-poppins-600 font-semibold">
                      Contact Us
                    </button>
                  </Link>
                </div>
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
        <div className="container sm:py-24 py-20 px-5 sm:px-0 md:px-8 lg:px-24 mx-auto">
          <h1 className="text-[#342F42] z-10 relative sm:text-4xl text-2xl lg:text-left text-center leading-[49px] tracking-[-0.025em] font-manrope-800 font-bold">
            Built with Privacy and Security at its core
          </h1>
          <div className="grid lg:grid-cols-4 z-10 relative sm:grid-cols-2 sm:mt-24 mt-20 sm:gap-8 gap-y-14">
            <div className="sm:text-left flex flex-col items-center sm:items-start text-center">
              <Image className="sm:ml-0 mx-auto" src={lockSvg} alt="lock.svg" />
              <span className="mt-4 h-full">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl leading-6 font-manrope-700 font-bold">
                  ZK-Powered KYC
                </h3>
                <p className="text-[#342F42] mt-3 lg:pr-4 tracking-[-0.04em] leading-[21px] font-normal font-poppins-400">
                  Dapps can securely verify customer identities without
                  collecting personal information using Grail’s ZK-powered KYC
                  solution, reducing fraud and data breach risks.
                </p>
              </span>
            </div>
            <div className="sm:text-left flex flex-col items-center sm:items-start text-center">
              <Image
                className="sm:ml-0 mx-auto"
                src={sybilIcon}
                alt="lock.svg"
              />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl leading-6 font-manrope-700 font-bold">
                  Sybil Resistance
                </h3>
                <p className="text-[#342F42] mt-3 lg:pr-4 tracking-[-0.04em] leading-[21px] font-normal font-poppins-400">
                  Grail’s Sybil resistance solution will improve user experience
                  of Dapps by making it more democratic, fair and rewarding for
                  genuine users and community members
                </p>
              </span>
            </div>
            <div className="sm:text-left flex flex-col justify-between items-center sm:items-start text-center">
              <Image
                className="sm:ml-0 mx-auto"
                src={identitySvg}
                alt="lock.svg"
              />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl leading-6 font-manrope-700 font-bold">
                  Identity Management
                </h3>
                <p className="text-[#342F42] mt-3 lg:pr-4 tracking-[-0.04em] leading-[21px] font-normal font-poppins-400">
                  Our identity management solution helps users manage personal
                  identities privately and securely. Dapps can reduce the risk
                  of fraud and provide a seamless user-onboarding experience
                </p>
              </span>
            </div>
            <div className="sm:text-left flex flex-col justify-between items-center sm:items-start text-center">
              <Image
                className="sm:ml-0 mx-auto"
                src={complianceSvg}
                alt="lock.svg"
              />
              <span className="mt-4 h-full relative">
                <h3 className="text-[#342F42] sm:text-xl mt-2 text-2xl leading-6 font-manrope-700 font-bold">
                  Compliance
                </h3>
                <p className="text-[#342F42] mt-3 lg:pr-4 tracking-[-0.04em] leading-[21px] font-normal font-poppins-400">
                  Our compliance solution assists Dapps in meeting KYC and AML
                  regulations without sacrificing the privacy primitives of web3
                </p>
              </span>
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
        <div className="container mx-auto sm:py-16 py-12 px-5 sm:px-0 md:px-8 lg:px-24">
          <div className="grid sm:grid-cols-2 sm:gap-10 lg:gap-0 gap-y-6">
            <div className="sm:text-left text-center 2xl:w-full lg:w-4/5 sm:h-5/6 md:h-4/5 2xl:h-4/5">
              <h1 className="text-[#342F42] lg:text-4xl sm:text-[28px] sm:w-5/6 2xl:w-2/4 text-2xl tracking-[-0.025em] leading-[33px] md:leading-[38px] lg:leading-[49px] font-manrope-800 font-bold mt-3">
                Powering Web3 ecosystems
              </h1>
              <span className="flex justify-center md:justify-start items-end sm:h-full">
                <Image
                  src={undrawWorldPng}
                  className="object-contain w-[270px] sm:w-[450px] mt-6"
                  alt=""
                />
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-[47px] lg:gap-14 gap-y-12">
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-between sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  Defi
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Grail helps Defi applications to reduce fraud, and stay
                  compliant with regulations while opening DeFi to new user
                  groups and mass adoption..
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-start sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  Gaming
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Spend less time on bot-proofing and improve the game mechanics
                  by making it fair for the players in your ecosystem. Reward
                  your real player with Grail.
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-start sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  DAO
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Enable 1 person 1 vote with strong sybil resistance which
                  unlocks more native democratic uses cases in a decentralized
                  ecosystem.
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-start sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  NFT Marketplaces
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Verify creators to avoid rugpulls/scams and erase the
                  possibility of fraud by vetting the buyers properly with
                  Grail.
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-start sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  Grant DAO/Pools
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Avoid regulatory scrutiny and limit payouts to trusted members
                  with Grail
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
              <div className="bg-[#F9F8FF] relative sm:bg-transparent flex flex-col sm:p-0 p-16 justify-start sm:text-left text-center sm:items-start items-center">
                <h1 className="sm:text-2xl text-[#342F42] text-xl font-manrope-700 leading-[29px] font-bold">
                  Airdrop
                </h1>
                <p className="text-[#342F42] text-xs lg:text-base mt-3 leading-[21px] tracking-[-0.04em] font-poppins-400 font-normal">
                  Identify and reward real supporters in your airdrop campaign.
                  Avoid Sybil attacks with grail and create a fair ecosystem.
                </p>
                {/* <Link
                  className="text-lg w-fit text-[#8247E5] hover:text-violet-700 font-poppins-600 font-semibold mt-3 flex sm:justify-start justify-center items-center"
                  href="/"
                >
                  Know more{" "}
                  <span className="ml-3 mt-0.5 font-medium">
                    <Image
                      src={RightArrowPurple}
                      className="object-contain sm:mx-0 mx-auto"
                      alt="team.png"
                    />
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content - 5 end  */}
      {/* content - 6 start  */}
      <div className="bg-gradient-to-b from-[#ffffffb4]  via-[#DAD7FA] to-[#DAD7FA]">
        <div className="sm:py-16 py-12 px-5 sm:px-0 container mx-auto">
          <div className="text-center md:w-2/3 lg:px-36 mx-auto">
            <h1 className="text-[#342F42] sm:text-[32px] text-2xl tracking-[-0.025em] leading-[32.78px] lg:leading-[44px] font-manrope-800 font-bold mt-3">
              Ready to experience the benefits of our ZK-powered KYC solution?
            </h1>
            <p className="text-[#342F42] mt-4 font-poppins-400 font-normal leading-[18px] md:leading-[21px] tracking-[-0.04em]">
              Contact us today to learn more and schedule a demo.
            </p>
            <Link target="_blank" href="https://cal.com/prasanna/grail">
              <button className="bg-[#8247E5] h-10 hover:bg-violet-600 sm:w-32 w-full text-white mt-6 font-poppins-600 font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* content - 6 end  */}
      {/* content - 7 start  */}

      <div className="bg-gradient-to-b from-[#110734] relative overflow-hidden to-[#443870]">
        <div className="sm:py-24 py-16 px-5 sm:px-0 md:px-8 lg:px-24 container mx-auto">
          <div className="grid z-10 relative sm:grid-cols-2 sm:gap-4 gap-y-12">
            <div className="sm:order-none order-first">
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
              <p className="text-white w-3/4 md:w-2/3 lg:w-5/12 mt-4">
                Your quest for a secure identity ends with Grail
              </p>
            </div>
            <div>
              {/* <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-4 gap-x-20  gap-y-6">
                <div className="text-white flex flex-col leading-8">
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                </div>
                <div className="text-white flex flex-col leading-8">
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                </div>
                <div className="text-white flex flex-col  leading-8">
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    About
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                  <Link className="hover:text-violet-600 w-fit" href="/">
                    Careers
                  </Link>
                </div>
              </div> */}
              <div className="flex gap-6 sm:justify-start justify-center">
                <Link className="m-0 sm:ml-auto" href="/">
                  <Image
                    className="object-contain"
                    src={socialIconSvg}
                    alt="social.png"
                  />
                </Link>
                <Link target="_blank" href="https://twitter.com/grailxyz">
                  <Image
                    className="object-contain"
                    src={twitterSvg}
                    alt="twitter.png"
                  />
                </Link>
                <Link
                  className="m-0 2xl:mr-36 xl:mr-28 lg:mr-24 md:mr-12 sm:mr-11"
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
