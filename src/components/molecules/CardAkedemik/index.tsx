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


const CardAkedemik = () => {


    return (
        <Box>
            <Center>
                <Box w="330px" boxShadow="lg" p="20px">
                    <Link href="/akademik/program-sarjana">
                        <FaUniversity fill={PRIMARY_COLOR} size={50} />
                    </Link>
                    <Link href="/akademik/program-sarjana">
                        <h3 className='mt-6' style={{ color: PRIMARY_COLOR }}>
                            Program Sarjana
                        </h3>
                    </Link>
                    <p>
                        Program Sarjana Fakultas Teknologi Informasi Universitas Kristen Satya Wacana Salatiga

                    </p>
                </Box>
            </Center>
        </Box>
    )


};

export default CardAkedemik;
