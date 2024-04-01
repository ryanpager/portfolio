export default function Home() {
  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-4xl text-slate-800 font-bold">Hi, I'm Ryan.</h1>
        <p className="mx-auto text-sm text-slate-500 max-w-prose text-center leading-8 mt-4">
          Listed are all of the projects I have personally written, contributed to, advised on, or 
          have accomplished in the past few years. While the projects are all across the board in
          terms of technologies and scope; I am proud of the accomplished work. Some of these projects
          are current, and others are not. They are listed in terms of most recent to least recent.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - About Me */}
      <div className="flex-col max-w-3xl mx-auto space-y-4">
        <h2 className="text-xl text-slate-600 font-bold text-center">About Me</h2>
        <p className="text-justify text-sm text-slate-500 leading-8">
          Back in 2000 I migrated south with my family from Mississauga, Ontario to
          Dallas, Texas. While it was a significant change (and a life-changing) one,
          being able to
        </p>
      </div>
    </div>
  );
}
