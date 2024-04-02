import type { Metadata } from "next";
import Image from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Development Principles",
  description: "My philosophy for development and teamwork explained.",
};

export default function Principles() {
  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-2xl lg:text-4xl text-slate-800 font-bold">Development Principles</h1>
        <p className="mx-auto text-sm text-slate-500 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          Rooted in 15+ years of industry experience and best practices, these principles serve as the 
          cornerstone of my software development career and how I approach even those most basic projects.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Quality Obsessed */}
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:space-x-24 mx-auto">
        <Image
          src="/illustrations/quality-obsessed.svg"
          alt="Obsessed with quality to a fault."
          className="flex-none mb-16 mx-auto lg:mb-0 lg:mx-0"
          width={256}
          height={256}
          priority
        />
        <div className="flex-auto space-y-4 lg:space-y-4 -mt-2">
          <h3 className="lg:text-xl text-slate-600 font-bold text-center lg:text-right">Obsessed with Quality to a Fault</h3>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            In the realm of software architecture, mediocrity is not an option. Embracing
            a mindset of relentless pursuit of perfection, where every architectural decision
            is meticulously crafted to withstand the test of time. From microservices to monoliths,
            my obsession with architectural excellence will lay the foundation for robust,
            scalable, and resilient systems that stand the test of time.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Design is not just about aesthetics—it&apos;s about creating intuitive, elegant solutions that 
            delight users and stand the test of time. I manifest my obsession with design perfection 
            into every pixel, every interaction, and every user journey. With an unwavering focus 
            on user experience and interface design, I love to elevate creations from mere 
            applications to works of art that inspire and captivate.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Never Give Up */}
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-start lg:space-x-24 mx-auto">
        <div className="flex-auto space-y-4 lg:space-y-4 -mt-2">
          <h3 className="lg:text-xl text-slate-600 font-bold text-center lg:text-left">Never Give Up, Never Surrender</h3>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            In the world of software development, challenges abound and obstacles loom large—
            but true success belongs to those who never surrender to adversity. Perseverance is everything. 
            No matter how daunting the task, no matter how insurmountable the odds, I refuse to back down. 
            Instead, I embrace each setback as an opportunity for growth, each failure as a 
            lesson in disguise.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Mistakes are not roadblocks; they are stepping stones on the path to greatness. 
            With each setback, I gain invaluable insight, honing my skills and refining 
            my approach to solving the problem at hand. Whether it&apos;s a bug in the code, a 
            flaw in the architecture, or a performance degredation, I welcome each challenge 
            as a chance to learn, adapt, and evolve.
          </p>
        </div>
        <Image
          src="/illustrations/never-give-up.svg"
          alt="No problem is too difficult, and I will never give up."
          className="flex-none mb-16 mx-auto lg:mb-0 lg:mx-0"
          width={256}
          height={256}
          priority
        />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Teaching & Learning */}
      <div className="flex flex-wrap lg:flex-nowrap items-start lg:space-x-24 mx-auto">
        <Image
          src="/illustrations/teaching-and-learning.svg"
          alt="Everything is either a teachable moment, or a chance to gain knowledge."
          className="flex-none mb-16 mx-auto lg:mb-0 lg:mx-0"
          width={256}
          height={256}
          priority
        />
        <div className="flex-auto space-y-4 lg:space-y-4 -mt-2">
          <h3 className="lg:text-xl text-slate-600 font-bold text-center lg:text-right">Knowledge is Power</h3>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Every project presents a unique puzzle to solve, a chance to expand your knowledge horizons. 
            Whether you&apos;re delving into unfamiliar territories or mastering advanced techniques, each line 
            of code is a step closer to expertise. Seize the opportunity to explore cutting-edge technologies, 
            refine your skills, and elevate your craft with every project you tackle.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            In the world of programming, knowledge-sharing is key to collective advancement.
            Every project offers a platform to mentor, guide, and inspire fellow developers. 
            Whether it&apos;s through code reviews, pair programming sessions, or open-source contributions, 
            you have the power to empower others on their coding journey. Embrace the role of a mentor 
            and watch as your insights spark innovation and foster a vibrant community of learning.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Teamwork */}
      <div className="flex flex-wrap-reverse lg:flex-nowrap items-start lg:space-x-24 mx-auto">
        <div className="flex-auto space-y-4 lg:space-y-4 -mt-2">
          <h3 className="lg:text-xl text-slate-600 font-bold text-center lg:text-left">Teamwork Makes the Dream Work</h3>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            In a collaborative environment, ideas flow freely, sparking innovation at every turn. 
            Leveraging the creativity and ingenuity of your teammates to push the boundaries of what&apos;s 
            possible, brainstorming solutions, and iterating on concepts until you&apos;ve uncovered the 
            perfect solution. With each team member contributing their unique perspective, you&apos;ll 
            unearth innovative solutions that elevate your projects to new heights.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            In the fast-paced world of software development, staying ahead of the curve is essential. 
            In a team environment, feedback is abundant, providing you with valuable insights and 
            opportunities for growth. Whether it&apos;s code reviews, peer mentoring, or knowledge-sharing 
            sessions, you&apos;ll have access to a wealth of resources to help you refine your skills, 
            expand your horizons, and become the best developer you can be.
          </p>
        </div>
        <Image
          src="/illustrations/teamwork-makes-the-dream-work.svg"
          alt="Working solo is great for some, but the real magic happens in teams."
          className="flex-none mb-16 mx-auto lg:mb-0 lg:mx-0"
          width={256}
          height={256}
          priority
        />
      </div>      
    </div>
  );
}
