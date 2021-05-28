import { Stats } from '@react-three/drei'
import dynamic from 'next/dynamic'
import BackHomeButton from '../../components/atoms/BackHomeButton'
import AmbientStereo from '../../components/objects/primitives/AmbientStereo'

const AmbientSoundScene = dynamic(
() => import('../../components/scenes/AmbientSoundScene'),
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
        <AmbientSoundScene />
        <BackHomeButton />
        <Stats />
        <AmbientStereo />
    </div>
    </>
)
}