import CarouselTentangFSTUnkriswina from "../../components/molecules/CarouselTentangFSTUnkriswina";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";


const STAFF_PIMPINAN = [
    {
        title: 'Dekan',
        name: 'RAMBU YETTI KALAWAY S.T, M.T, M.M',
    },
    {
        title: 'Wakin Dekan',
        name: 'Explicabo illum suscipit quas',
    },
    {
        title: 'Kepala Program Studi Teknik Informatika',
        name: 'Explicabo illum suscipit quas',
    },
    {
        title: 'Kepala Program Studi Peternakan',
        name: 'Explicabo illum suscipit quas',
    },
    {
        title: 'Kepala Program Studi Agroteknologi',
        name: 'Explicabo illum suscipit quas',
    },
    {
        title: 'Kepala Program Studi Agribisnis',
        name: 'Explicabo illum suscipit quas',
    },
    {
        title: 'Kepala Program Studi Teknologi Hasil Perikanan',
        name: 'Explicabo illum suscipit quas',
    }
]

const TentangFSTUnkriswina = () => {
    const data: RegularPage = getListPage("about/_index.md");
    const { frontmatter, content } = data;
    const { title, meta_title, description, image } = frontmatter;

    return (
        <>
            <SeoMeta
                title="Tentang FST Unkriswina"
                meta_title="Tentang FST Unkriswina"
                description="Tentang FST Unkriswina"
                image={image}
            />
            <CarouselTentangFSTUnkriswina />
            <section className="section-sm">
                <div className="container">
                    <h2
                        className="h3 mb-6"
                    >
                        Profil Fakultas Sains Dan Teknologi Unkriswina Sumba
                    </h2>
                    <div className="content">
                        <h5 className="mb-3">
                            Sejarah Fakultas Teknologi Informasi UKSW
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum eum error velit commodi magni tenetur placeat explicabo ut quo, veniam nesciunt facere eveniet harum labore libero molestiae beatae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quidem iste, mollitia exercitationem quasi natus veniam obcaecati omnis laborum fugiat asperiores repellendus beatae recusandae ipsum at vero vitae necessitatibus dolorem.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum eum error velit commodi magni tenetur placeat explicabo ut quo, veniam nesciunt facere eveniet harum labore libero molestiae beatae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quidem iste, mollitia exercitationem quasi natus veniam obcaecati omnis laborum fugiat asperiores repellendus beatae recusandae ipsum at vero vitae necessitatibus dolorem.</p>

                        <h5 className="mb-3">
                            Sistem Pembelajaran Fakultas Teknologi Informasi UKSW
                        </h5>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum eum error velit commodi magni tenetur placeat explicabo ut quo, veniam nesciunt facere eveniet harum labore libero molestiae beatae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quidem iste, mollitia exercitationem quasi natus veniam obcaecati omnis laborum fugiat asperiores repellendus beatae recusandae ipsum at vero vitae necessitatibus dolorem.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum eum error velit commodi magni tenetur placeat explicabo ut quo, veniam nesciunt facere eveniet harum labore libero molestiae beatae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quidem iste, mollitia exercitationem quasi natus veniam obcaecati omnis laborum fugiat asperiores repellendus beatae recusandae ipsum at vero vitae necessitatibus dolorem.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2
                        className="h3 mb-6"
                    >
                        Visi & Misi
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad, nemo vel eligendi quae perspiciatis molestias possimus hic molestiae nulla dignissimos repudiandae, nisi at quam minima saepe tenetur sunt officia, quos nihil reprehenderit eveniet? Reiciendis, omnis facilis et eos ut voluptatum odit, a impedit eveniet rerum asperiores, aperiam dolore quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit hic suscipit id officia esse voluptate voluptatibus quos accusamus delectus, fuga dolore iusto reprehenderit ratione deleniti sunt molestiae beatae sapiente qui, vero natus laboriosam sit cum reiciendis error! Laborum inventore doloribus deserunt aperiam atque, voluptas mollitia fuga necessitatibus quam sed consequuntur.</p>
                    <div className="content mt-3">
                        <h5 className="mb-3">
                            Visi Fakultas Sains dan Teknologi Unkriswina Sumba
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatum eum error velit commodi magni tenetur placeat explicabo ut quo, veniam nesciunt facere eveniet harum labore libero molestiae beatae ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quidem iste, mollitia exercitationem quasi natus veniam obcaecati omnis laborum fugiat asperiores repellendus beatae recusandae ipsum at vero vitae necessitatibus dolorem.</p>
                        <h5 className="mb-3">
                            Misi Fakultas Sains dan Teknologi Unkriswina Sumba
                        </h5>
                        <UnorderedList>
                            <ListItem>Melaksanakan pendidikan dan pengajaran berkompetensi kewirausahaan yang berlandaskan pada nilai-nilai kristiani</ListItem>
                            <ListItem>Melaksanakan pendidikan dan pengajaran berkompetensi kewirausahaan yang berlandaskan pada nilai-nilai kristiani</ListItem>
                            <ListItem>Melaksanakan pendidikan dan pengajaran berkompetensi kewirausahaan yang berlandaskan pada nilai-nilai kristiani</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum suscipit quas eos officia perspiciatis, ut fugiat. Ducimus quisquam voluptate officia ab dolor eligendi natus fugit quibusdam? Inventore, asperiores consectetur?</ListItem>
                            <ListItem>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, voluptates molestias reiciendis, rerum vero vel amet unde obcaecati corrupti ducimus ipsa ab officia laborum rem accusamus. Molestiae architecto quasi illo!</ListItem>
                        </UnorderedList>
                        <h5 className="mb-0">
                            Jajaran Pimpinan Fakultas Sains dan Teknologi Unkriswina Sumba
                        </h5>
                        <UnorderedList mt="-100px">
                            {STAFF_PIMPINAN.map((dt, i) => (
                                <ListItem key={i} >
                                    <Flex h="25px" alignItems="center" gap="5px">
                                        <Text p='0' m='0' fontWeight="bold">
                                            {dt.title}:
                                        </Text>
                                        <Text p='0' m='0'>{dt.name}</Text>
                                    </Flex>
                                </ListItem>
                            ))}
                        </UnorderedList>
                        <h5 className="mb-1">
                            Motto:
                        </h5>
                        <blockquote
                            className="mt-8"
                        >
                            Berdoa, Berpikir, Berkata, dan Berkarya
                        </blockquote>
                    </div>
                </div>
            </section>

        </>
    );
};

export default TentangFSTUnkriswina;
