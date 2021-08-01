import type { HeaderProps } from '../types/types'

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <header className='mb-14'>
      <h1 className='w-full px-10 text-5xl font-bold text-center text-white md:text-6xl'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-800 hover:underline'
          href={props.linkUrl}
        >
          {props.linkText}
        </a>
      </h1>
      <h2 className='px-10 mt-4 text-2xl text-center text-white md:text-2xl'>
        Experimental and immersive spatial audio proof of concept <br />
        scenes implemented with React-Three-Fiber.
      </h2>
    </header>
  )
}
