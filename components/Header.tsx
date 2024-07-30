'use client'
import { navigation } from "@/constants";
import { Input } from "@/components/ui/input"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isActive, setIsActive] = useState('Home')





  return (
    <div
      className='fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8'
    >
      <div className="flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block max-sm:w-[3rem]  max-sm:mr-9 max-sm:my-2 w-[12rem] xl:mr-8 my-4" href="/">
          <Image className=" invert rounded-full"
            src='/icons/kukufm.jpeg'
            width={60}
            height={40}
            alt="kuku fm"
            loading="lazy" />
        </Link>


        <Input className=" lg:m-auto" />

        <nav
          className={`hidden bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                onClick={() => setIsActive(item.title)}
                className={`block relative font-code text-xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xl lg:font-semibold ${isActive == item.title
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* <HamburgerMenu /> */}
        </nav>

        {/* <HamburgerSvg onClick={toggleNavigation} className="lg:hidden ml-[120px] " width={70} height={70} color="white " /> */}
        <MobileNav />
      </div>
    </div>
  );
};

export default Header;