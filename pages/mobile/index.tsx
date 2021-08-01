export default function Mobile(): JSX.Element {
  return (
    <>
      <div
        style={{ backgroundColor: '#171717' }}
        className='absolute top-0 left-0 flex justify-center object-center w-full h-screen bg-white bg-opacity-100 bg-auto'
      >
        <div className='absolute flex-col self-center block max-w-xl p-3 text-white bg-opacity-100 bg-auto'>
          <h2 className='mb-3 text-3xl text-center'>We are sorry.</h2>
          <p className='max-w-md text-center'>
            The Oscy experience cannot be accessed with mobile browsers as a
            keyboard and mouse are required to explore the scenes. <br />
            <br />
            <span className='font-bold'>
              Please revisit us using a laptop/desktop computer.
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
