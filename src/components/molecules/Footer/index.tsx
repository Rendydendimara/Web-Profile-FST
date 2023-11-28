'use client'

// className="bg-theme-light dark:bg-darkmode-theme-light"


import {
    Box, Image
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import ProductCard from '@/components/ProductCard';
// And react-slick as our Carousel Lib

import {
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { PRIMARY_COLOR } from '@/constant';
import { useTheme } from "next-themes";

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

const Footer = () => {
    const { theme, resolvedTheme } = useTheme();
    // setTheme(
    //   theme === "dark" || resolvedTheme === "dark" ? "light" : "dark",
    // )

    return (
        <div
            className="bg-theme-light dark:bg-darkmode-theme-light"
        // bg={useColorModeValue('gray.50', 'gray.900')}
        // color={useColorModeValue('gray.700', 'gray.200')}

        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 2fr' }}
                    spacing={10}>
                    <Stack spacing={10}>
                        <Box>
                            <Image
                                src={theme === "dark" || resolvedTheme === "dark" ? "/images/Site-Logo-Unkriswina-Putih-wp.png" : "/images/Site-Logo-Unkriswina-Hitam-wp.png"}
                            />
                        </Box>
                        <Text fontSize={'sm'}>&#169; {new Date().getFullYear()} Fakultas Sains dan Teknologi Universitas Kristen Wira Wacana Sumba. All rights reserved</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <h5>Fakultas Teknologi Informasi</h5>
                        <Box>
                            <p>
                                Jln. R. Soeprapto, No. 35 Waingapu, Sumba Timur, Nusa Tenggara Timur
                            </p>
                            <p>(0387) 62392</p>
                            <p>humas@unkriswina.ac.id</p>
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <h5>University Resources</h5>
                        <Box as="a" href={'https://ojs.unkriswina.ac.id/'} color={PRIMARY_COLOR} textDecoration="underline">
                            Jurnal Unkriswina
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </div>
    )


};

export default Footer;
