import Image from "next/image";

export default function Principles() {
  return (
    <div className="flex-col space-y-24">
      {/* Section - Teaching & Learning */}
      <div className="flex items-start space-x-16">
        <Image
          src="/illustrations/teaching-and-learning.svg"
          alt="Everything is either a teachable moment, or a chance to gain knowledge."
          className="flex-none"
          width={320}
          height={320}
          priority
        />
        <div className="flex-auto space-y-8 -mt-2">
          <h3 className="font-semibold text-2xl text-slate-700">Knowledge is Power</h3>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            Every project presents a unique puzzle to solve, a chance to expand your knowledge horizons. 
            Whether you're delving into unfamiliar territories or mastering advanced techniques, each line 
            of code is a step closer to expertise. Seize the opportunity to explore cutting-edge technologies, 
            refine your skills, and elevate your craft with every project you tackle.
          </p>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            In the world of programming, knowledge-sharing is key to collective advancement.
            Every project offers a platform to mentor, guide, and inspire fellow developers. 
            Whether it's through code reviews, pair programming sessions, or open-source contributions, 
            you have the power to empower others on their coding journey. Embrace the role of a mentor 
            and watch as your insights spark innovation and foster a vibrant community of learning.
          </p>
        </div>
      </div>

      {/* Section - Quality Obsessed */}
      <div className="flex items-start space-x-16">
        <div className="flex-auto space-y-8 -mt-2">
          <h3 className="font-semibold text-2xl text-slate-700">Obsessed with Quality to a Fault</h3>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            In the realm of software architecture, mediocrity is not an option. Embracing
            a mindset of relentless pursuit of perfection, where every architectural decision
            is meticulously crafted to withstand the test of time. From microservices to monoliths,
            my obsession with architectural excellence will lay the foundation for robust,
            scalable, and resilient systems that stand the test of time.
          </p>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            Design is not just about aesthetics—it's about creating intuitive, elegant solutions that 
            delight users and stand the test of time. I manifest my obsession with design perfection 
            into every pixel, every interaction, and every user journey. With an unwavering focus 
            on user experience and interface design, I love to elevate creations from mere 
            applications to works of art that inspire and captivate.
          </p>
        </div>
        <Image
          src="/illustrations/quality-obsessed.svg"
          alt="Obsessed with quality to a fault."
          className="flex-none"
          width={320}
          height={320}
          priority
        />
      </div>

      {/* Section - Teamwork */}
      <div className="flex items-start space-x-16">
        <Image
          src="/illustrations/teamwork-makes-the-dream-work.svg"
          alt="Working solo is great for some, but the real magic happens in teams."
          className="flex-none"
          width={320}
          height={320}
          priority
        />
        <div className="flex-auto space-y-8 -mt-2">
          <h3 className="font-semibold text-2xl text-slate-700">Teamwork Makes the Dream Work</h3>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            In a collaborative environment, ideas flow freely, sparking innovation at every turn. 
            Leveraging the creativity and ingenuity of your teammates to push the boundaries of what's 
            possible, brainstorming solutions, and iterating on concepts until you've uncovered the 
            perfect solution. With each team member contributing their unique perspective, you'll 
            unearth innovative solutions that elevate your projects to new heights.
          </p>
          <p className="text-justify text-sm text-slate-600 font-light leading-8">
            In the fast-paced world of software development, staying ahead of the curve is essential. 
            In a team environment, feedback is abundant, providing you with valuable insights and 
            opportunities for growth. Whether it's code reviews, peer mentoring, or knowledge-sharing 
            sessions, you'll have access to a wealth of resources to help you refine your skills, 
            expand your horizons, and become the best developer you can be.
          </p>
        </div>
      </div>
    </div>
  );
}
