import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Projects({ projects }) {

  const Projects = projects.sort((a, b) => b.frontmatter.id - a.frontmatter.id)
  return (
    <Layout>
      {' '}
      <div className='flex flex-wrap overflow-hidden sm:mx-3 md:mx-2 lg:mx-2 xl:mx-3 mb-36'>
        {projects.map(
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
              className='border-2 border-cream rounded-lg bg-charcoal p-2 lg:mx-12 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-full md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:my-3 xl:px-3 xl:w-1/4'
            >
              <header>
                <h2 className='mb'>
                  <Link href={'/project/[slug]'} as={`/project/${slug}`} passHref>
                    <a className='text-lg text-orange dark:text-orange no-underline'>
                      {title}
                    </a>
                  </Link>
                </h2>
                <p className='text-sm mb-1 text-orange dark:text-cream'>
                  {description}
                </p>
              </header>
              <section>
                <Image
                  className='w-full'
                  src={image}
                  alt={alt}
                  width={250}
                  height={150}
                />
              </section>
              <section>
                <p className='text-sm mb-1 text-orange dark:text-cream'>
                  Type: {type}
                </p>
                <p className='text-sm mb-1 text-orange dark:text-cream'>
                  Built with: {tools.map((e) => (
                    <span>{e} </span>
                  ))}
                </p>
                <p className='text-sm mb-1 text-orange dark:text-cream'>
                  <a href={source}>Source Code</a>
                </p>
                <p className='text-sm mb-1 text-orange dark:text-cream'>
                <a href={visit}>Visit</a>

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
