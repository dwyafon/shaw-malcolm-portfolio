import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import Layout from '../components/layout'
import Image from "next/image";

export default function Projects({ projects }) {
  const Projects = projects.sort((a, b) => b.frontmatter.id - a.frontmatter.id)
  return (
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
              className='rounded-lg bg-charcoal p-2 lg:mx-12 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/4'
            >
              <header>
                <h2 className='mb'>
                  <Link href={'/project/[slug]'} as={`/project/${slug}`}>
                    <a className='text-lg anchor no-underline'>{title}</a>
                  </Link>
                </h2>
                <p className='text-sm mb-1 text-cream'>{description}</p>
              </header>
              <section className='flex justify-center mt-2 mb-2'>
              <Image
              src={image}
              alt={alt}
              width={500}
              height={375}
            />
              </section>
              <section>
                <p className='text-sm mb-1 text-orange'>
                  Type: <span className='text-cream'>{type}</span>
                </p>
                <p className='text-sm mb-1 text-orange'>
                  Built with:{' '}
                  {tools.map((tool, index) => (
                    <span key={index} className='text-cream'>
                      {index === tools.length - 1 ? `${tool} ` : `${tool}, `}
                    </span>
                  ))}
                </p>
                <p className='text-sm mb-1'>
                  <a href={source} className='anchor'>
                    Source Code
                  </a>
                </p>
                <p className='text-sm mb-1'>
                  <a href={visit} className='anchor'>
                    Visit
                  </a>
                </p>
              </section>
            </article>
          )
        )}
      </div>
    </Layout>
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
      slug: filename.replace('.md', ''),
      frontmatter,
    }
  })

  return {
    props: {
      projects,
    },
  }
}
