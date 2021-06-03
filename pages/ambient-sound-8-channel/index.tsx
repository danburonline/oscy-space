import { Loader, Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'

const AmbientSound8ChannelScene = dynamic(
    () => import('../../components/scenes/AmbientSound8ChannelScene'),
    {
        ssr: false
    }
)

export default function FpvExample() {
return (
    <>
    <h1 className='absolute top-0 right-0 z-10 pr-2'>
        Click on the screen to activate pointer lock controls
    </h1>
    <div className='h-screen'>
        <AmbientSound8ChannelScene />
        <BackHomeButton />
        <Stats />

    </div>
    </>
)
}