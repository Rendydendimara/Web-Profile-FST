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
// And react-slick as our Carousel Lib


const BeritaTerakhir = () => {


    return (
        <Box>
            <h2>Berita FTS UNKRISWINA SUMBA</h2>
            <Image
                mt="10px"
                src="/images/image-placeholder.png"
                className="mx-auto"
                width="full"
                height="420"
                objectFit="cover"
                alt="banner image"
            />
            <Box mt="20px" className="container">
                <li className="mr-4 inline-block">
                    <FaRegClock className="-mt-1 mr-2 inline-block" />
                    {dateFormat(new Date())}
                </li>
                <h3 className='mb-4'>Teknik Informatika Expo: “Entechnopreneurship Fair”Dalam Rangka Pra Dies Unkriswina Sumba ke-25</h3>
                <p>Pendidikan pada negara maju mendasarkan basisnya pada kemampuan anak bangsa untuk mandiri dan berinovasi berbasiskan penciptaan teknologi sebagai keunggulan bersaingnya yang disebut Pendidikan berbasis entrepreneurship atau technopreneurship. Mata kuliah Technopreneurship merupakan gabungan dari teknologi dengan kewirausahaan. Technopreneurship melibatkan proses kemampuan kreatif fan inovatif mahasiswa melalui penerapan dan pemanfaatan ilmu pengetahuan untuk menjalankan kegiatan yang memberikan nilai tambah bagi dirinya dan atau masyarakatnya.</p><br />
                <p>Penjelasan dosen pengampuh mata kuliah Technopreneurship Pada Fakultas Sains dan Teknologi Unkriswina Sumba Ibu Rambu Yetti Kalaway, ST.,MT.,MM menerangkan bahwa program ini merupakan kerjasama antara Prodi Teknik Informatika, Agribisnis dan Teknologi Hasil Perikanan untuk menciptakan peluang mengembangkan nilai tambah produk-produk pertanian, kehutanan, peternakan dan perikanan dalam bentuk pameran (fair) yang diberi nama enTECHNOpreneurship Fair 2022. Pelaksanaan pameran ini merupakan wujud integrasi mata kuliah fakultas dengan pengabdian kepada masyarakat, dalam rangka mencapai visi dan misi FST dan dirancang dalam rangka Pra Dies Natalis 25 Unkriswina Sumba.</p><br />
                <p>Lebih lanjut Rambu Yetti Kalaway sebagai dosen pengampuh mata kuliah sekaligus Dekan Fakultas Sains dan Teknologi Unkriswina Sumba menyatakan bahwa kegiatan ini terdiri dari 2 bagian yakni Pameran dan Edukasi. Pameran dirancang untuk menampilkan produk-produk olahan unggulan mahasiswa dan edukasi menampilkan aplikasi yang dapat digunakan dalam mendukung pembelajaran digital, diantaranya Cisco Paket Tracer, Video Editing, UI/UX Design, Coding, Game Developing, Web Design.</p>
                <p>Kegiatan pameran akan membuka peluang kewirausahaan bagi mahasiswa dalam bentuk produk olahan nyata dan kegiatan edukasi akan memberikan kontribusi pengajaran dan pengembangan Teknologi Informasi kepada pengunjung pameran, mengembangkan kemampuan soft skill mahasiswa dalam bidang technopreneurship, meningkatkan koordinasi, kolaborasi dan integrasi mata kuliah dengan pengabdian kepada masyarakat yang ditopang oleh semangat kreativitas dan inovasi mahasiswa berbasis kearifan lokal dan penguasaan teknologi.</p>
            </Box>
        </Box>
    )


};

export default BeritaTerakhir;
