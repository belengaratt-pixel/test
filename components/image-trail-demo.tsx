"use client"

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const images = [
    "https://drive.google.com/uc?export=view&id=1nnI9CH8MlMzpcf1oHsfKW3bn3dJoygvL",
    "https://drive.google.com/uc?export=view&id=1_Ahd98GJCkincD-_xFbZxiAJNgXtX4LG",
    "https://drive.google.com/uc?export=view&id=1O8r6SiRQsmcXDBXHbk_nS_0j2p7Q13MP",
    "https://drive.google.com/uc?export=view&id=1IPalBK6P25IaQ_mLrM5nzktjH1K2TpiS",
    "https://drive.google.com/uc?export=view&id=15InelvBCf2PyKRMVzbgE0xlkXwyJPacS",
    "https://drive.google.com/uc?export=view&id=14TV3fkLSZNRD3HLRAomqjFeJOSyPRwYP",
  ]

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden rounded-lg"
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="max-w-xs max-h-48 hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      <h1 className="text-7xl md:text-9xl font-bold z-10 select-none bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
        Belu & Mati
      </h1>
    </div>
  )
}

export { ImageTrailDemo }
