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
    AspectRatio,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { FaUniversity } from "react-icons/fa";
import { PRIMARY_COLOR } from '@/constant';
import Link from 'next/link';
// And react-slick as our Carousel Lib


const InformasiHomePage = () => {
    return (
        <Box>
            <div className="container">
                <div className="row items-center justify-between">
                    <div className={`mb:md-0 mb-6 md:col-6`}>
                        <h2>FST UNKRISWINA</h2>
                        <p>Fakultas Teknologi Informasi memiliki mahasiswa yang tersebar dari perlbagai pelosok Indonesia, mulai dari Sumatera, Jawa, Kalimantan, Bali, NTT, Sulawesi, Maluku, sampai Papua. Selaras dengan Universitas Kristen Satya Wacana yang semenjak berdiri pada tahun 1956 telah telah memiliki corak keunikan sebagai Indonesia Mini, FTI UKSW memanfaatkan keberagaman ini sebagai salah satu faktor dalam pengembangan bakat dan kepribadian mahasiswa. Sejak awal sebelum terjun ke masyarakat, mahasiswa di tempa untuk menjadi pemimpin yang menghargai perbedaan dan memanfaatkan perbedaan dan keberagaman yang dimiliki oleh Indonesia sebagai faktor penentu keberhasilan.</p>
                    </div>
                    <div className={`md:col-6 lg:col-6`}>
                        <AspectRatio maxW='560px' ratio={1}>
                            <iframe
                                title='FST Unkriswina Sumba'
                                src='https://www.youtube.com/embed/4IRJHPc1V_Y?si=S7-zP7ELSBWcfwqW'
                                allowFullScreen
                            />
                        </AspectRatio>
                    </div>
                </div>
            </div>

        </Box>
    )


};

export default InformasiHomePage;
