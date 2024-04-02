import type { Metadata } from "next";
import Link from "next/link";
import { StarIcon } from '@heroicons/react/24/solid';

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Portfolio",
  description: "A little bit of madness, a lot of coffee and a whole lot of fun.",
};

export default function Home() {
  const date = new Date();
  const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-4xl text-slate-800 font-bold">Hi, I'm Ryan.</h1>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Tailwind Callout */}
      <div className="rounded-lg border border-slate-200 p-6 lg:p-8 shadow-lg shadow-slate-100 flex items-start lg:space-x-8">
        <div className="text-4xl flex-none hidden lg:block">👋</div>
        <div className="flex-auto flex-col mx-auto space-y-4">
          <div className="flex items-center">
            <h5 className="flex-auto text-sm lg:text-lg text-slate-600 font-bold">Adam, Robin, and the Tailwind crew,</h5>
            <p className="flex-none text-right text-sm text-slate-400 font-bold hidden lg:block">
              {formattedDate}
            </p>
          </div>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            If you're reading this, I appreciate the consideration for both positions currently
            open &mdash; Design Engineer & Staff Engineer. I applied to both positions as I feel
            I have the necessary skills and proficiencies to contribute immediately and make a lasting impact
            for many years to come. Additionally, Tailwind's team and I share many of the common principles
            of development, so I feel that I would be a great fit...especially since were all obsessed with
            quality software.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            This application was originally written to apply for these positions, but has turned into a 
            complete portfolio. I hope you have the opportunity to poke around. This site was written 
            in Next.JS, React, Tailwind and hosted through AWS Amplify.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            All of the information that was requested as part of the application can be found in this
            site (and a whole lot more). Additionally, I took the initiative to write a small case
            study on the exploration and implementation of the text-shadow property. 
            <Link className="text-purple-700 font-semibold" href="/case-studies/implementing-tailwindcss-text-shadow"> Check it out.</Link>
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            If you have any questions, feedback, or just want to chat about cool stuff &mdash; 
            shoot me an email and I will get back with you as quickly as possible. I look forward
            to hearing from y'all and appreciate y'all!
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - About Me */}
      <div className="flex-col mx-auto space-y-4">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">A Little Bit About Me</h2>
        <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
          Back in 2000 I migrated south with my family from Mississauga, Ontario to
          Dallas, Texas. Luckily, I am able to go back quite frequently and visit family and
          friends. The transition for me was a little weird; using the word "y'all" never felt
          right &mdash; especially when mixing it with "eh". The combination makes for fun discussions
          wherever I am.
        </p>
        <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
          Besides being a parent of two kids, I have quite a few hobbies,
        </p>
        <ul className="text-sm text-slate-500 text-justify list-disc lg:pl-8 space-y-4 leading-6 lg:leading-8">
          <li>
            I am an avid learner, writer and teacher. Reading about languages or history (specifically war
            history) is a constant endeavour and helps me understand more about the world. Teaching and writing
            comes extremely naturally due to my professional environment. Helping teams understand complex
            problems and writing documentation so that no one forgets (a.k.a new parent brain) is my bread
            and butter; and is extremely fulfilling.
          </li>
          <li>
            I love music...and all kinds of music. While I grew up listening to country music
            (yes, Canada does in fact have country music); I have branched out and gone to the dark side...
            or at least the metal side. That doesn't stop me from appreciating all genres (well, maybe not
            experimental jazz), and appreciating the musicianship throughout. You can frequently find me
            playing guitar or bass; and singing terribly making the dog howl.
          </li>
          <li>
            I love sports...like a lot. Mostly hockey, baseball and golf. Due to injuries
            playing D2 College Hockey in Texas, I have officially retired on LTIR. Nevertheless,
            I applied my skills to golf, and have started to compete at a high level. Golf allows
            me to think through the world differently through math, physics and creativity &mdash;
            you can never be perfect...but that won't stop me from trying.
          </li>
          <li>
            I love cooking...specifically bbq. Its a way to fulfill the obsession of perfection, but also
            a way to serve the community. I frequently cater events (free of course) and provide food for
            anyone and everyone who asks. I currently have two 60 gallon "stick-burning" offset smokers that
            I use on a frequent basis to make anything between smoked cheeses to 20-lb briskets.
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-purple-800 to-purple-600 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - About Otternaut */}
      <div className="flex-col mx-auto space-y-4">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">What is Otternaut?</h2>
        <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
          Otternaut was formed in 2020 due to needing better insurance and resources
          for our NICU son Ollie whom was born at 24 weeks. 4 years later he is thriving,
          but this changed forced me to go out on my own and establish a business for myself; and thus,
          Otternaut was established. The name Otternaut sounds weird, but its extremely simple;
          my son's favourite animal is an otter, and hes facinated with space...hence "Otternaut".
          For the past 4 years I have figured out that life is way better as a contractor &mdash;
          both for myself, and my family. The opportunity to selectively pick projects has allowed
          my skillset to grow and allowed for personal growth as a software developer.
        </p>
        <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
          Otternaut specializes in end-to-end software development on highly diverse projects and 
          industries including MLM, Cryptocurrency, Telecommunications, Mining, Service Integrations and more. 
          We are constantly providing top tier experience and expertise to solve our clients 
          current problems with regards to development, infrastructure and product management. As 
          our company grows, we will continue to provide top tier solutions as to improve our clients 
          products, development teams; as well as reduce their technology spend, and infrastructure costs.
        </p>
      </div>
    </div>
  );
}
