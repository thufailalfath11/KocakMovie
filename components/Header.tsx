import useAuth from "@/hooks/useAuth"
import develop from "@/pages/develop"
import {BellIcon, SearchIcon, UserIcon} from "@heroicons/react/solid"
import Link from "next/link"
import { useEffect, useState } from "react"


function  Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            }   else {
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    } , [])
  return (
    <header className={`${isScrolled && 'bg-[#0c14ff4b]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10 ">
            <img
            src="https://drive.google.com/uc?export=view&id=1OQHBtXb55licPGAM62MwM47RrMwcB4Mr"
            width={200}
            height={200}
            alt="Picture not found"
            />
            <ul className="hidden space-x-4 md:flex">
                <li className="headerLink">Home</li>
                <li className="headerLink">TV Shows</li>
                <li className="headerLink">Movies</li>
                <li className="headerLink">New & Polular</li>
                <li className="headerLink">My List</li>
            </ul>
        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
            <SearchIcon className="hidden h-6 w-6 sm:inline cursor-pointer rounded"/>
            <p className="hidden lg:inline">Kids</p>
            <BellIcon className="hidden h-6 w-6 sm:inline "/>
            <Link href={"develop"}><UserIcon href="../pages/develop" className="hidden h-6 w-6 sm:inline"/></Link>
            <Link href="/account">
                <img
                onClick={logout}
                    src="https://rb.gy/g1pwyx"
                    alt="not found"
                    className="cursor-pointer rounded"
                
                />
            </Link>
            
        </div>
    </header>

  )
}

export default  Header