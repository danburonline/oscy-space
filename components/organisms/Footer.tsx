export type FooterProps = {
  createdByText: string
}

export default function Footer(props: FooterProps) {
  return (
    <footer className='tw-fixed tw-bottom-0 tw-bg-blue-600 tw-text-white tw-p-4 tw-w-full tw-text-center'>
      <p>
        Created by <span className='tw-font-bold'>{props.createdByText}</span>
      </p>
    </footer>
  )
}
