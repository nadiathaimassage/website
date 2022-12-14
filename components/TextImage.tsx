import Image from 'next/image'

export const TextImage = ({ id, state }: any) => {
  return (
    <section
      id={id}
      data-state={state}
      className={`pt-2xl grid grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw] gap-y-24`}
    >
      <div className="col-[3_/_12] md:mr-xs md:col-[3_/_7] z-10 row-[1] flex items-center md:mix-blend-difference">
        <h2 className="text-4xl md:text-6xl font-newYork">
          Sed vel lacinia velit. Sed vel nulla ac sem malesuada auctor.
        </h2>
      </div>
      <Image
        style={{ aspectRatio: '8/10' }}
        className="col-[3_/_10] -z-10 md:col-[7_/_11] row-[2] md:row-[1] object-cover rounded-2xl"
        src={`/IMG_6292.jpg`}
        width={500}
        height={500}
        sizes="150vw"
        alt={'Yas'}
      />
      <Image
        style={{ aspectRatio: '8/10' }}
        className="col-[7_/_12] md:col-[9_/_12] row-[2] md:row-[1] -mt-xl object-cover rounded-2xl z-10"
        src={'/IMG_6052.jpg'}
        width={500}
        height={500}
        sizes="150vw"
        alt={'Yas'}
      />
    </section>
  )
}
