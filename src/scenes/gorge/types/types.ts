import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

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
    Path_1: THREE.Mesh
    Path_2: THREE.Mesh
    Path_3: THREE.Mesh
  }
  materials: {
    M_TrimSheet: THREE.MeshStandardMaterial
  }
}

export type RocksProps = GLTF & {
  nodes: {
    Wall_bottomright001: THREE.Mesh
    Wall_left001: THREE.Mesh
    Wall_Right001: THREE.Mesh
  }
  materials: {
    M_Wall_bottomright: THREE.MeshStandardMaterial
    M_Wall_left: THREE.MeshStandardMaterial
    M_Wall_right: THREE.MeshStandardMaterial
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
    RoomElements001: THREE.Mesh
    RoomElements002: THREE.Mesh
  }
  materials: {
    M_Roof: THREE.MeshStandardMaterial
    M_Walls: THREE.MeshStandardMaterial
  }
}

export type WaterRocksProps = GLTF & {
  nodes: {
    BaseRocks001: THREE.Mesh
  }
  materials: {
    M_BaseRockElias: THREE.MeshStandardMaterial
  }
}

export type GrassProps = GLTF & {
  nodes: {
    Grass_1: THREE.Mesh
    Grass_2: THREE.Mesh
  }
  materials: {
    M_Grass: THREE.MeshStandardMaterial
    M_Grass2: THREE.MeshStandardMaterial
  }
}
