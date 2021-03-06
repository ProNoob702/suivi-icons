import * as React from 'react'

function SvgStarFavorite(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name='Layer 3'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='1em'
      height='1em'
      {...props}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path
        d='M7.733 20.829a1.5 1.5 0 01-2.171-1.592l.809-4.637-3.406-3.264a1.5 1.5 0 01.827-2.571l4.729-.676 2.135-4.259a1.5 1.5 0 012.688 0l2.135 4.259 4.729.676a1.5 1.5 0 01.827 2.571L17.629 14.6l.809 4.638a1.5 1.5 0 01-2.171 1.592L12 18.625z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  )
}

export default SvgStarFavorite
