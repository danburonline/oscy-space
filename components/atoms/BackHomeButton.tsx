export default function BackHomeButton() {
  return (
    <a
      role='button'
      className='absolute bottom-0 left-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out bg-blue-600 rounded-md cursor-pointer duration-350 hover:bg-blue-800'
      href='/'
    >
      &larr; Go back home
    </a>
  )
}
