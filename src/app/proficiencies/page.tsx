import type { Metadata } from "next";
// components
import ProficiencyCard from '@/components/ProficiencyCard';
// fixtures
import * as ProficienciesFixture from "@/fixtures/proficiencies";

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Skills · Proficiencies",
  description: "All of the tooling and knowledge I've learned over the years.",
};

type Proficiency = {
  type: string;
  level: number;
}

export default function Proficiencies() {
  return (
    <div className="flex-col space-y-16">
      <img
        src="/illustrations/blast-off.svg"
        alt="Blast off with Otternaut."
        className="mx-auto w-3/4 lg:w-1/2"
      />

      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-2xl lg:text-4xl text-slate-900 font-bold">Skills & Proficiencies</h1>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          At this point in my career, I&apos;ve come to learn that its impossible to solve all
          problems with just one language or tool &mdash; and because of this, I have acquired
          a ton of experience across the board in numerous languages, technologies and tooling.
        </p>
        <p className="mx-auto text-sm text-slate-600 max-w-prose text-center leading-6 lg:leading-8 mt-4">
          All listed skills & proficiencies are rated on a scale of 1 to 10.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Languages - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="text-xl text-slate-700 font-bold text-center">Languages</h2>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          Languages that I have experience with in all types of applications &mdash; 
          mobile, web and desktop.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {ProficienciesFixture.languages.map((proficiency: Proficiency) => {
          return <ProficiencyCard key={proficiency.type} icon={proficiency.type} skillLevel={proficiency.level} />
        })}
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Cloud & DevOp - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="lg:text-xl text-slate-700 font-bold text-center">Cloud & DevOps</h2>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-centerr leading-6 lg:leading-8 mt-4">
          Cloud Hosting providers that I have used extensively, as well as dev op tooling that
          is used on a very frequent basis among many projects.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {ProficienciesFixture.devops.map((proficiency: Proficiency) => {
          return <ProficiencyCard key={proficiency.type} icon={proficiency.type} skillLevel={proficiency.level} />
        })}
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Languages - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="lg:text-xl text-slate-700 font-bold text-center">Data Storage</h2>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          Databases and in-memory stores that I have used extensively to provide better
          performance for high intensity applications.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {ProficienciesFixture.databases.map((proficiency: Proficiency) => {
          return <ProficiencyCard key={proficiency.type} icon={proficiency.type} skillLevel={proficiency.level} />
        })}
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Frameworks - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="lg:text-xl text-slate-700 font-bold text-center">Frameworks</h2>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          I believe strongly in understanding and leveraging tools that are available to
          most developers out of the box. These are some of the frameworks that I use on a daily
          basis.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {ProficienciesFixture.frameworks.map((proficiency: Proficiency) => {
          return <ProficiencyCard key={proficiency.type} icon={proficiency.type} skillLevel={proficiency.level} />
        })}
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Project Management - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="lg:text-xl text-slate-700 font-bold text-center">Project Management & Tools</h2>
        <p className="mx-auto text-sm text-slate-600 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          The following are the tools that I use to stay organized, and manage
          projects from inception to completion. Different projects call for different
          tools &mdash; so I go with what fits best.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mx-auto">
        {ProficienciesFixture.projectManagement.map((proficiency: Proficiency) => {
          return <ProficiencyCard key={proficiency.type} icon={proficiency.type} skillLevel={proficiency.level} />
        })}
      </div>
    </div>
  );
}
          