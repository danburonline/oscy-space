import BackHomeButton from '../../components/atoms/BackHomeButton'

export default function() {

    return(
        <>
        <div
            className='top-0 left-0 h-screen bg-white bg-opacity-100 bg-auto w-full h-full absolute object-center flex justify-center'
        >
            <div
                className='absolute block flex flex-col self-center max-w-xl bg-opacity-100 bg-auto p-3'
            >
                <h2 className='text-3xl mb-3'>We are sorry, but...</h2>
                <p>this website can not be accessed by mobile browsers since a keyboard and a mouse are required to fully enjoy the content.</p>
                <p>Please visit us again using a desktop computer or a laptop.</p>
            </div>
        </div>
        <BackHomeButton />
        </>
    )
}