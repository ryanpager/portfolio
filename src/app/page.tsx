import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page",
  description: "A little bit of madness, a lot of coffee and a whole lot of fun.",
};

export default function Home() {
  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-4xl text-slate-800 font-bold">Hi, I'm Ryan.</h1>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - About Me */}
      {/* <div className="flex-col mx-auto space-y-4">
        <h2 className="text-xl text-slate-600 font-bold text-center">About Me</h2>
        <p className="text-justify text-sm text-slate-500 leading-8">
          Back in 2000 I migrated south with my family from Mississauga, Ontario to
          Dallas, Texas. While it was a significant change (and a life-changing) one,
          being able to
        </p>
      </div> */}
    </div>
  );
}
