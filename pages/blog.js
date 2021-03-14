import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import Layout from '../components/layout'

export default function Blog({ posts }) {
  const Posts = posts.sort((a, b) => b.frontmatter.id - a.frontmatter.id)
  return (
    <Layout>
      {' '}
      <div className='mx-8'>
        {Posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className='mb-1 text-3xl'>
                <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                  <a className='text-3xl text-orange  anchor no-underline'>{title}</a>
                </Link>
              </h3>
              <p className='text-sm mb-1 text-orange dark:text-cream'>{date}</p>
            </header>
            <section>
              <p className='mb-8 text-black dark:text-cream'>{description}</p>
            </section>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`)

  const posts = files.map((filename) => {
    const markdownWithMetaData = fs
      .readFileSync(`content/posts/${filename}`)
      .toString()

    const { data } = matter(markdownWithMetaData)

    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    const formattedDate = data.date.toLocaleDateString('en-GB', options)

    const frontmatter = {
      ...data,
      date: formattedDate,
    }

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
