import type { Metadata } from "next";
import Link from 'next/link';
// components
import CodeBlock from '@/components/CodeBlock';
// fixtures
import { idealClassCode } from '@/fixtures/text-shadow-implementation/ideal-classes';
import { solutionOneCode } from '@/fixtures/text-shadow-implementation/solution-one';
import { solutionTwoCode } from '@/fixtures/text-shadow-implementation/solution-two';
import { usageExampleCode } from '@/fixtures/text-shadow-implementation/usage-example';

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Case Study · Implementing Text Shadow",
  description: "A brief investigation and examination on text shadow implementation",
};

export default function CaseStudy() {
  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-4xl text-slate-800 font-bold">
          Exploring Text Shadow Implentation in TailwindCSS
        </h1>
        <p className="mx-auto text-lg font-semibold text-slate-500 max-w-prose text-center leading-6 lg:leading-8 mt-4">
          A little bit of magic, and a whole lot of hope
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Foreword */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">Foreword</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          What seem's to be one of the most requested features in TailwindCSS, but also one of
          the trickiest is the implementation of the text-shadow property in css. Due to the
          nature of the browser compiler, this property is rather difficult to implement in a way
          that is consistent with the rest of the compilers with regards to TailwindCSS. 
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Throughout this case study, we will explore the following,
        </p>
        <ol className="text-sm text-slate-500 text-justify list-decimal pl-8 space-y-2 leading-6 lg:leading-8">
          <li>The common problems with implementation (compiler, browser, etc)</li>
          <li>Possible solutions, implementing the TailwindCSS architecture</li>
          <li>Possible implementations for code structure (classes)</li>
        </ol>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Problems */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">The Root Problem & Considerations</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          The css property text-shaddow is inherently more difficult to implemenant 
          than its cousin box-shadow due to the underlying syntax in the css engine. All
          of the various properties fall under one ("text-shadow: ...") rather than having
          individual properties for each style.
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Ideally, we would want to follow the same patterns as the current box-shadow
          implementation in tailwind css (<Link href="https://tailwindcss.com/docs/box-shadow" target="_blank">See Here</Link>).
          Given this, an example class list would be something like,
        </p>
        <CodeBlock code={idealClassCode} language="javascript" />
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Additionally with respect to the above example, it is likely a prudent idea
          to go ahead and limit the text shadow property to those which can use it. This will
          prevent unnecessary overhead, and will improve performance.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Solution 1 - Bloat */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">Solution One: Bloat Compiled CSS and Cry</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Solution one is <b>absolutely not acceptable.</b> It will <b>not</b> perform well, compile times
          will be extremely slow, and the css performance will be terrible. Additionally, this is extremely
          verbose and not likely very user friendly. The reason I am including this is so that we can
          understand the severity and difficulty of implementing this feature.
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          All of this aside; this is a solution that <b>will</b> work; however, it may cause a slight
          anuerysm, or a severe drinking problem depending on who you talk to. Its better just move on to
          solution two.
        </p>
        <CodeBlock code={solutionOneCode} language="javascript" />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Solution 2 - JIT */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">Solution 2: JIT Preprocessing to the Rescue</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Using a preprocessor for Just-In-Time compiling (JIT) seems to be an extremely efficient solution
          to this problem. We would be able to extrapolate classes that are actually in use, and then
          go ahead and craft depending on the sequence of instructions. This would be performant,
          would not bloat the compiled code with unused classes, and would be much more user friendly.
          Additionally, it allows us to implement the same classes as the "box-shadow" implementation.
        </p>
        <CodeBlock code={solutionTwoCode} language="typescript" />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Possible Implementation */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">Usage Examples</h2>
        <CodeBlock code={usageExampleCode} language="typescript" />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Solution 2 - JIT */}
      <div className="text-center space-y-8 mx-auto">
        <h2 className="text-xl text-slate-600 font-bold text-center">Final Thoughts</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          The purpose of this case study was to determine whether or not it is possible
          to implement the text shadow property gracefully (hint: it is) but there is still a ton
          of work and optimization that could be done to make it much faster, and must more
          user friendly. JIT Preprocessing is likely a great first step in getting the job done 
          elegantly -- and can be built upon for backwards compatability, and other necessary requirements.
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Additionally, I believe that example 2 can be further simplified by isolating the "shadow" classes
          based on different types of selectors. For example, if "shadow" exists on a p element, it is
          inferred that it is a text shadow; if on a div element, then its a box shadow. Whether this
          is a fair assumption or not depends on the compiler code.
        </p>
      </div>
    </div>
  );
}
