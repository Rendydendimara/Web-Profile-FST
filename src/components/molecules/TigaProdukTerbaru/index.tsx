import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
    Center,
    Image,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { FaRegClock, FaUniversity } from "react-icons/fa";
import { PRIMARY_COLOR } from '@/constant';
import Link from 'next/link';
import ImageFallback from '@/helpers/ImageFallback';
import dateFormat from '@/lib/utils/dateFormat';
import ProductCard from '@/components/ProductCard';
// And react-slick as our Carousel Lib

interface IData {
    title: string;
    image: string;
    author: string;
    date: any;
    description: string;
    slug: string;

}
const DUMMY: IData[] = [
    {
        title: "Rumput laut aiha",
        image: "/images/image-placeholder.png",
        author: "Agroteknologi",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
    {
        title: "Rumput laut aiha",
        image: "/images/image-placeholder.png",
        author: "Agroteknologi",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
    {
        title: "Rumput laut aiha",
        image: "/images/image-placeholder.png",
        author: "Agroteknologi",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
]

const TigaProdukTerbaru = () => {
    return (
        <Box>
            <h2>3 Produk Terbaru</h2>
            <section style={{ marginTop: '10px' }}>
                <div className="container">
                    <div className="row">
                        {DUMMY.map((post: any, index: number) => (
                            <div className="mb-14 md:col-6 lg:col-4" key={index}>
                                <ProductCard data={post} />
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </Box>
    )


};

export default TigaProdukTerbaru;
