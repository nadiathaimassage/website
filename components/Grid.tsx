import { GridItem } from './GridItem'

//https://source.unsplash.com/random/?spa

const gridData = [
  {
    image: `/IMG_6259.jpg`,
    subheading: 'Head Shoulder Back Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 28,
      hours: 50,
    },
  },
  {
    image: `/KNOT.jpg`,
    subheading: 'Thai Herbal Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 35,
      hours: 60,
    },
  },
  {
    image: `/turd.jpg`,
    subheading: 'Relaxing Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 28,
      hours: 50,
    },
  },
  {
    image: `/IMG-20221017-WA0011.jpg`,
    subheading: 'Feet Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 28,
      hours: 50,
    },
  },
  {
    image: `/IMG-20221017-WA0005.jpg`,
    subheading: 'Leg Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 28,
      hours: 50,
    },
  },
  {
    image: `/IMG_6292.jpg`,
    subheading: 'Hot Stone Massage',
    description: 'A short description about whatever this is supposed to be.',
    price: {
      minutes: 35,
      hours: 60,
    },
  },
]

export const Grid = ({ id }: any) => {
  return (
    <section
      id={id}
      className="space-y-12 md:space-y-lg grid grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw]"
    >
      <h2 className="col-[3_/_12] text-4xl md:text-6xl text-center font-newYork">
        Services and prices
      </h2>
      <div className="col-[1_/_14] grid grid-rows-[repeat(13,_minmax(8rem,_1fr))] md:grid-rows-[repeat(3,_minmax(28rem,_1fr))] gap-y-12 md:gap-xs grid-cols-[4vw_repeat(11,_minmax(0,_1fr))_4vw]">
        {gridData.map((item, id) => (
          <GridItem key={id} {...item} />
        ))}
      </div>
    </section>
  )
}
