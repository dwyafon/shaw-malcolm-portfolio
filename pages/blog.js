import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Blog({ posts }) {
  return (
    <div>
      <Navbar />
      <div>
        {posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug}>
            <header>
              <h3 className='mb-1 text-3xl text-orange'>
                <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                  <a className='text-3xl text-orange no-underline'>{title}</a>
                </Link>
              </h3>
              <p className='text-sm mb-1'>{date}</p>
            </header>
            <section>
              <p className='mb-8'>{description}</p>
            </section>
          </article>
        ))}
      </div>
      <Footer />
    </div>
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
