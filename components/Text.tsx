import Mithosis from '../public/MithosisAlt.svg'
import Image from 'next/image'

const data = {
  content: "Nadia studied Thai massage at a young age and has also learned Thai massage at Wat Pho in Thailand. She will take all the time and listen carefully to any complaints you may have, so that she can effectively focus on the tense areas. Thai massage will help you reduce stress, eliminates pain and lets you sleep better."
}

export const Text = ({ state }: any) => {
  return (
    <section
      data-state={state}
      className="relative grid py-2xl bg-contain grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw] bg-no-repeat"
    >
      <div className="col-[3_/_12] md:col-[5_/_10] space-y-4 md:space-y-md">
        <div className="space-y-xs">
          <Mithosis className="h-3 md:h-[1vw] effect--500 hover:rotate-180 w-auto" />
          <h3 className="text-lg md:text-xl">About</h3>
        </div>
        <h2 className="text-2xl md:text-3xl font-newYork">
          {data.content}
        </h2>
      </div>
      <Image
        src={`/Blobberd.png`}
        fill
        className="show ease-linear duration-300 transition-all visible opacity-100 w-full -z-10 h-full blur-3xl"
        alt={'Image'}
      />
    </section>
  )
}
