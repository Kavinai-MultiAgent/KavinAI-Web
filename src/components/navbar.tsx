import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export const Navbar = () => {
    return (
        <nav className='flex justify-between dark:bg-black border-b border-gray-300 dark:border-gray-900 h-16 items-center px-5'>
            <div className="left_side">
                <div className="logo text-2xl font-bold">
                    <h1>Kavin<span className='text-blue-500'>AI</span></h1>
                </div>
            </div>
            <div className="right_side flex items-center">
                <ul className="pages flex">
                    <li className='mr-3 font-semibold'><Link href='/'>Solutions</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>About</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>Pricing</Link></li>
                    <li className='mr-3 font-semibold'><Link href='/'>FAQ</Link></li>
                </ul>
                <div className="download">
                    <Button><Link href={'/download'}>Download</Link></Button>
                </div>
            </div>
        </nav>
    )
}
