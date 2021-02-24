import Link from 'next/link'

const Footer = () => {
  return (
    <div className='footer flex justify-end'>
      <div className='text-sm mr-8'>Copyright &copy; 2021 Shaw Malcolm</div>
      <div>
        <ul className='flex text-sm mr-8'>
          <Link href='/'>
            <a className='mr-2 anchor'>Home</a>
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
    </div>
  )
}

export default Footer
