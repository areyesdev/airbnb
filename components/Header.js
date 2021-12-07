import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left - Logo*/}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='/images/logos/Airbnb.svg'
          alt='Logo'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Middle - Search*/}
      <div className='flex items-center md:border-2 rounded-full py-2'>
        <input
          className='flex-grow pl-5 bg-transparent outline-none'
          type='text'
          placeholder='Start your search'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer' />
      </div>
      {/* Right */}
    </header>
  );
}

export default Header;
