import Image from "next/image";
// components
import ProficiencyCard from '@/components/ProficiencyCard';
import ProgressBar from "@/components/ProgressBar";

export default function Proficiencies() {
  return (
    <div className="flex-col space-y-28">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-4xl text-slate-800 font-bold">Skills & Proficiencies</h1>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          At this point in my career, I've come to learn that its impossible to solve all
          problems with just one language or tool &mdash; and because of this, I have acquired
          a ton of experience across the board in numerous languages, technologies and tooling.
        </p>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          All listed skills & proficiencies are rated on a scale of 1 to 10.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Languages - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="text-2xl text-slate-600 font-bold">Languages</h2>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          Languages that I have experience with in all types of applications &mdash; 
          mobile, web and desktop.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ProficiencyCard icon="elixir" skillLevel={9} />
        <ProficiencyCard icon="rust" skillLevel={6} />
        <ProficiencyCard icon="go" skillLevel={6} />

        <ProficiencyCard icon="python" skillLevel={7} />
        <ProficiencyCard icon="ruby" skillLevel={7} />
        <ProficiencyCard icon="php" skillLevel={8} />

        <ProficiencyCard icon="nodejs" skillLevel={9} />
        <ProficiencyCard icon="csharp" skillLevel={6} />
        <ProficiencyCard icon="c" skillLevel={6} />
        
        <ProficiencyCard icon="typescript" skillLevel={9} />
        <ProficiencyCard icon="html5" skillLevel={10} />
        <ProficiencyCard icon="css3" skillLevel={10} />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Cloud & DevOp - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="text-2xl text-slate-600 font-bold">Cloud & DevOps</h2>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          Cloud Hosting providers that I have used extensively, as well as dev op tooling that
          is used on a very frequent basis among many projects.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ProficiencyCard icon="amazon web services" skillLevel={6} />
        <ProficiencyCard icon="google cloud" skillLevel={6} />
        <ProficiencyCard icon="azure" skillLevel={6} />

        <ProficiencyCard icon="docker" skillLevel={6} />
        <ProficiencyCard icon="kubernetes" skillLevel={6} />
        <ProficiencyCard icon="github actions" skillLevel={6} />

        <ProficiencyCard icon="nginx" skillLevel={9} />
        <ProficiencyCard icon="apache" skillLevel={8} />
        <ProficiencyCard icon="jenkins" skillLevel={6} />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Frameworks - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="text-2xl text-slate-600 font-bold">Frameworks</h2>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          I believe strongly in understanding and leveraging tools that are available to
          most developers out of the box. These are some of the frameworks that I use on a daily
          basis.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ProficiencyCard icon="phoenix" skillLevel={10} />
        <ProficiencyCard icon="rails" skillLevel={7} />
        <ProficiencyCard icon="django" skillLevel={6} />

        <ProficiencyCard icon="angular" skillLevel={7} />
        <ProficiencyCard icon="react" skillLevel={8} />
        <ProficiencyCard icon="vuejs" skillLevel={8} />

        <ProficiencyCard icon="tailwindcss" skillLevel={10} />

        <ProficiencyCard icon="nestjs" skillLevel={6} />
        <ProficiencyCard icon="nextjs" skillLevel={6} />
        <ProficiencyCard icon="sequelize" skillLevel={6} />

        <ProficiencyCard icon="flutter" skillLevel={5} />
        <ProficiencyCard icon="xamarin" skillLevel={8} />
        <ProficiencyCard icon="ionic" skillLevel={8} />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Project Management - Proficiencies Grid */}
      <div className="text-center">
        <h2 className="text-2xl text-slate-600 font-bold">Project Management</h2>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          The following are the tools that I use to stay organized, and manage
          projects from inception to completion. Different projects call for different
          tools &mdash; so I go with what fits best.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <ProficiencyCard icon="jira" skillLevel={8} />
        <ProficiencyCard icon="trello" skillLevel={10} />
        <ProficiencyCard icon="notion" skillLevel={7} />

        <ProficiencyCard icon="figma" skillLevel={6} />
        <ProficiencyCard icon="slack" skillLevel={10} />
        <ProficiencyCard icon="discordjs" skillLevel={8} />
      </div>
    </div>
  );
}
          