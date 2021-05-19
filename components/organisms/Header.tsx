export default function Header() {
  return (
    <header className='tw-mt-20 tw-mb-12'>
      <h1 className='tw-w-full tw-text-center tw-text-blue-600 tw-font-bold tw-text-5xl'>
        Welcome to{' '}
        <a
          className='hover:tw-text-blue-800 hover:tw-underline transition-all'
          href='https://github.com/danburonline/oscy-space'>
          Oscy Space
        </a>
      </h1>
      <h2 className='tw-text-center tw-text-2xl tw-mt-4 tw-font-semibold'>
        ThreeJS example scenes
      </h2>
    </header>
  )
}
