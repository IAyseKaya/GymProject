import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import navigation from '../../data/navbar.js';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [navBack, setNavBack] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavBack(true);
        }
        else {
            setNavBack(false);
        }

    }
    window.addEventListener('scroll', changeBackground);

    return (
            <div className={navBack ? 'navbar w-full sticky top-0 z-40 h-20 bg-black text-white transition duration-500  ease-out ' 
                                    : 'navbar w-full sticky top-0 z-50 bg-transparent transition duration-500 ease-out'}>
                
                <header className="absolute inset-x-0 top-0 z-30">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">AysGym</span>
                                <img
                                    className="w-auto h-9"
                                    src="https://media.discordapp.net/attachments/988883199209926710/1146903215053484042/pngaaa.com-2946803.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-500"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12 drop-shadow-2xl">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="login" className="text-sm font-semibold leading-6 ">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">AysGym</span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://media.discordapp.net/attachments/988883199209926710/1146903215053484042/pngaaa.com-2946803.png"
                                        alt=""
                                    />
                                </a>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-red-500"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-red-500/10">
                                    <div className="space-y-2 py-6 drop-shadow-xl ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="login"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
                
            </div>
    );
}
export default Navbar;