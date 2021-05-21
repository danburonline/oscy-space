export type HeaderProps = {
  title: string
  linkText: string
  linkUrl: string
  subTitle: string
}

export default function Header(props: HeaderProps) {
  return (
    <header className='mb-14'>
      <h1 className='w-full px-10 text-5xl font-bold text-center md:text-6xl'>
        {props.title}{' '}
        <a
          target='_blank'
          rel='noopener'
          className='text-blue-600 hover:underline'
          href={props.linkUrl}
        >
          {props.linkText}
        </a>
      </h1>
      <h2 className='px-10 mt-4 text-2xl text-center md:text-2xl md:font-semibold'>
        {props.subTitle}
      </h2>
    </header>
  )
}
