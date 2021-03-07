import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      {' '}
      <Head>
        <title>Shaw Malcolm - Developer and Tester</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='public/fonts/style.css' rel='stylesheet' />
      </Head>
      <Layout>
        {' '}
        <div className='flex sm:flex-col lg:flex-row lg:mx-24'>
          <div className='flex justify-center mb-2 flex-shrink-0'>
            <img
              src='/images/shaw-profile-250.png'
              alt='Shaw Malcolm profile photo'
              className='flex justify-center rounded-full profile sm:h-44 sm:w-44 xl:h-'
            />
          </div>

          <div className='mx-5 sm:mx-4 md:mx-16 lg:mx-24 xl:mx-36 xxl:mx-48'>
            <p className='mb-4'>
              I'm a junior Front-End Developer and Tester who excels at
              translating UI designs into responsive and accessible layouts with
              JavaScript, TypeScript, and React. I'm also a huge advocate of
              testing and writing testable code. Currently apprenticing at{' '}
              <a
                className='text-orange'
                href='https://trackstack.in/'
                referrerPolicy='no-referrer'
                target='_blank'
              >
                Trackstack
              </a>
              .
            </p>
            <p className='mb-4'>
              My background is highly leverageable for web development: 17 years
              in the hospitality industry defining and solving problems,
              building relatonships with stakeholders, and utilising agile
              practises (including Scrum) for staff, service and system
              development. I'm also qualified in person-centred counselling, and
              during 2.5 years as a volunteer bereavement counsellor I deepened
              my ability to empathise and listen.
            </p>
            <p className='mb-4'>
              I'm looking for a company with a great culture that cares about
              testing and TDD, clean code, efficient CI/CD practises, and agile
              methodologies.
            </p>

            <p className='mb-8'>
              You can find me on{' '}
              <a
                className='text-orange'
                href='https://www.linkedin.com/in/shawmalcolm/'
                referrerPolicy='no-referrer'
                target='_blank'
              >
                LinkedIn
              </a>{' '}
              and{' '}
              <a
                className='text-orange'
                href='https://github.com/dwyafon'
                referrerPolicy='no-referrer'
                target='_blank'
              >
                GitHub
              </a>
              .{' '}
            </p>
          </div>
        </div>
      </Layout>
    </>
  )
}
