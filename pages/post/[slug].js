import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import style from '../../styles/markdown-styles.module.scss'
import {MDXProvider} from '@mdx-js/react'

export default function Post({ content }) {
  return (
    <MDXProvider>
      <Navbar />
      <article className="mx-6">
        <ReactMarkdown escapeHtml={false} source={content} className={style.reactMD}/>
      </article>
      <Footer />
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync('content/posts')

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
    .readFileSync(path.join('content/posts', `${slug}.md`))
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
