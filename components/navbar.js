import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:items-center mb-2 lg:items-start lg:m-8'>
      <div className='flex flex-col items-center lg:flex-row lg:justify-start'>
        <Link href='/'>
          <Image
            className=''
            src='/images/logo.png'
            alt='Shaw Malcolm Logo'
            width={60}
            height={60}
          />
        </Link>
        <div className='flex flex-col items-center lg:mx-4'>
          <h2 className='text-3xl'>Shaw Malcolm</h2>
          <ul className='flex text-base'>
            <Link href='/'>
              <a className='mx-2 anchor'>Home</a>
            </Link>
            |
            <Link href='/projects'>
              <a className='mx-2 anchor'>Projects</a>
            </Link>
            |
            <Link href='/blog'>
              <a className='mx-2 anchor'>Blog</a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
