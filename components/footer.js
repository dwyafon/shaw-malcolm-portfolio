import Link from 'next/link'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Footer = () => {
  return (
    <div className='w-full flex flex-col sm:p-3 sm:items-center lg:items-end lg:fixed lg:bottom-0 bg-charcoal lg:opacity-90'>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <div className='icons flex mb-2 lg:mb-1 space-x-6 lg:space-x-2 text-cream'>
          <a
            href='https://www.linkedin.com/in/shawmalcolm/'
            referrerPolicy='no-referrer'
            target='_blank'
            className=''
          >
            <AiOutlineLinkedin />
          </a>
          <a
            href='https://github.com/dwyafon'
            referrerPolicy='no-referrer'
            target='_blank'
          ></a>
          <AiOutlineGithub />
        </div>
      </IconContext.Provider>

      <div className='mb-1'>
        <ul className='flex text-sm'>
          <Link href='/'>
            <a className='mx-2 anchor font-black'>Home</a>
          </Link>
          <span className='text-orange divider'>|</span>
          <Link href='/projects'>
            <a className='mx-2 anchor font-black'>Projects</a>
          </Link>
          <span className='text-orange divider'>|</span>
          <Link href='/blog'>
            <a className='mx-2 lg:mr-0 anchor font-black'>Blog</a>
          </Link>
        </ul>
      </div>
      <div className='text-sm text-cream'>
        Copyright &copy; {new Date().getFullYear()} Shaw Malcolm
      </div>
    </div>
  )
}

export default Footer
