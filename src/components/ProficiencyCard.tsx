import Image from "next/image";
// components
import ProgressBar from "@/components/ProgressBar";

export default function ProficiencyCard({
  // children,
  icon,
  skillLevel
}: Readonly<{
  // children: React.ReactNode;
  icon: string;
  skillLevel: number;
}>) {
  // Since there can be multiword icons, we want to slugify the
  // icon so that we can apply it consistently.
  let iconSlug = icon.toLowerCase().replaceAll(' ', '')
  let iconType = '-original'
  if (['rails', 'amazonwebservices'].includes(iconSlug)) {
    iconType = iconType + '-wordmark'
  } else if (['django', 'circleci', 'illustrator'].includes(iconSlug)) {
    iconType = '-plain'
  }

  return (
    <div className="rounded-lg border border-slate-200 p-4 shadow-lg shadow-slate-100">
      <div className="flex space-x-4">
        <Image
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconSlug}/${iconSlug}${iconType}.svg`}
          alt={icon}
          className="flex-none"
          width={40}
          height={40}
          priority
        />
        <div className="flex-auto">
          <h5 className="text-slate-600 text-semibold capitalize">{icon}</h5>
          <div className="mt-2">
            <ProgressBar value={skillLevel} />
          </div>
        </div>
      </div>
      {/* {children} */}
    </div>
  )
}