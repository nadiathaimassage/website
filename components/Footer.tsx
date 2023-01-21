import Blob from '../public/Blobya.png'
import Image from 'next/image'

export const Footer = ({ id }: any) => {
  return (
    <section
      id={id}
      className=" grid space-y-12 md:space-y-0 grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw] relative items-center py-2xl"
    >
      <div className="col-[3_/_12] row-[1] z-10 md:mix-blend-difference text-dark md:text-light test-effect">
        <h2 className="font-newYork text-6xl md:text-9xl leading-[1]">Interested?</h2>
        <p className="text-xl font-newYork md:text-3xl mb-md">
          Write us an email <br />
          or call us!
        </p>
        <p className="text-base md:text-3xl font-light underline mb-xs hover:opacity-50 effect--300">
          {' '}
          <a className="" href="mailto:nadiathaimassagewellness@gmail.com">
          nadiathaimassagewellness@gmail.com
          </a>
        </p>
        <p className="text-xl md:text-3xl font-light">+31 643-5649-92</p>
      </div>
      <div className="relative col-[2_/_13]  md:col-[7_/_12] row-[2] md:row-[1] aspect-w-10 aspect-h-14 rounded-2xl overflow-hidden">
        <Image className=" object-cover" sizes="150vw" src={'/IMG_6064.JPG'} fill alt={'Image'} />
      </div>
      <Image
        src={Blob}
        fill
        className="show ease-linear duration-300 transition-all visible opacity-100 w-full -z-10 h-full blur-3xl"
        alt={'Image'}
      />
    </section>
  )
}