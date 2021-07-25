import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

export type ColliderProps = GLTF & {
  nodes: {
    Collider: THREE.Mesh
  }
}

export type LampsProps = GLTF & {
  nodes: {
    Lamps001: THREE.Mesh
  }
  materials: {
    ['M_Lamps.002']: THREE.MeshStandardMaterial
  }
}

export type PathProps = GLTF & {
  nodes: {
    Path001_1: THREE.Mesh
    Path001_2: THREE.Mesh
    Path001_3: THREE.Mesh
  }
  materials: {
    ['M_TrimSheet.001']: THREE.MeshStandardMaterial
  }
}

export type RocksProps = GLTF & {
  nodes: {
    Wall_bottomright_lowpoly001: THREE.Mesh
    Wall_left_lowpoly001: THREE.Mesh
    Wall_Right_lowpoly001: THREE.Mesh
  }
  materials: {
    ['M_Wall_bottomright.002']: THREE.MeshStandardMaterial
    ['M_Wall_left1.002']: THREE.MeshStandardMaterial
    ['M_Wall_right.002']: THREE.MeshStandardMaterial
  }
}

export type StorageAssetsProps = GLTF & {
  nodes: {
    Storage_Assets001: THREE.Mesh
    Storage_Assets002: THREE.Mesh
  }
  materials: {
    ['M_CratesBarrels.001']: THREE.MeshStandardMaterial
    ['M_Props.001']: THREE.MeshStandardMaterial
  }
}

export type RoomElementsProps = GLTF & {
  nodes: {
    Roof001: THREE.Mesh
    Walls001: THREE.Mesh
  }
  materials: {
    M_Roof: THREE.MeshStandardMaterial
    M_Walls: THREE.MeshStandardMaterial
  }
}
