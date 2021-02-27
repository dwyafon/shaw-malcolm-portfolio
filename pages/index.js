import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";

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
      <div className="flex flex-col lg:flex-row">
        <div className="flex justify-center mb-2">
          <Image
            src="/images/shaw-profile-250.png"
            alt="Shaw Malcolm profile photo"
            width={150}
            height={150}
            className="rounded-full profile h-2 w-2"
          />
        </div>

        <div className="mx-5">
          <p className="mb-4">
            I'm a junior Front-End Engineer who excels at translating UI designs
            into responsive and accessible layouts with JavaScript, TypeScript,
            and React. Currently apprenticing at{" "}
            <a
              className="text-orange"
              href="https://trackstack.in/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Trackstack
            </a>
            .
          </p>
          <p className="mb-4">
            My background is super leveragable for engineering: 17 years in the
            hospitality industry where I honed my skills with defining and
            solving problems and utilised Scrum practises for staff, service and
            system development. I'm also a qualified person-centred therapeutic
            counsellor, and during 2.5 years as a volunteer bereavement
            counsellor I deepened my ability to empathise and listen.
          </p>
          <p className="mb-4">
            I'm looking for a company with a great culture that cares about
            testing and TDD, clean code, efficient CI/CD practises, and agile
            methodologies.
          </p>

          <p className="mb-8">
            You can find me on{" "}
            <a
              className="text-orange"
              href="https://www.linkedin.com/in/shawmalcolm/"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              className="text-orange"
              href="https://github.com/dwyafon"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              GitHub
            </a>
            .{" "}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
