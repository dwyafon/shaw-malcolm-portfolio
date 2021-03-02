import Link from 'next/link'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center mb-4'>
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <div className='icons flex mb-2'>
          <a
            href='https://www.linkedin.com/in/shawmalcolm/'
            referrerPolicy='no-referrer'
            target='_blank'
          >
            <AiOutlineLinkedin className='mx-2' />
          </a>
          <a
            href='https://github.com/dwyafon'
            referrerPolicy='no-referrer'
            target='_blank'
          ></a>

          <AiOutlineGithub className='mx-2' />
        </div>
      </IconContext.Provider>

      <div className='mb-2'>
        <ul className='flex text-sm mr-8'>
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
      <div className='text-sm mr-8 mb-2'>Copyright &copy; {new Date().getFullYear()} Shaw Malcolm</div>
    </div>
  )
}

export default Footer
