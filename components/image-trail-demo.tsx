"use client"

import { useRef } from "react"
import { ImageTrail } from "@/components/ui/image-trail"

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null)

  const images = [
    "/Frame 15.png",
    "/Frame 16.png",
    "/Frame 17.png",
    "/Frame 18.png",
    "/Frame 19.png",
    "/Frame 20.png",
  ]

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
