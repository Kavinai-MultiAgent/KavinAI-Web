"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <nav className='sticky top-0 left-0 z-50 flex justify-between dark:bg-black border-b border-gray-300 dark:border-gray-900 h-16 items-center px-5'>
            <div className="left_side">
                <div className="logo text-2xl font-bold">
                    <h1>Kavin<span className='text-blue-500'>AI</span></h1>
                </div>
            </div>
            <div className="right_side flex items-center">
                <ul className={`pages md:flex block md:static absolute top-16 left-0 text-center w-full justify-center md:bg-transparent dark:bg-black bg-white ${nav ? "": ""}`}>
                    <li className='mr-3 font-semibold'><Link href='/'>Solutions</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>About</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>Pricing</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>FAQ</Link></li>
                </ul>
                <div className="download">
                    <Button><Link href={'/download'}>Download</Link></Button>
                </div>
                <div className="nav_icons md:hidden block">
                    <MenuIcon className='cursor-pointer ml-2' />
                </div>
            </div>
        </nav>
    )
}
