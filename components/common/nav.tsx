import { navLinks } from "@/constants/page"
import Image from "next/image"
import Link from "next/link"
import { headerLogo } from "@/assets/images"
import {hamburger} from "@/assets/icons"

export default function Nav() {
  return (
    <header className="py-5 px-12 absolute z-10 w-full">
        <nav className="flex items-center justify-between max-container">
            <Image 
              src={headerLogo}
              alt="logo"
              />
              <ul className="flex-1 flex items-center justify-center gap-16
              max-lg:hidden
              ">
            {
                navLinks.map(({ href, label }) =>
                   <li key={label}> 
                    <Link  href={href}>
                        {label}
                    </Link>
                    </li>
                )
            }
            </ul>
            <div className="hidden max-lg:block">
                <Image src={hamburger} alt="hamburger"
                 className="size-10"
                />
            </div>
        </nav>
    </header>
  )
}
