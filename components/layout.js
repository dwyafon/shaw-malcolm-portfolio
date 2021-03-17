import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Layout = ({ children }) => {
  return (
    <div className='grid grid-rows-x min-h-screen col-span-full bg-white dark:bg-black'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
