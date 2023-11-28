"use client"

import BlogCard from "@/components/BlogCard";
import Disqus from "@/components/Disqus";
import ProductCard from "@/components/ProductCard";
import Share from "@/components/Share";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import {
    FaRegClock,
    FaRegFolder,
    FaRegUserCircle,
} from "react-icons/fa/index.js";
import { MdCheckCircle } from "react-icons/md"

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
        author: "Teknik Informatika",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
    {
        title: "Rumput laut aiha",
        image: "/images/image-placeholder.png",
        author: "Teknik Informatika",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
    {
        title: "Rumput laut aiha",
        image: "/images/image-placeholder.png",
        author: "Teknik Informatika",
        date: "2022-04-04T05:00:00Z",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam",
        slug: "rumput-laut-aiha"
    },
]

const TeknikInformatika = () => {

    return (
        <>
            <SeoMeta
                title="Teknik Informatika"
                meta_title=""
                description="Mete description"
                image="/images/image-placeholder.png"
            />
            <section className="section pt-7">
                <div className="container">
                    <h2>Program Studi Teknik Informatika</h2>
                    <h5 className="mt-2">Peringkat Akreditasi : A (BAN-PT No. 948/SK/BAN-PT/Akred/S/IV/2019)</h5>
                    <p className="mt-6">Program studi S1 Teknik Informatika UKSW hadir untuk memenuhi kebutuhan sumber daya manusia yang handal serta mampu merencanakan dan mengimplementasikan teknologi informasi untuk berbagai keperluan. Kurikulum yang dipergunakan di Program Studi S1 Teknik Informatika UKSW didasarkan pada Kerangka Kualifikasi Nasional Indonesia (KKNI) yang menekankan kualifikasi setiap lulusan yang dihasilkan.</p>
                    <p className="mt-2">Untuk mendukung kualifikasi lulusan, Program Studi S1 Teknik Informatika menyediakan 3 peminatan yaitu:</p>
                    <List spacing={3} className="pl-6">
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Jaringan Komputer (Network Engineering)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Pengembang Aplikasi Perangkat Lunak (Application Development)
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdCheckCircle} color='green.500' />
                            Data (Data Analytics).
                        </ListItem>
                    </List>
                    <p className="mt-4">Peluang Karir: Pengembang perangkat lunak (application developer), Administrator basis data (Database administration), tenaga ahli dibidang jaringan (Network Specialist), tenaga ahli dibidang analisis data (Data Analyst), wirausahawan di bidang teknologi informasi, dll.</p>

                    <Tabs mt="6" size='md' variant='enclosed'>
                        <TabList>
                            <Tab>Visi Misi</Tab>
                            <Tab>Profile Kelulusan</Tab>
                            <Tab>Katalog Produk</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <h6>
                                    Visi:
                                </h6>
                                <p>Menjadi universitas unggul berlandaskan semangat kewirausahaan dan nilai-nilai kristiani.
                                </p>
                                <h6 className="mt-2">
                                    Misi:
                                </h6>
                                <p>
                                    Melaksanakan pendidikan dan pengajaran berkompetensi kewirausahaan yang berlandaskan pada nilai-nilai kristiani
                                    Melaksanakan penelitian dan pengabdian kepada masyakarat yang mengedepankan pengembangan kreativitas, inovasi, dan upaya transformasi masyarakat
                                    Mengembangkan kerjasama yang sinergi untuk mendukung penyelenggaraan Tri Dharma Perguruan Tinggi.
                                    Melaksanakan tata kelola universitas yang unggul.
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p>Profil lulusan pada program studi sejalan dengan Visi, Misi, Tujuan, dan Sasaran UKSW yaitu sebagai : </p>
                                <UnorderedList>
                                    <ListItem>Programer / Application Developer</ListItem>
                                    <ListItem>UI / UX</ListItem>
                                    <ListItem>Data Base Administrator</ListItem>
                                    <ListItem>Network Specialist</ListItem>
                                    <ListItem>Data Analyst</ListItem>
                                    <ListItem>Technopreneur</ListItem>
                                </UnorderedList>
                            </TabPanel>
                            <TabPanel>
                                <div className="row">
                                    {DUMMY.map((post: any, index: number) => (
                                        <div className="mb-14 md:col-6 lg:col-4" key={index}>
                                            <ProductCard data={post} />
                                        </div>
                                    ))}
                                </div>
                            </TabPanel>

                        </TabPanels>
                    </Tabs>
                </div>
            </section>
        </>
    );
};

export default TeknikInformatika;
