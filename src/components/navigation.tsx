import Image from "next/image";
import { 
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  CodeBracketIcon
} from '@heroicons/react/24/solid'

export default function Navigation() {
  // Set the default styles for the navigation options
  // in the sidebar. This will apply transitions and more.
  let navigation = {
    className: [
      'flex',
      'space-x-2',
      'py-1',
      'pl-5',
      'border-l-2',
      'border-indigo-500',
      'cursor-pointer',
      'text-slate-500',
      // transitions
      'hover:pl-6',
      'hover:text-slate-800',
      'hover:border-l-8',
      'hover:border-pink-500',
      'hover:font-semibold',
      'transition-all',
    ].join(' ')
  }

  return (
    <div className="flex flex-col space-y-8 text-slate-500">
      {/* Profile Image */}
      <Image
        src="/profile-picture.jpeg"
        alt="Ryan and Ollie on the beach"
        className="rounded-xl shadow-2xl shadow-slate-500/50"
        width={240}
        height={240}
        priority
      />
      {/* Name & Tag Line */}
      <div className="flex-col space-y-1">
        <h1 className="font-semibold text-2xl text-slate-700">Ryan Page</h1>
        <p className="font-medium text-xs">Turning coffee into code, one day at a time.</p>
      </div>
      {/* Contact Information */}
      <div className="flex-col space-y-4 text-xs">
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <MapPinIcon className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="flex-auto">
            <p>Dallas-Fort Worth, Texas</p>
            <p className="mt-2">Mississauga, Ontario, Canada</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <EnvelopeIcon className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="flex-auto">ryan@otternaut.com</div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <PhoneIcon className="h-4 w-4 text-indigo-500" />
          </div>
          <div className="flex-auto">(469) 404-7483</div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <Image
              src="/github-mark.svg"
              alt="Github"
              className="text-indigo-500"
              width={16}
              height={16}
              priority
            />
          </div>
          <div className="flex-auto">
            <a 
              className="hover:text-indigo-500 font-semibold transition-all"
              href="https://github.com/ryanpager" 
              target="_blank"
            >
              <p>https://github.com/ryanpager</p>
            </a>
            <a
              className="hover:text-indigo-500 font-semibold transition-all"
              href="https://github.com/otternaut-labs"
              target="_blank"
            >
              <p className="mt-2">https://github.com/otternaut-labs</p>
            </a>
          </div>
        </div>
        {/* Anchors & Links */}
        <div className="flex-col space-y-4 pt-4">
          <div className={navigation.className}>
            <p>My Story</p>
          </div>
          <div className={navigation.className}>
            <p>My Development Philosophy</p>
          </div>
          <div className={navigation.className}>
            <p>What I'm Up Currently To</p>
          </div>
          <div className={navigation.className}>
            <p>Skills & Proficiencies</p>
          </div>
          <div className={navigation.className}>
            <p>Publications</p>
          </div>
          <div className={navigation.className}>
            <p>Case Studies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
