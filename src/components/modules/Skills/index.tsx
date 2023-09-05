import Image from 'next/image';
import Link from 'next/link';

const Skills = () => (
  <div
    data-test-id="about"
    className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top"
    id="about"
  >
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m John and I’m a Backend & Devops engineer!"
          width={447}
          height={326}
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">
          Interested in more about me?
        </h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
          I'm excited to welcome you to my digital corner! I'm currently
          pursuing the Web Development Bootcamp at UpLeveled, where I'm honing
          my skills and knowledge in HTML, CSS, JavaScript, React, Node.js,
          Next.js, GraphQL, PostgreSQL, GitHub and many more.
        </p>
        <Link href="#contact" className="button button-primary">
          Hire me - trust your guts
        </Link>
      </div>
    </div>
  </div>
);

export default Skills;
