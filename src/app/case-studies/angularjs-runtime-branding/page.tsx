import type { Metadata } from "next";
import Link from "next/link";
// components
import CodeBlock from '@/components/CodeBlock';
// fixtures
import { configurationCode } from '@/fixtures/runtime-branding/configuration'
import { angularModuleCode } from '@/fixtures/runtime-branding/angular-module'
import { usageCode } from '@/fixtures/runtime-branding/usage'
import { customComponentsCode } from '@/fixtures/runtime-branding/custom-components'

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Case Study · Angular Runtime Branding",
  description: "Branding for custom applications at runtime using AngularJS",
};

export default function CaseStudy() {
  return (
    <div className="flex-col space-y-8 lg:space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-2xl lg:text-4xl text-slate-800 font-bold">
          AngularJS Runtime Branding
        </h1>
        <p className="mx-auto text-sm lg:text-lg font-semibold text-slate-500 max-w-prose text-center leading-6 lg:leading-8 mt-4">
          Fun with AngularJS, ngMaterial, and Ionic
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Foreword */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Foreword</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Branding is one of the more important aspects of business to business application development. In specific,
          nothing is more powerful then walking into a business meeting with a client whom you are trying to sell
          you application to; then showing them a completely redesigned application -- specifically the way
          they would want it to look (their assets, logos, color pallete, etc). Whether its a mobile app 
          (iOS, Android, whatever), or desktop application -- personalizing an application can make the difference 
          between landing a deal versus having the client walk out the door. It makes it "their" experience 
          rather than your own.
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          While branding isn't necessarily used and/or useful for every application -- I believe a great 
          deal of applications can benefit from basic branding. After all, "branding" is just another way 
          of saying "personalization"...and who doesn't like to personalize an application to their tastes. 
          That being said -- with branding an application comes architectural challenges -- however, with 
          the right tools its as simple as 1...2...waffle.
        </p>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Some thoughts and a quick disclaimer,
        </p>
        <ol className="text-sm text-slate-500 text-justify list-decimal pl-8 space-y-4 leading-6 lg:leading-8">
          <li>
            This may not be the best way of doing things. It is more of an open discussion in 
            terms of the best way to brand an application. The one thing I do know -- this works....
            and it works REALLY well. I use it for a couple of production applications with Ionic 
            builds and it is lightning fast to change out an applications branding on the fly.
          </li>
          <li>
            Loading in a config through ajax is tricky since you cannot put in the $http service 
            (or any service) in the .config portion of the angular application. If someone knows a 
            way around this im all ears.
          </li>
          <li>
            Use this example at your own risk -- it is a good template, but you should be willing to 
            spend some time and use this as a "concept" rather than the defacto way of doing 
            things for your own application.
          </li>
          <li>
            This whole concept ONLY works with ngMaterial due to the way md-theme is implemented. 
            If you want to roll your own, you probably will have to create a set of 100% custom elements, 
            or roll your own themeing into other frameworks (bootstrap, ionic whatever)
          </li>
        </ol>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Setup */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Setting Everything Up</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          This article is going to use some tools in specific in order to accomplish the 
          branding goals. This article only focuses on the use of three tools to accomplish 
          branding in a very simple, logical way. Im sure there are a ton of different 
          tools / mechanisms to brand an application -- but I find this the easiest 
          one i've seen so far.
        </p>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="flex-col text-sm text-center">
            <p className="font-semibold text-slate-600">AngularJS</p>
            <Link
              className="text-xs text-slate-400 hover:font-semibold hover:text-purple-700 transition-all"
              href="https://angularjs.org/" 
              target="_blank">
              https://angularjs.org/
            </Link>
          </div>
          <div className="flex-col text-sm text-center">
            <p className="font-semibold text-slate-600">ngMaterial</p>
            <Link
              className="text-xs text-slate-400 hover:font-semibold hover:text-purple-700 transition-all"
              href="https://angularjs.org/" 
              target="_blank">
              https://material.angularjs.org/
            </Link>
          </div>
          <div className="flex-col text-sm text-center">
            <p className="font-semibold text-slate-600">Ionic Framework</p>
            <Link
              className="text-xs text-slate-400 hover:font-semibold hover:text-purple-700 transition-all"
              href="https://angularjs.org/" 
              target="_blank">
              http://ionicframework.com/
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Diving In */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Diving In</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          The basis for running an application in angular through a branding configuration is 
          simple and follows only a few steps,
        </p>
        <ol className="text-sm text-slate-500 text-justify list-decimal pl-8 space-y-4 leading-6 lg:leading-8">
          <li>
            Inherit a data structure which is parsible by the application (most likely JSON), 
            and expose this to the different parts of the application in order to use it throughout.
          </li>
          <li>
            Use the md-theme property in ngMaterial to manipulate the branding of the different
            components of the application
          </li>
          <li>
            Use the md-theme attribute on different custom elements to implement personalized branding
          </li>
        </ol>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Seems pretty simple & logical right? So what the heck does this look like?
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Code */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Example Code</h2>
        <CodeBlock code={configurationCode} language="javascript" />
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          Pretty simple, eh? Nothing too special...just a static file which can be shared/injected 
          into the application space. Now how does this get exposed to the AngularJS application, 
          and furthermore how does the application ingest the global object and configure the 
          application accordingly?
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Code */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Implementation Code</h2>
        <CodeBlock code={angularModuleCode} language="javascript" />
      </div>

      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          So the above pretty much sums up everything you need in order to brand an 
          application. Not so difficult right? Theres a couple of gotchas here 
          that I will need to explain --
        </p>
        <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
          <li>
            You will notice that I am using 4 colors (primary, secondary, success, failure). 
            This can be extended to however many you want. It does not matter. 10....15....9999999999, 
            pick your poison. The only catch is that they will need unique names so you can 
            reference them in the html.
          </li>
          <li>
            For each palette color I am generating the hues & accents. This is a huge timesaver. 
            You can easily see how you could set your own through the config, but I am lazy and want 
            to just figure it out automagically. Hence, the lighten & darken utility functions 
            are put to major use.
          </li>
          <li>
            Configuration does not have to be done through a global variable. This is just the 
            simplest example -- you will need to figure out whats best for your 
            application (regardless the implementation is still the same).
          </li>
        </ol>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          So with that all said and done, what do we have?
        </p>
        <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
          <li>A config driven application</li>
          <li>A generic branding palette that can be expanded upon</li>
          <li>A branding variable exposed to all views through the $rootScope</li>
        </ol>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Code */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Usage</h2>
        <CodeBlock code={usageCode} language="html" />
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - Custom Elements */}
      <div className="text-center space-y-4 lg:space-y-8 mx-auto">
        <h2 className="lg:text-xl text-slate-600 font-bold text-center">Extending for Custom Components</h2>
        <p className="text-sm text-slate-500 text-justify leading-6 lg:leading-8">
          There are various ways to extend the ngMaterial "mindset" into our own application -- 
          and one of them is through the use of custom directives. The idea here is that we 
          create our own custom directives for whatever elements we want to "brand". 
          For example, here is a custom text element (wraps a p tag):
        </p>
        <CodeBlock code={customComponentsCode} language="javascript" />
      </div>
    </div>
  );
}
