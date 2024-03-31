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
      'pl-5',
      'cursor-pointer',
      'text-slate-500',
      'border-l-2',
      'border-purple-700',
      // Hover State & Transitions
      'transition-all'
    ]

    if (path === pathname) {
      classList = classList.concat([
        'text-rose-500',
        'border-rose-500',
        'hover:border-l-8',
        'font-semibold',
        'border-l-8',
      ])
    } else {
      classList = classList.concat([
        'hover:pl-5',
        'hover:text-slate-800',
        'hover:border-l-8',
        'hover:border-rose-500',
        'hover:font-semibold',
      ])
    }

    return classList.join(' ')
  }

  return (
    <div className="flex flex-col space-y-8 text-slate-500 fixed top-24">
      {/* Profile Image */}
      <Image
        src="/profile-picture.jpeg"
        alt="Ryan and Ollie on the beach"
        className="rounded-lg"
        width={160}
        height={160}
        priority
      />
      {/* Name & Tag Line */}
      <div className="flex-col space-y-1">
        <h1 className="font-semibold text-2xl text-slate-700">Ryan Page</h1>
        <p className="font-medium text-xs">Turning coffee into code, one day at a time.</p>
      </div>
      {/* Contact Information */}
      <div className="flex-col space-y-6 text-xs">
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <MapPinIcon className="h-4 w-4 text-purple-700" />
          </div>
          <div className="flex-auto">
            <p>Dallas-Fort Worth, Texas</p>
            <p className="mt-2">Mississauga, Ontario, Canada</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <EnvelopeIcon className="h-4 w-4 text-purple-700" />
          </div>
          <div className="flex-auto">ryan@otternaut.com</div>
        </div>
        <div className="flex items-start space-x-2">
          <div className="flex-none">
            <Image
              src="/github-mark.svg"
              alt="Github"
              className="text-purple-700"
              width={16}
              height={16}
              priority
            />
          </div>
          <div className="flex-auto">
            <a 
              className="hover:text-slate-800 hover:font-semibold transition-all"
              href="https://github.com/ryanpager" 
              target="_blank"
            >
              <p>https://github.com/ryanpager</p>
            </a>
            <a
              className="hover:text-slate-800 hover:font-semibold transition-all"
              href="https://github.com/otternaut-labs"
              target="_blank"
            >
              <p className="mt-2">https://github.com/otternaut-labs</p>
            </a>
          </div>
        </div>
        {/* Anchors & Links */}
        <div className="flex-col space-y-4 pt-4">
          <Link className={getNavigationClasses(URL.AboutMe)} href={URL.AboutMe}>
            <p>Foreword</p>
          </Link>
          <Link className={getNavigationClasses(URL.Projects)} href={URL.Projects}>
            <p>Current Projects</p>
          </Link>
          <Link className={getNavigationClasses(URL.Principles)} href={URL.Principles}>
            <p>Development Principles</p>
          </Link>
          <Link className={getNavigationClasses(URL.Proficiencies)} href={URL.Proficiencies}>
            <p>Skills & Proficiencies</p>
          </Link>
          <Link className={getNavigationClasses(URL.Publications)} href={URL.Publications}>
            <p>Publications</p>
          </Link>
          <Link className={getNavigationClasses(URL.CaseStudies)} href={URL.CaseStudies}>
            <p>Case Studies</p>
          </Link>
          <div className="pl-6 flex-col space-y-4">
            <Link className={getNavigationClasses(CaseStudyURL.TextShadow)} href={CaseStudyURL.TextShadow}>
              <p>TailwindCSS Text Shadow</p>
            </Link>
            <Link className={getNavigationClasses(CaseStudyURL.RuntimeBranding)} href={CaseStudyURL.RuntimeBranding}>
              <p>AngularJS Realtime Branding</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
