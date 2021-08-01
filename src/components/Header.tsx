export default function Header(): JSX.Element {
  return (
    <header className='mb-14'>
      <h1 className='w-full px-10 text-5xl font-bold text-center text-black md:text-6xl'>
        Oscy Space
      </h1>
      <h2 className='px-10 mt-4 text-2xl text-center text-primary md:text-2xl'>
        Experimental and immersive spatial audio proof of concept <br />
        scenes implemented with React-Three-Fiber.
      </h2>
    </header>
  )
}
