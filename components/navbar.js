import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <div className='flex flex-col sm:items-center sm:mb-2 mb-2 lg:items-start lg:m-8'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-start'>
        <div className='sm:mt-4 lg:mt-0'>
          {' '}
          <Link href='/'>
            {theme === 'dark' ? (
              <Image
                src='/images/white-logo-no-bg.png'
                alt='Shaw Malcolm Logo'
                width={60}
                height={60}
              />
            ) : (
              <Image
                src='/images/logo-black.png'
                alt='Shaw Malcolm Logo'
                width={60}
                height={60}
              />
            )}
          </Link>
        </div>

        <div className='flex flex-col items-center lg:mx-4'>
          <h2 className='text-3xl text-black dark:text-cream'>Shaw Malcolm</h2>
          <ul className='flex text-base'>
            <Link href='/'>
              <a className='mx-2 anchor font-black'>Home</a>
            </Link>
            <span className="text-orange divider">|</span>
            <Link href='/projects'>
              <a className='mx-2 anchor font-black'>Projects</a>
            </Link>
            <span className="text-orange divider">|</span>
            <Link href='/blog'>
              <a className='mx-2 anchor font-black'>Blog</a>
            </Link>
          </ul>
        </div>
        <div className='sm:mt-3 lg:mt-0 lg: ml-3'>
          <button
            aria-label='Toggle Dark Mode'
            type='button'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                stroke='currentColor'
                className='h-6 w-6 text-black dark:text-cream'
              >
                {theme === 'dark' ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
