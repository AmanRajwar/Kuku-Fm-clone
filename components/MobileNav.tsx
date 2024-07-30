'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HamburgerSvg from "@/public/icons/HamburgerSvg";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navigation } from '@/constants';
import { cn } from '@/lib/utils';

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <section className="lg:hidden w-full ml-6 max-w-[70px] sm:ml-0 sm:max-w-[180px] ">
            <Sheet>
                <SheetTrigger asChild>

                    <HamburgerSvg className="  max-sm:h-[50px] lg:hidden sm:ml-[120px] cursor-pointer " width={70} height={70} color="white" />
                </SheetTrigger>
                <SheetContent side="left" className=" z-50 border-none  bg-dark-2 ">
                    <Link href="/" className=" z-50 flex items-center gap-1">
                        <Image className="  z-50 invert rounded-full"
                            src='/icons/kukufm.jpeg'
                            width={35}
                            height={35}
                            alt="KUKU FM"
                        />

                    </Link>
                    <div className=" z-50flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="z-50 flex h-full flex-col gap-6 pt-16 text-white">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.route;
                                    { console.log(pathname, item.route) }
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link
                                                href={item.route}
                                                key={item.id}
                                                className={cn(
                                                    ' z-50 flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                                                    {
                                                        'bg-blue-1': isActive,
                                                    }
                                                )}
                                            >
                                                {/* <Image
                                                    src={item.imgURL}
                                                    alt={item.label}
                                                    width={20}
                                                    height={20}
                                                /> */}
                                                <p className="font-semibold z-50">{item.title}</p>
                                            </Link>
                                           
                                        </SheetClose>
                                        
                                    );
                                })}
                            </section>
                            

                        </SheetClose>
                    
                </div>
                <div className='absolute top-10 left-0 h-full w-full bg-carousel-gradient z-1 '></div>
            </SheetContent>
        </Sheet>
        </section >
    );
};

export default MobileNav;