import React from 'react'
import Layout from '../../components/layout'
import style from '../../styles/markdown-styles.module.scss'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'
import { MDXProvider } from '@mdx-js/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const syntaxHighlight = ({ value }) => {
  return (
    <SyntaxHighlighter language='javascript' style={gruvboxDark}>
      {value}
    </SyntaxHighlighter>
  )
}

export default function Project({ content }) {
  return (
    <MDXProvider>
      <Layout>
        <article className='sm:mx-4 md:mx-8 max-w-screen-md lg:mx-48 xl:mx-96 lg:mb-36 text-black dark:text-cream'>
          <ReactMarkdown
            className={style.reactMD}
            escapeHtml={false}
            source={content}
            renderers={{ code: syntaxHighlight }}
          />
        </article>
      </Layout>
    </MDXProvider>
  )
}

export async function getStaticPaths() {
  const files = await fs.readdirSync('content/projects')

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetaData = fs
    .readFileSync(path.join('content/projects', `${slug}.mdx`))
    .toString()

  const { data, content } = matter(markdownWithMetaData)

  const frontmatter = {
    ...data,
  }

  return {
    props: {
      content: `# ${data.title}\n${content}`,
      frontmatter,
    },
  }
}
