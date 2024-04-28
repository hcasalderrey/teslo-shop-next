import { titleFont } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-28 sm:pt-48">
        <div className='flex justify-center items-center'>

        <Image src={'/imgs/bag.svg'} alt="logo" width={100} height={100} className='text-center' />
        </div>

      <h1 className={ `${ titleFont.className } text-4xl mb-5 text-center` }>Ingresar</h1>

      <LoginForm />
    </div>
  );
}