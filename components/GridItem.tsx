import Image from 'next/image'
import { GridItemProps } from '../types'
import MithosisAlt from '../public/MithosisAlt.svg'
import css from '../styles/components/GridItem.module.scss'

export const GridItem = (props: GridItemProps) => {
  return (
    <div
      className={`relative effect--300 group rounded-2xl overflow-hidden effect--300 ${css['grid-item']}`}
    >
      <Image sizes="150vw" className="object-cover" src={props.image} alt={'Image'} fill />
      <div className="bg-dark/30 group-hover:bg-dark/0 effect--300 text-light flex items-end p-4 md:p-sm absolute inset-0">
        <div>
          {props.subheading && (
            <div className="space-y-[.2vw] mb-1">
              {/* <MithosisAlt className="h-[.5vw] effect--500 hover:rotate-180 w-auto" /> */}
              <h3 className="text-base md:text-xl font-normal group-hover:opacity-0 group-hover:-translate-y-xs effect--300">
                {props.subheading}
              </h3>
            </div>
          )}
          {props.description && (
            <p className="text-xs mb-4 md:text-sm group-hover:opacity-0 group-hover:-translate-y-xs effect--500">
              {props.description}
            </p>
          )}
          <div className="space-x-1 md:space-x-2 group-hover:opacity-0 group-hover:-translate-y-xs effect--500">
            {props.price?.minutes && (
              <span className="text-2xl">
                €{props.price?.minutes},-{' '}
                <sup className="text-[.5rem] md:text-[.7rem] -top-2.5">30 min</sup>
              </span>
            )}
            {props.price?.hours && props.price?.minutes && <span className="text-base">/</span>}
            {props.price?.hours && (
              <span className="text-2xl">
                €{props.price?.hours},-{' '}
                <sup className="text-[.5rem] md:text-[.7rem]  -top-2.5">Hourly</sup>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
