import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>Shaw Malcolm</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="public/fonts/style.css" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-20 min-w-50">
          <p>
            I'm a junior Front-End Engineer (currently apprenticing at{" "}
            <a
              className="text-orange"
              href="https://trackstack.in/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Trackstack
            </a>
            ) who excels at translating UI designs into responsive and
            accessible layouts.
          </p>
          <p>My (mostly) front-end stack:</p>
          <ul className="list-disc ml-8">
            <li>Programming languages: JavaScript, TypeScript</li>
            <li>Libraries and frameworks: React, Redux, styled components, joi</li>
            <li>HTML: accessibility, security, SEO</li>
            <li>CSS: Grid, Flexbox, Modules, Tailwind</li>
            <li>APIs: REST, GraphQL, Apollo, Yoga</li>
            <li>Server: Node.js</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          HTML, CSS, JavaScript(favourite flavour: vanilla), TypeScript,
          Node.js, React, Redux, Next.js, GraphQL, Apollo, npm, Yarn, Git,
          GitHub
          <p>
            My background is super leveragable for engineering: 17 years in the
            hospitality industry (where I honed my problem defining and solving
            skills and utilised Scrum practises for staff and service
            development). I'm also trained/qualified in person-centred
            therapeutic couselling with 2.5 years of experience as a volunteer
            beravement counsellor.
          </p>
          <p>
            My motivations: To help solve problems with cleaner and more
            accessible design and code.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
