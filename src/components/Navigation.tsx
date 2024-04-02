'use client';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
// icons
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

// Since it would be terrible to pass around strings for
// things that could change, we want to go ahead and map
// out the navigation pages so that we can reference them
// as expected.
enum URL {
  AboutMe = '/',
  CaseStudies = '/case-studies',
  Principles = '/principles',
  Proficiencies = '/proficiencies',
  Projects = '/projects',
  Publications = '/publications'
}

enum CaseStudyURL {
  TextShadow = '/case-studies/implementing-tailwindcss-text-shadow',
  RuntimeBranding = '/case-studies/angularjs-runtime-branding'
}

export default function Navigation() {
  // Use the pathname provider for setting state on navigation.
  const pathname = usePathname()

  /**
   * Return the current navigation state classes based on which
   * path is active, and which ones are not.
   *
   * @param 
   * @returns classList - a list of classes representing the current
   *                      state of the navigation.
   */
  function getNavigationClasses(path: URL | CaseStudyURL): string {
    let classList: Array<string> = [
      'flex',
      'space-x-2',
      'py-1',
      'pl-8',
      'cursor-pointer',
      'text-slate-500',
      'text-xs',
      'lg:text-sm',
      'border-l-2',
      'border-purple-700',
      // Hover State & Transitions
      'transition-all'
    ]

    if (path === pathname) {
      classList = classList.concat([
        'text-slate-800',
        'border-rose-500',
        'hover:border-l-8',
        'font-semibold',
        'border-l-8',
      ])
    } else {
      classList = classList.concat([
        'hover:pl-8',
        'hover:text-slate-800',
        'hover:border-l-8',
        'hover:border-rose-500',
        'hover:font-semibold',
      ])
    }

    return classList.join(' ')
  }

  return (
    <div className="flex flex-col space-y-2 lg:space-y-8 text-slate-500 lg:fixed lg:top-24">
      {/* Profile Image */}
      <img
        src="/profile-picture.jpeg"
        alt="Ryan and Ollie on the beach"
        className="w-24 h-24 lg:w-48 lg:h-48 rounded-lg shadow-lg shadow-slate-100"
      />
      {/* Name & Tag Line */}
      <div className="flex-col space-y-1 lg:mt-0">
        <h1 className="font-semibold text-lg lg:text-2xl text-slate-800">Ryan Page</h1>
        <p className="font-medium text-xs lg:text-sm text-slate-500">Turning coffee into code, one day at a time.</p>
      </div>
      {/* Contact Information */}
      <div className="flex-col space-y-4 text-xs lg:text-sm pt-4 lg:pt-0 text-slate-500">
        <div className="flex items-start space-x-4">
          <div className="flex-none">
            <MapPinIcon className="h-5 w-5 text-purple-700" />
          </div>
          <div className="flex-auto">
            <p>Dallas-Fort Worth, Texas</p>
            <p className="mt-2">Mississauga, Ontario, Canada</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-none">
            <EnvelopeIcon className="h-5 w-5 text-purple-700" />
          </div>
          <div className="flex-auto">
            <a 
              className="hover:text-slate-800 hover:font-semibold transition-all"
              href="mailto:ryan@otternaut.com" 
            >
              ryan@otternaut.com
            </a>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-none">
            <Image
              src="/github-mark.svg"
              alt="Github"
              className="text-purple-700"
              width={20}
              height={20}
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <a 
              className="hover:text-slate-800 hover:font-semibold transition-all"
              href="https://github.com/ryanpager" 
              target="_blank"
            >
              https://github.com/ryanpager
            </a>
            <a
              className="hover:text-slate-800 hover:font-semibold transition-all"
              href="https://github.com/otternaut-labs"
              target="_blank"
            >
              https://github.com/otternaut-labs
            </a>
          </div>
        </div>
        {/* Anchors & Links */}
        <div className="flex-col space-y-4 pt-4">
          <Link className={getNavigationClasses(URL.AboutMe)} href={URL.AboutMe}>
            Home
          </Link>
          <Link className={getNavigationClasses(URL.Projects)} href={URL.Projects}>
            Projects
          </Link>
          <Link className={getNavigationClasses(URL.Principles)} href={URL.Principles}>
            Development Principles
          </Link>
          <Link className={getNavigationClasses(URL.Proficiencies)} href={URL.Proficiencies}>
            Skills & Proficiencies
          </Link>
          <p className="pl-9 text-slate-400">Case Studies</p>
          <div className="flex-col space-y-4">
            <Link className={getNavigationClasses(CaseStudyURL.TextShadow)} href={CaseStudyURL.TextShadow}>
              TailwindCSS Text Shadow
            </Link>
            <Link className={getNavigationClasses(CaseStudyURL.RuntimeBranding)} href={CaseStudyURL.RuntimeBranding}>
              AngularJS Runtime Branding
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
