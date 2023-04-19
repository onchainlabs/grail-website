import React from "react";
import Link from "next/link";
import Image from "next/image";
import appIcon from "../public/images/icon.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { House, PaperPlaneTilt, X } from "phosphor-react";

const NavBar = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {}, [showMobileSidebar]);

  function toggleSidebar() {
    setShowMobileSidebar(!showMobileSidebar);
  }

  function handleDownloadClick() {
    const pdfUrl = "/the-grail-litepaper-v1.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "The-Grail-Litepaper-V01.pdf"; // Desired filename for the downloaded PDF
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const router = useRouter();

  return (
    <>
      {/* nav bar start / */}
      <div className="container mx-auto">
        <nav className="pt-4 lg:pt-8 relative">
          <div className="px-4 sm:px-0 md:px-8 lg:px-16">
            <div className="relative flex items-center justify-between">
              <div className="flex flex-shrink-0 bg-[#7659B9] items-center p-1 sm:mr-20 lg:mr-28 2xlmr-12">
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
                      router.pathname == "/litepaper"
                        ? "text-slate-900"
                        : "text-[#8F8E90]"
                    }
                  >
                    <button
                      className="px-3 py-2 hover:text-slate-900  font-medium"
                      onClick={() => handleDownloadClick()}
                    >
                      Litepaper
                    </button>
                  </li>
                </ul>
              </div>
              <div className="absolute sm:block hidden inset-y-0 right-0 items-center sm:static sm:inset-auto sm:pr-0">
                <button className="bg-[#8247E5] h-10 hover:bg-violet-600 w-32 text-white font-poppins-500 font-medium">
                  <Link target="_blank" href="https://cal.com/prasanna/grail">
                    Contact
                  </Link>
                </button>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button start */}
                <button
                  type="button"
                  onClick={toggleSidebar}
                  className="inline-flex items-center justify-center rounded-md"
                  data-te-sidenav-toggle-ref
                  data-te-target="#sidenav"
                  aria-controls="#sidenav"
                  aria-haspopup="true"
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
          <div
            id="sidenav"
            className={`fixed h-screen top-0 right-0 z-[1035] w-60 overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] transition-transform duration-300 ease-in-out${
              showMobileSidebar
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-right="true"
          >
            <ul
              className="relative flex flex-col justify-between w-full m-0 h-full list-none"
              data-te-sidenav-menu-ref
            >
              <div>
                {/* <li className="relative "> */}
                <span className="flex flex-row justify-between mx-3 my-5">
                  <Image
                    className="block h-8 w-auto rounded-full"
                    src={appIcon}
                    alt="app-icon.png"
                  />
                  <button onClick={toggleSidebar}>
                    <X size={22} />
                  </button>
                </span>
                {/* </li> */}
                <hr className="h-px mb-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <li
                  className={`relative mb-4 ${
                    router.pathname == "/" && "bg-violet-50"
                  }`}
                >
                  <Link
                    href="/"
                    data-te-sidenav-link-ref
                    className="flex h-5 gap-3 items-center truncate rounded-[5px] py-4 px-3 text-base text-violet-600 outline-none transition duration-300 ease-linear hover:bg-violet-50 hover:text-inherit hover:outline-none focus:bg-violet-50 focus:text-inherit focus:outline-none data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none font-poppins-500 hover:text-violet-100 font-medium"
                  >
                    <House className="font-bold" />
                    Home
                  </Link>
                </li>
                <li
                  className={`relative ${
                    router.pathname == "/litepaper" && "bg-violet-50"
                  }`}
                >
                  <div
                    data-te-sidenav-link-ref
                    onClick={() => handleDownloadClick()}
                    className="flex h-5 gap-3 items-center truncate rounded-[5px] py-4 px-3 text-base text-violet-600 outline-none transition duration-300 ease-linear hover:bg-violet-50 hover:text-inherit hover:outline-none focus:bg-violet-50 focus:text-inherit focus:outline-none active:bg-violet-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none font-poppins-500 hover:text-violet-100 font-medium"
                  >
                    <PaperPlaneTilt />
                    Litepaper
                  </div>
                </li>
                <button className="bg-[#8247E5] mt-12 h-10 hover:bg-violet-600 w-full text-white font-poppins-500 font-medium">
                  <Link target="_blank" href="https://cal.com/prasanna/grail">
                    Contact
                  </Link>
                </button>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
