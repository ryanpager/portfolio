import type { Metadata } from "next";
import Link from 'next/link';
import Image from "next/image";

// Metadata
export const metadata: Metadata = {
  title: "Ryan Page · Project History",
  description: "Current, future and past projects Ryan has worked on.",
};

export default function Projects() {
  return (
    <div className="flex-col space-y-16">
      {/* Section Header */}
      <div className="flex-col text-center">
        <h1 className="text-2xl lg:text-4xl text-slate-800 font-bold">Projects</h1>
        <p className="mx-auto text-sm text-slate-500 text-justify lg:max-w-prose lg:text-center leading-6 lg:leading-8 mt-4">
          Listed are all of the projects I have personally written, contributed to, advised on, or 
          have accomplished in the past few years. While the projects are all across the board in
          terms of technologies and scope; I am proud of the accomplished work. Some of these projects
          are current, and others are not. They are listed in terms of most recent to least recent.
        </p>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Project - Esprezzo */}
      <div className="flex flex-wrap flex flex-wrap lg:flex-nowrap items-start mx-auto text-center lg:space-x-8 lg:text-left">
        <Image
          src="/project-icons/esprezzo.png"
          alt="Go faster with Esprezzo Dispatch. Build & automate workflows, monitor smart contract & wallet activity and stream Web3 data — no code required."
          className="flex-none mb-4 mx-auto lg:mx-0"
          width={64}
          height={64}
          priority
        />
        <div className="flex-auto space-y-4 -mt-2">
          <h3 className="font-semibold lg:text-xl text-slate-600">Esprezzo</h3>
          <Link 
            className="text-xs lg:text-sm text-slate-400 transition-all hover:font-semibold hover:text-slate-800" 
            href="https://esprezzo.io/" 
            target="_blank">
            https://esprezzo.io/
          </Link>
          <div className="flex flex-wrap gap-2 pt-4 text-xs text-white font-medium tracking-wider">
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Elixir</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Rust</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">RabbitMQ</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">PostgreSQL</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Redis</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">CircleCI</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">AWS</div>
          </div>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Esprezzo is a service provider which integrates seamlessly with various blockchains and
            listens for triggered actions, events and other data. It supports real-time wallet and smart
            contract monitoring on multiple EVM networks with more coming soon. There is a two layered
            approach to this system utilizing various technologies to scale and manage large quantities
            of data in the pipeline. This pipeline can serve various dispatching integrations such as discord,
            slack, telegram, and more. More than 1MM+ events are fired monthly.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Some of my responsibilities at Esprezzo include,
          </p>
          <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
            <li>
              Implement a dynamic queue system which handles millions of messages in real-time. The
              queue system will process these messages based on certain criteria provided by the end
              user during the setup, and will perform different actions based on the associated
              integration.
            </li>
            <li>
              Implement numerous integrations (mixpanel, discord, slack, telegram ...and many more) to
              serve as pipelines for the received messages. This will allow us to "dispatch" the messages
              how the user would like.
            </li>
            <li>
              Provide a public and private Rest API for the various services, and write documentation
              regarding the endpoints through GitBook.
            </li>
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Project - QuiAri */}
      <div className="flex flex-wrap lg:flex-nowrap items-start mx-auto text-center lg:space-x-8 lg:text-left">
        <Image
          src="/project-icons/quiari.svg"
          alt="QuiAri, new wellness products, superfruits, energy supplements, weight loss products, health and wellness, number 1 superfruit."
          className="flex-none mb-12 mx-auto lg:mx-0"
          width={64}
          height={64}
          priority
        />
        <div className="flex-auto space-y-4 -mt-2">
          <h3 className="font-semibold lg:text-xl text-slate-600">QuiAri</h3>
          <Link 
            className="text-xs lg:text-sm text-slate-400 transition-all hover:font-semibold hover:text-slate-800" 
            href="https://quiari.com/" 
            target="_blank">
            https://quiari.com/
          </Link>
          <div className="flex flex-wrap gap-2 pt-4 text-xs text-white font-medium tracking-wider">
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Elixir</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Typescript</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">React</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Tailwind</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">PostgreSQL</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">RabbitMQ</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">AWS</div>
          </div>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            QuiAri is a direct-selling healthcare products company. While it may seem simple
            to create a simple e-commerce site; this project was so much more. Each order will
            provide various things including running volume in a binary tree, providing realtime
            commission payouts, bulk emails, shipping and fulfillment and more. My primary
            role was to support all of the core functionality and scale it exponentially. On any
            given day between 1,000 to 1,500 orders are placed throughout more than 200+ countries
            supported.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            The scaling challenges were an interesting hurdle as there are different requirements
            for different countries and different regulations that must be followed closely. Additionally,
            there are over 5 active payment gateway integrations, 10 3PL integrations, and numerous
            other apis that are hit (i.e. inventory services, etc). In the end, we leverages containers
            to quickly scale through different regions on AWS while providing autoscaling layers to
            handle burst loads.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Some of my responsibilities at Quiari include,
          </p>
          <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
            <li>
              Implement a dynamic queue system which handles millions of orders in real-time. The
              queue system will process these messages and route them to the correct 3PL (shipping & handling)
              provider, dispatch emails with tracking, and many other features.
            </li>
            <li>
              Design and implement a scalable architecture utilizing more than 10 regions in AWS to
              provide localized performance to the end user. The container method was used with orchestration
              and will allow for autoscaling where necessary in times of burst loads.
            </li>
            <li>
              Handle project management with regards to software development, regulation, and customer
              interaction. Since this is a global country, there are numerous occasions where I work
              with foreign companies (payment gateways) and government agencies (i.e. KOSSA) to provide
              end support for our developers and to clarify requirements.
            </li>
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Project - VRIFY */}
      <div className="flex flex-wrap lg:flex-nowrap items-start mx-auto text-center lg:space-x-8 lg:text-left">
        <Image
          src="/project-icons/vrify.svg"
          alt="Redefine your communication by turning flat, 2D stories into compelling, immersive 3D narratives with VRIFY. Engage investors with interactive 360° presentations &amp; meetings, showcasing a project&#x27;s true depth and potential."
          className="flex-none mb-12 mx-auto lg:mx-0"
          width={64}
          height={64}
          priority
        />
        <div className="flex-auto space-y-4 -mt-2">
          <h3 className="font-semibold lg:text-xl text-slate-600">VRIFY</h3>
          <Link 
            className="text-xs lg:text-sm text-slate-400 transition-all hover:font-semibold hover:text-slate-800" 
            href="https://vrify.com/" 
            target="_blank">
            https://vrify.com/
          </Link>
          <div className="flex flex-wrap gap-2 pt-4 text-xs text-white font-medium tracking-wider">
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Elixir</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Python</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">VueJS</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">TailwindCSS</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">WebGL</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">ThreeJS</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">AWS</div>
          </div>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            VRIFY is a digital platform assisting mining operations all over the world. This is
            accomplished by projecting 3D models on the web, and allowing for live presentations
            of said models with features similar to zoom (just built in). Additionally, this provides
            ways to manage the resources contained in a mine and many other things.
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Some of my responsibilities at VRIFY were,
          </p>
          <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
            <li>
              Create a websocket engine through Elixir that will serve the live meetings platform. This
              microservice must be scalable and interact with the Django Rest API, and be bullet-proof
              with next to no downtime. At this time, it supports over 1MM+ simultaneous connections and
              less than a .1% downtime.
            </li>
            <li>
              Building digital models of mining operations based on WebGL & ThreeJS. This will use
              various layer management tools, animations, freeform rotations and more. Additionally,
              optimizations were made in order to manage memory usage as to not blow up the browser.
            </li>
            <li>
              Building an administration tool used by the end client to manage their models, resources in
              a mine, users, and a lot more.
            </li>
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Project - BenchApp */}
      <div className="flex flex-wrap lg:flex-nowrap items-start mx-auto text-center lg:space-x-8 lg:text-left">
        <Image
          src="/project-icons/benchapp.webp"
          alt="The best in team management. Keep your teams and players organized from home, the office, or on the road. From your computer, tablet or smart phone."
          className="flex-none lg:relative lg:-top-3 mb-4 mx-auto lg:mx-0"
          width={64}
          height={64}
          priority
        />
        <div className="flex-auto space-y-4 -mt-2">
          <h3 className="font-semibold lg:text-xl text-slate-600">BenchApp</h3>
          <Link 
            className="text-xs lg:text-sm text-slate-400 transition-all hover:font-semibold hover:text-slate-800" 
            href="https://benchapp.com/" 
            target="_blank">
            https://benchapp.com/
          </Link>
          <div className="flex flex-wrap gap-2 pt-4 text-xs text-white font-medium tracking-wider">
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Typescript</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">MySQL</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">PHP</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">React</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">TailwindCSS</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">Redis</div>
            <div className="flex-none rounded-md bg-purple-700 py-1 px-2">AWS</div>
          </div>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            BenchApp is a sport team (with over 10+ different sports) management software that allows for
            captains or coordinators to set lineups, send out notifications, etc. I was brought
            in to optimize and scale the software -- which ended in a result 99% uptime as massively
            improved page load times. Since this was a legacy application, improvements ranged
            between moving to AWS (from DigitalOcean), managing NGINX configurations, cleaning out
            memory leaks in the codebase, and more. 
          </p>
          <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
            Some of my responsibilities at BenchApp were,
          </p>
          <ol className="text-sm text-slate-500 text-justify list-decimal lg:pl-8 space-y-4 leading-6 lg:leading-8">
            <li>
              Implement and design a migration from DigitalOcean to AWS to provide a more
              stable platform with better performance and better developer experience. Containers
              were used to provide maximum scalability, and github actions was utilized as
              the deploy pipeline.
            </li>
            <li>
              Examine and determine where to make performance improvements with relation to the
              MySQL database. This included indexes, vaccuming, and offloading historical data
              that was not being used. Additionally, configuration was optimized so as to provide
              better performance for common used queries.
            </li>
            <li>
              Examine and implement performance improvements for the chatter server which is backed
              by socket.io and NestJS. The biggest issue found was the underlying memory and cpu usage
              when message passing between processes and servers. Since teams can be very active, compressing
              and parsing JSON back and forth was costly -- so an underlying C++ wrapper library was used
              to provide better performance.
            </li>
          </ol>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 mb-8 bg-purple-500 w-20 h-1 rounded-lg mx-auto" />

      {/* Section - End */}
      <div className="flex items-start mx-auto space-x-16">
        <p className="text-justify text-sm text-slate-500 leading-6 lg:leading-8">
          These are just some of the projects that I have been involved with; but there are
          many more that I have worked on in the past. While I stay on a project until the work
          is completed to (as close to) perfection as possible -- I am always looking for new challenges
          and new markets to relate my skillset to. If there are projects that you need help with,
          I am here to help!
        </p>
      </div>
    </div>
  );
}
