import React, { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, Loader, Html } from '@react-three/drei'
import * as THREE from 'three'
import QuestScene from '../QuestScene'
import { useGameStore } from '@src/lib/store'
import { Npcs } from '@src/lib/npcs'
import { ColorMap, IndexMap, Colors } from '@src/utlis'

const store = [
  {
    name: 'office',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/office-life-three.jpg',
    link: 0,
  },
  {
    name: 'office2',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/output.jpg',
    link: 0,
  },
  {
    name: 'office3',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/office-life-excelent.jpeg',
    link: 0,
  },
  {
    name: 'office3',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/office-life-excelent-clickzone.jpeg',
    link: 0,
  },
  {
    name: 'office4',
    color: 'lightpink',
    position: [10, 0, -15],
    url: '/color-hotmap.png',
    link: 0,
  },
]

const SceneOne = () => {
  const [selectedScene, setSelectedScene] = useState(2)
  const [canClick, setCanClick] = useState(false)
  const [activeColor, setActiveColor] = useState('')
  const [activeDailog, setActiveDialog] = useState(true)

  const { toggleNpcColor, toggleQuestDialog } = useGameStore()

  const Hotspots = () => {
    const [canvasCreated, setCanvasCreated] = useState(false)
    const texture = useLoader(THREE.TextureLoader, store[4].url) // prettier-ignore
    let canvas2d: CanvasRenderingContext2D | null = null

    const raycaster = new THREE.Raycaster()

    const { camera } = useThree()

    const self = useRef()

    let canvas = document.createElement('canvas')
    canvas.width = texture.image.naturalWidth / 12
    canvas.height = texture.image.naturalHeight / 12
    canvas.style.display = 'none'

    setTimeout(() => {
      canvas2d = canvas.getContext('2d')
      if (canvas2d) {
        canvas2d.drawImage(texture.image, 0, 0, canvas.width, canvas.height)
        setCanvasCreated(true)
      } else {
        console.error('cant create canvas')
      }
    }, 600)

    const checkIfHit = (event: MouseEvent) => {
      let mouse = new THREE.Vector2()

      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      raycaster.setFromCamera(mouse, camera)

      if (self.current) {
        const intersects = raycaster.intersectObjects([self.current])

        if (intersects.length > 0) {
          if (canvas2d) {
            const { uv } = intersects[0]

            const x = uv ? canvas.width * uv.x : 0
            const y = uv ? canvas.height * (1 - uv.y) : 0
            const pixel = canvas2d.getImageData(x, y, 1, 1).data
            //  Calculate color code
            let colorCheck = ''
            colorCheck += pixel[0] > 100 ? '1' : '0'
            colorCheck += pixel[1] > 100 ? '1' : '0'
            colorCheck += pixel[2] > 100 ? '1' : '0'

            switch (colorCheck) {
              case ColorMap.YELLOW:
                setCanClick(true)
                toggleNpcColor(colorCheck)
                break
              case ColorMap.GREEN:
                setCanClick(true)
                toggleNpcColor(colorCheck)
                break
              case ColorMap.RED:
                setCanClick(true)
                toggleNpcColor(colorCheck)
                break
              case ColorMap.AQUA:
                setCanClick(true)
                toggleNpcColor(colorCheck)
                break
              case ColorMap.PINK:
                setCanClick(true)
                toggleNpcColor(colorCheck)
                break
              default:
                setCanClick(false)
            }
          }
        }
      }
    }

    const handleClick = () => {
      toggleQuestDialog(true)
    }

    useEffect(() => {
      if (canvasCreated) {
        document.addEventListener('mousemove', checkIfHit, false)
      }
      return () => {
        document.removeEventListener('mousemove', checkIfHit)
      }
    }, [canvasCreated])

    return (
      <mesh ref={self} scale={[-1, 1, 1]} onClick={() => handleClick()}>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial
          map={texture}
          side={THREE.BackSide}
          visible={false}
        />
      </mesh>
    )
  }

  const Panorama = () => {
    const map = useLoader(THREE.TextureLoader, store[selectedScene].url) // prettier-ignore

    return (
      <mesh scale={[-1, 1, 1]}>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={map} side={THREE.BackSide} />
      </mesh>
    )
  }

  const Preload = () => {
    const { gl } = useThree()
    const map = useLoader(THREE.TextureLoader, store[selectedScene].url) // prettier-ignore
    useEffect(() => {
      gl.initTexture(map)
    }, [map])
    return null
  }

  return (
    <Canvas frameloop='demand' camera={{ position: [10, 0, 0.3] }}>
      <Suspense
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
        <Preload />
        <Panorama />

        <QuestScene activeColor={activeColor} activeDialog={activeDailog} />

        <Hotspots />
      </Suspense>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom />
    </Canvas>
  )
}

export default SceneOne
