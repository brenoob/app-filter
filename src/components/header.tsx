import { ListVideo, Tags, Settings, Code2, ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(true)
  // console.log(isOpen);

  const toggleMenu = () => {
    const menu = document.querySelector<HTMLDivElement>('.menu')!
    menu.classList.toggle('hidden', isOpen)
    setIsOpen(!isOpen)
  }

  // console.log(isOpen);

  return (
    <div className="border-b  border-zinc-800 bg-zinc-900 ">
      <nav className="flex items-center  max-w-[1200px] mx-auto justify-between">
        <div className="sm:hidden absolute scale-75 top-0 right-0 toggleButton">
          <button className="navbar-burger flex items-end relative rounded bg-teal-400 text-teal-950 hover:bg-teal-500  p-3">
            {isOpen ? <X onClick={toggleMenu} className="block relative  sm:hidden" /> : <Menu onClick={toggleMenu} className="block relative sm:hidden" />}
          </button>
        </div>
        <div className='menu  sm:flex '>
          <a href="" className="py-1.5 px-3 bg-zinc-800 text-zinc-100 flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent">
            <ListVideo className="size-4" />
            Uploads
          </a>

          <a href="" className="py-1.5 px-3 text-zinc-300 flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
            <Tags className="size-4" />
            Tags
          </a>

          <a href="" className="py-1.5 px-3 text-zinc-300 flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
            <Settings className="size-4" />
            Settings
          </a>

          <a href="" className="py-1.5 px-3 text-zinc-300 flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
            <Code2 className="size-4" />
            Developers
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-sm font-medium">Hong</span>
            <span className="text-xs text-zinc-400">Development</span>
          </div>
          <img
            src="https://github.com/brenoob.png"
            className="size-8 rounded-full"
            alt=""
          />
          <ChevronDown className="size-4 text-zinc-600" />
        </div>

      </nav>
    </div>
  )
}
