"use client"

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const images = [
    "https://drive.google.com/file/d/1nnI9CH8MlMzpcf1oHsfKW3bn3dJoygvL/view?usp=sharing",
    "https://drive.google.com/file/d/1_Ahd98GJCkincD-_xFbZxiAJNgXtX4LG/view?usp=sharing",
    "https://drive.google.com/file/d/1O8r6SiRQsmcXDBXHbk_nS_0j2p7Q13MP/view?usp=sharing",
    "https://drive.google.com/file/d/1IPalBK6P25IaQ_mLrM5nzktjH1K2TpiS/view?usp=sharing",
    "https://drive.google.com/file/d/15InelvBCf2PyKRMVzbgE0xlkXwyJPacS/view?usp=sharing",
    "https://drive.google.com/file/d/14TV3fkLSZNRD3HLRAomqjFeJOSyPRwYP/view?usp=sharing",
  ].map((url) => `${url}?auto=format&fit=crop&w=300&q=80`)

  return (
    <div className="flex w-full h-screen justify-center items-center bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0 w-full h-full" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              <div className="flex relative overflow-hidden rounded-lg">
  <img
    src={url}
    alt={`Trail image ${index + 1}`}
    className="hover:scale-110 transition-transform"
  />
</div>
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
