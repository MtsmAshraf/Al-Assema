import { StaticImageData } from "next/image"
import image1 from "../../../../public/imgs/yellow-one.jpeg"
import image2 from "../../../../public/imgs/yellow-two.jpeg"
import image3 from "../../../../public/imgs/red.jpeg"
import image4 from "../../../../public/imgs/black.jpeg"
import image5 from "../../../../public/imgs/blue.jpeg"
import image6 from "../../../../public/imgs/1.jpeg"
import image7 from "../../../../public/imgs/2.jpeg"
import image8 from "../../../../public/imgs/3.jpeg"
import image9 from "../../../../public/imgs/4.jpeg"
export type Product = {
    id: string,
    name: string,
    src: StaticImageData,
    category: string
}

const products : Product[] = [
    {
        id: "1",
        name: "كمبرسورات استيراد بمختلف القدرات",
        src: image1,
        category: "category 2"
    },
    {
        id: "2",
        name: "كمبرسورات استيراد بمختلف القدرات",
        src: image2,
        category: "category 1"
    },
    {
        id: "3",
        name: "مجففات هواء جديدة ماركة Chicago من مجموعة Atlas copco",
        src: image3,
        category: "category 1"
    },
    {
        id: "4",
        name: "بوستر 40 بار من Chicago",
        src: image4,
        category: "category 2"
    },
    {
        id: "5",
        name: "فلاتر خط جميع المقاسات إيطالى وصينى",
        src: image5,
        category: "category 2"
    },
    {
        id: "6",
        name: "فواصل زيت Noitech",
        src: image6,
        category: "category 2"
    },
    {
        id: "7",
        name: "فلاتر هواء Noitech , Man filter",
        src: image7,
        category: "category 2"
    },
    {
        id: "8",
        name: "فلاتر زيت Mann filter , Noitech",
        src: image8,
        category: "category 2"
    },
    {
        id: "9",
        name: "فواصل زيت spinning on",
        src: image9,
        category: "category 2"
    }
]

export default products;