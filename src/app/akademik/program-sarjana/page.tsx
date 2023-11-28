import BlogCard from "@/components/BlogCard";
import Disqus from "@/components/Disqus";
import Share from "@/components/Share";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { Image, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import {
    FaRegClock,
    FaRegFolder,
    FaRegUserCircle,
} from "react-icons/fa/index.js";
import { FaCheck } from "react-icons/fa6";
import { MdCheckCircle } from "react-icons/md"
import { Button, Feature } from "@/types";


const AkedemikProgramSarjana = () => {
    const programSarjana = getListPage("programSarjana/_index.md");
    const { frontmatter } = programSarjana;
    const {
        banner,
        features,
    }: {
        banner: { title: string; image: string; content?: string; button?: Button };
        features: Feature[];
    } = frontmatter;

    return (
        <>
            <SeoMeta
                title="Program Sarjana"
                meta_title=""
                description="Mete description"
                image="/images/image-placeholder.png"
            />
            <section className="section pt-7">
                <div className="container">
                    <h3>Program Sarjana</h3>
                    <p className="mt-2">Pada Fakultas Sains Dan Teknologi Universitas Kristen Wira Wacana terdapat 5 Program Sarjana Strata 1 (S1)</p>
                </div>


                {features.map((feature, index: number) => (
                    <section
                        key={index}
                        className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
                    >
                        <div className="container">
                            <div className="row items-center justify-between">
                                <div
                                    className={`mb:md-0 mb-6 md:col-5 ${index % 2 !== 0 && "md:order-2"
                                        }`}
                                >
                                    <Image
                                        src={feature.image}
                                        height={480}
                                        width={520}
                                        alt={feature.title}
                                    />
                                </div>
                                <div
                                    className={`md:col-7 lg:col-6 ${index % 2 !== 0 && "md:order-1"
                                        }`}
                                >
                                    <h3
                                        className="mb-4"
                                        dangerouslySetInnerHTML={markdownify(feature.title)}
                                    />
                                    <p
                                        className="mb-8 text-lg"
                                        dangerouslySetInnerHTML={markdownify(feature.content)}
                                    />
                                    {feature.button.enable && (
                                        <a
                                            className="btn btn-primary mt-5"
                                            href={feature.button.link}
                                        >
                                            {feature.button.label}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

            </section>
        </>
    );
};

export default AkedemikProgramSarjana;
