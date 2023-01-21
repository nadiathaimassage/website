import Mithosis from '../public/Mithosis.svg'
import SoftFlower from '../public/SoftFlower.svg'
import { useContext } from 'react'
import { SmootherContext } from './Smoother'

const data = {
  content: "At Nadia Thai Massage & Wellness you will have time to relax your body and mind."
}

export const Hero = ({ state }: any) => {
  const smoother: any = useContext(SmootherContext)
  return (
    <section
      data-state={state}
      className={`text-light bg-[url('../public/hemnoi.jpg')] bg-no-repeat bg-cover relative`}
    >
      <div className="md:min-h-[70vh] bg-dark/50 grid grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw]">
        <div className="col-[3_/_12] md:col-[3_/_10] py-32 md:py-xl justify-center flex flex-col space-y-4 md:space-y-sm">
          <div className="space-y-xs">
            <Mithosis className="h-3 md:h-[1vw] effect--500 hover:rotate-180 w-auto" />
            <h3 className="text-lg md:text-xl">Sawatdee kha, welcome</h3>
          </div>
          <h2 className="text-3xl md:text-5xl font-newYork">
            {data.content}
          </h2>
          <div
            onClick={() => smoother.scrollTo('#contact', true)}
            className="items-center cursor-pointer space-x-2.5 md:space-x-xs group inline-flex"
          >
            <span className="relative group-hover:ml-2 md:group-hover:ml-[1vw] effect--300 group-hover:scale-125 origin-center">
              <SoftFlower className="w-12 md:w-[3vw] h-auto group-hover:rotate-90 effect--500" />
              <span className="h-5 md:h-[1vw] w-5 md:w-[1vw] scale-50 group-hover:scale-90 effect--300 bg-dark absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></span>
            </span>
            <span className="group-hover:-ml-2 md:group-hover:-ml-[1vw] group-hover:opacity-0 effect--300">
              Call us now
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
