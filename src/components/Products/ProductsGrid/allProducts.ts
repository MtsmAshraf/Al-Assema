import { StaticImageData } from "next/image"
import image1 from "../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import image2 from "../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import image3 from "../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import image4 from "../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"
import image5 from "../../../../public/imgs/lucas-gallone-uPk5aOtimUE-unsplash.jpg"

export type Product = {
    id: string,
    name: string,
    description: string,
    href: string,
    src: StaticImageData,
    alt: string
}

const products : Product[] = [
    {
        id: "1",
        name: "Oil Injected Rotary Screw Compressors",
        description: "Industrial automation product integrator - comprehensively meeting production needs",
        href: "/inverters",
        src: image1,
        alt: "Inverters Image"
    },
    {
        id: "2",
        name: "Oil Injected Rotary Screw Compressors",
        description: "Safty, stability and reliability",
        href: "/plcs",
        src: image2,
        alt: "PLCs Image"
    },
    {
        id: "3",
        name: "Oil Injected Rotary Screw Compressors",
        description: "High definition, high brightness, and full view display",
        href: "/hmis",
        src: image3,
        alt: "HMIs Image"
    },
    {
        id: "4",
        name: "Oil Injected Rotary Screw Compressors",
        description: "Efficiency, stability and intelligence",
        href: "/servo-drives",
        src: image4,
        alt: "Servoes Image"
    },
    {
        id: "5",
        name: "Oil Injected Rotary Screw Compressors",
        description: "Efficiency, stability and intelligence",
        href: "/servo-drives",
        src: image5,
        alt: "Servoes Image"
    }
]

export default products;