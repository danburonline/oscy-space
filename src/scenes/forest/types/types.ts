import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export type BaseRockProps = GLTF & {
  nodes: {
    Base_Rock_grp001: THREE.Mesh
  }
  materials: {
    Base_Rock: THREE.MeshStandardMaterial
  }
}

export type BeechesProps = GLTF & {
  nodes: {
    Beeches_grp_Beech_Leaves_L448001: THREE.Mesh
    Beeches_grp_Beech_Leaves_L448002: THREE.Mesh
  }
  materials: {
    ['Beech_Leaves_L1.001']: THREE.MeshStandardMaterial
    M_Baum: THREE.MeshStandardMaterial
  }
}

export type EnvironmentGroundProps = GLTF & {
  nodes: {
    Environment_ground_UV_low001: THREE.Mesh
  }
  materials: {
    GroundForest: THREE.MeshStandardMaterial
  }
}

export type ColliderProps = GLTF & {
  nodes: {
    Environment_Path_CM: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

export type FoliageGrpProps = GLTF & {
  nodes: {
    FoliageInstancedStaticMeshComponent_5001: THREE.Mesh
  }
  materials: {
    ['Foliage.009']: THREE.MeshStandardMaterial
  }
}

export type LaddersProps = GLTF & {
  nodes: {
    Leiter_LP_grp1001: THREE.Mesh
  }
  materials: {
    Leiter1: THREE.MeshStandardMaterial
  }
}

export type WallRockProps = GLTF & {
  nodes: {
    Wall_Rock_grp001: THREE.Mesh
  }
  materials: {
    Wall_Rock: THREE.MeshStandardMaterial
  }
}
