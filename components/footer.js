import Link from 'next/link'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center'>
      <div className='icons flex'>
        <AiOutlineLinkedin className='mx-2'/>
        <AiOutlineGithub className="mx-2"/>
      </div>

      <div>
        <ul className='flex text-sm mr-8'>
          <Link href='/'>
            <a className='mx-2 anchor'>Home</a>
          </Link>
          |
          <Link href='/about'>
            <a className='mx-2 anchor'>About</a>
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
      <div className='text-sm mr-8'>Copyright &copy; 2021 Shaw Malcolm</div>
    </div>
  )
}

export default Footer
