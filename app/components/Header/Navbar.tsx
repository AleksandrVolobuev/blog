import Link from 'next/link'

const navItems = {
  '/': { name: 'Home' },
  '/blog': { name: 'Blog' },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': { name: 'Deploy' },
  '/form': { name: 'Contact' },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px]  tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center relative px-4 pb-0 md:overflow-auto scroll-pr-6 fade"
          id="nav"
        >
          <div className="flex flex-row space-x-4 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="group relative flex items-center py-2 px-3 m-1 font-medium text-white transition-colors 
             hover:text-accent dark:hover:text-primary"
              >

                {name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent dark:bg-primary shadow-neon transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}

