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
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { FaUniversity } from "react-icons/fa";
import { PRIMARY_COLOR } from '@/constant';
import Link from 'next/link';
// And react-slick as our Carousel Lib

const DATA = [
    {
        title: 'Teknik Informatika',
        description: 'Program Sarjana Teknik Informatika Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana',
        link: '/akademik/program-sarjana/teknik-informatika',
    },
    {
        title: 'Peternakan',
        description: 'Program Sarjana Peternakan Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana',
        link: '#',
    },
    {
        title: 'Agroteknologi',
        description: 'Program Sarjana Agroteknologi Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana',
        link: '#',
    },
    {
        title: 'Agribisnis',
        description: 'Program Sarjana Agribisnis Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana',
        link: '#',
    },
    {
        title: 'Teknologi Hasil Perikanan',
        description: 'Program Sarjana Teknologi Hasil Perikanan Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana',
        link: '#',
    }
]

const CardAkedemik = () => {

    return (
        <Box p="10px">
            <Center gap="10px">
                {DATA.map((dt, i) => (
                    <Box w="330px" h="300px" boxShadow="lg" p="20px" key={i}>
                        <Link href={dt.link}>
                            <FaUniversity fill={PRIMARY_COLOR} size={50} />
                        </Link>
                        <Link href={dt.link}>
                            <h3 className='mt-6' style={{ color: PRIMARY_COLOR }}>
                                {dt.title}
                            </h3>
                        </Link>
                        <p>
                            {dt.description}
                        </p>
                    </Box>
                ))}
            </Center>
        </Box>
    )


};

export default CardAkedemik;
