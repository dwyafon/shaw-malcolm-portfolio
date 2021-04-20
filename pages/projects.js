import Link from 'next/link'
import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Projects({ projects }) {
  const Projects = projects.sort((a, b) => b.frontmatter.id - a.frontmatter.id)
  return (
    <>
      <Head>
      
        <title>Shaw Malcolm - Developer and Tester</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='public/fonts/style.css' rel='stylesheet' />
      </Head>

      <Layout>
        {' '}
        <div className='flex flex-wrap overflow-hidden sm:mx-3 md:mx-2 lg:mx-2 xl:mx-3 mb-36'>
          {Projects.map(
            ({
              frontmatter: {
                title,
                description,
                image,
                alt,
                type,
                tools,
                source,
                visit,
              },
              slug,
            }) => (
              <article
                key={slug}
                className='rounded-lg  p-2 lg:mx-12 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/4'
              >
                <header>
                  <h2 className='mb'>
                    <Link href={'/project/[slug]'} as={`/project/${slug}`}>
                      <a className='text-base anchor hover:text-blue dark:hover:text-green '>
                        {title}
                      </a>
                    </Link>
                  </h2>
                  <p className='text-sm mb-1 text-black dark:text-white'>
                    {description}
                  </p>
                </header>
                <section className='flex justify-center mt-2 mb-2'>
                  <Image src={image} alt={alt} width={500} height={375} />
                </section>
                <section>
                  <p className='text-sm mb-1 text-pumpkin'>
                    Type:{' '}
                    <span className='text-black dark:text-white'>{type}</span>
                  </p>
                  <p className='text-sm mb-1 text-pumpkin'>
                    Built with:{' '}
                    {tools.map((tool, index) => (
                      <span key={index} className='text-black dark:text-white'>
                        {index === tools.length - 1 ? `${tool} ` : `${tool}, `}
                      </span>
                    ))}
                  </p>
                  <p className='text-sm mb-1'>
                    <a
                      href={source}
                      target='_blank'
                      rel='noopener noreferer'
                      className='anchor hover:text-blue dark:hover:text-green'
                    >
                      Source Code
                    </a>
                  </p>
                  <p className='text-sm mb-1'>
                    <a
                      href={visit}
                      target='_blank'
                      rel='noopener noreferer'
                      className='anchor hover:text-blue dark:hover:text-green'
                    >
                      Visit
                    </a>
                  </p>
                </section>
              </article>
            )
          )}
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/projects`)

  const projects = files.map((filename) => {
    const markdownWithMetaData = fs
      .readFileSync(`content/projects/${filename}`)
      .toString()

    const { data } = matter(markdownWithMetaData)

    const frontmatter = {
      ...data,
    }

    return {
      slug: filename.replace('.mdx', ''),
      frontmatter,
    }
  })

  return {
    props: {
      projects,
    },
  }
}
