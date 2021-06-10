export default function BackHomeButton(props) {
  let buttonText = props.state ?  'Turn audio off' : 'Turn audio on'

  return (
    <button onClick={props.onClick}
      className='absolute bottom-0 right-0 z-10 flex items-center justify-center p-3 m-3 text-white transition-colors ease-in-out bg-blue-600 rounded-md cursor-pointer duration-350 hover:bg-blue-800'
    >
      {buttonText}
    </button>
  )
}
