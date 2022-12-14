import NADIA from '../public/NADIA2.svg'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useContext, useState } from 'react'
import { SmootherContext } from './Smoother'
import { IoMdClose } from 'react-icons/io'

const Drawer = ({ open, setOpen, smoother }: any) => {
  return (
    <div
      className={`${
        open ? 'opacity-100 visible' : 'opacity-0 invisible'
      } effect--300 z-40 fixed flex-col space-y-4 inset-0 bg-light text-dark flex items-center justify-center`}
    >
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        <IoMdClose className="h-9 w-auto" />
      </button>
      <ul className="flex flex-col items-center gap-6 text-6xl overflow-hidden">
        <li
          className="cursor-pointer menu-item"
          onClick={() => {
            smoother.scrollTo('#about', true)
            setOpen(!open)
          }}
        >
          About
        </li>
        <li
          className="cursor-pointer menu-item"
          onClick={() => {
            smoother.scrollTo('#services', true)
            setOpen(!open)
          }}
        >
          Services
        </li>
        <li
          className="cursor-pointer menu-item"
          onClick={() => {
            smoother.scrollTo('#contact', true)
            setOpen(!open)
          }}
        >
          Contact
        </li>
      </ul>
    </div>
  )
}

export const Header = () => {
  const [theme, toggleTheme] = useState(false)
  const smoother: any = useContext(SmootherContext)
  const [open, setOpen] = useState(false)

  return (
    <header className="z-20 grid py-6 md:py-[2vw] grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw] fixed w-full transition-all effect--200">
      <div className="col-[3_/_8]">
        <NADIA
          onClick={() => smoother.scrollTo(0, true)}
          className="cursor-pointer h-8 md:h-8 lg:h-[2vw] w-auto"
        />
      </div>
      <div className="col-[8_/_12] flex justify-end gap-4 md:gap-sm items-center">
        <ul className="hidden md:flex gap-sm text-sm overflow-hidden">
          <li
            className="cursor-pointer menu-item"
            onClick={() => smoother.scrollTo('#about', true)}
          >
            About
          </li>
          <li
            className="cursor-pointer menu-item"
            onClick={() => smoother.scrollTo('#services', true)}
          >
            Services
          </li>
          <li
            className="cursor-pointer menu-item"
            onClick={() => smoother.scrollTo('#contact', true)}
          >
            Contact
          </li>
        </ul>
        <button
          className={`h-6 w-6 relative button-animation ${theme ? 'active' : ''}`}
          onClick={() => {
            document.documentElement.classList.toggle('dark-scheme')
            toggleTheme(!theme)
          }}
        >
          <FiMoon
            strokeWidth="1.5px"
            className="h-6 w-auto absolute top-0 hover:rotate-45  sun effect--500"
          />
          <FiSun
            strokeWidth="1.5px"
            className="h-6 w-auto moon absolute hover:rotate-45 top-0 opacity-0 translate-y-6 effect--500"
          />
        </button>
        <button
          className="menu-button block md:hidden space-y-1.5"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <span className="h-[1.5px] rounded-full w-6 bg-dark block"></span>
          <span className="h-[1.5px] rounded-full w-6 bg-dark block"></span>
          <span className="h-[1.5px] rounded-full w-6 bg-dark block"></span>
        </button>
      </div>
      <Drawer open={open} setOpen={setOpen} smoother={smoother} />
    </header>
  )
}
