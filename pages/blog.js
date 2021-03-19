import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Layout from "../components/layout";

export default function Blog({ posts }) {
  const Posts = posts.sort((a, b) => b.frontmatter.id - a.frontmatter.id);
  return (
    <Layout>
     
      <div className="m:mx-4 sm:mx-6 md:mx-10 max-w-screen-md lg:mx-48 xl:mx-96 lg:mb-48">
      <h1 className="text-pumpkin text-3xl mb-1 text-center">Blog List</h1>
      <h2 className="mb-4 text-black dark:text-white text-center">Click on a title for full post</h2>
        {Posts.map(({ frontmatter: { title, description, date }, slug }) => (
          <article key={slug} className="">
            <header>
              <h3 className="mb-1 text-base">
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <a className="text-2xl text-pumpkin anchor hover:text-blue dark:hover:text-green">
                    {title}
                  </a>
                </Link>
              </h3>
              <p className="text-sm mb-1 text-pumpkin dark:text-cream">
                {date}
              </p>
            </header>
            <section>
              <p className="mb-8 text-black dark:text-cream">{description}</p>
            </section>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetaData = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetaData);

    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-GB", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
