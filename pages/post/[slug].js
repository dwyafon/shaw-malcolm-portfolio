import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

export default function Post({ content, frontmatter }) {
  return (
    <div>
      <Navbar />
      <article>
        <ReactMarkdown escapeHtml={false} source={content} />
      </article>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync('content/post')

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetaData = fs
    .readFileSync(path.join('content/post', slug + '.md'))
    .toString()

  const { data, content } = matter(markdownWithMetaData)

  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const formattedDate = data.date.toLocaleDateString('en-GB', options)

  const frontmatter = {
    ...data,
    date: formattedDate,
  }

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    },
  }
}
