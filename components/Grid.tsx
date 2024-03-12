import { GridItem } from './GridItem'

//https://source.unsplash.com/random/?spa

const gridData = [
  {
    image: `/IMG_6259.jpg`,
    subheading: 'Nuad Thai',
    description:
      'With Nuad Thai we will use our hands, elbows, knees and feet to massage our clients to open up blocked routes. It is a traditional Thai massage and we don’t use oil with this massage.',
    price: {
      minutes: 30,
      hours: 55,
    },
  },
  {
    image: `/KNOT.jpg`,
    subheading: 'Thai Herbal Massage',
    description:
      'With this massage we use herb stamps that are filled with therapeutic herbs. Thai Herbal massage relieves pain and tension in your body.',
    price: {
      minutes: 35,
      hours: 60,
    },
  },
  {
    image: `/turd.jpg`,
    subheading: `Relaxing Massage / Pregnancy Massage`,
    description:
      'With relaxing massage or pregnancy massage we will use our hands on your body. This massage is pain free and is an effective way to de-stress and relax your mind and body.',
    price: {
      minutes: 30,
      hours: 55,
    },
  },
  {
    image: `/IMG-20221017-WA0011.jpg`,
    subheading: 'Foot Massage',
    description:
      'With foot massage we will use our hands, fingers and knuckles to massage the feet. This massage will reduce stress, improve your blood circulation and helps to increase oxygen in the body.',
    price: {
      minutes: 30,
      hours: 55,
    },
  },
  {
    image: `/IMG-20221017-WA0005.jpg`,
    subheading: 'Deep Tissue Massage',
    description:
      'With deep tissue massage we will focus on the muscles and skin layers that are deeper. This massage is perfect for when you are struggling with muscle pain or have knots. Choosing this massage will reduce pain and will make your movements easier than before.',
    price: {
      minutes: 30,
      hours: 55,
    },
  },
  {
    image: `/IMG_6292.jpg`,
    subheading: 'Hot Stone Massage',
    description:
      'With hot stone massage we use hot stones as a heat diffuser to different areas of the body instead of pressing with palms. The heat will help detoxify the pores and stimulate blood circulation.',
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
