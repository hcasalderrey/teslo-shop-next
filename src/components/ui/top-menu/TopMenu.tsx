"use client"

import { titleFont } from '@/config/fonts'
import { useUIStore } from '@/store'
import Link from 'next/link' 
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const TopMenu = () => {
    const openMenu = useUIStore( state => state.openSideMenu );
  return (
    <div className='flex px-5 justify-between items-center w-full'>

        {/* Logo */}
        <div>
            <Link href='/'>
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                <span> | Shop</span>
            </Link>
        </div>

        {/* Center menu */}
        <div className='hidden sm:block'>
            <Link href='/category/men' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Hombres</Link>
            <Link href='/category/woman' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Mujeres</Link>
            <Link href='/category/kids' className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>Niños</Link>

        </div>

        {/* User Cart */}
        <div className='flex items-center'>
            <Link href='/search' className='mx-2'>
                <IoSearchOutline className='w-5 h-5' />
            </Link>
            <Link href='/cart' className='mx-2'>
                <div className='relative'>
                    <span className='absolute -top-2 -right-2  px-1 justify-center text-xs bg-blue-700 rounded-full text-white font-bold'
                        >3</span>
                <IoCartOutline className='w-5 h-5' />
                </div>
            </Link>

            <button onClick={openMenu} className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'>
                Menú
            </button>

        </div>


    </div>
  )
}
