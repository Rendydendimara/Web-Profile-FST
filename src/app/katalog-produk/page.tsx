import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
const { blog_folder, pagination } = config.settings;


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


// for all regular pages
const KatalogProduk = () => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, description, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const allCategories = getAllTaxonomy(blog_folder, "categories");
  const categories = getTaxonomy(blog_folder, "categories");
  const tags = getTaxonomy(blog_folder, "tags");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = sortedPosts.slice(0, pagination);

  return (
    <>
      <SeoMeta
        title="Katalog Produk"
        meta_title="Katalog Produk"
        description="Katalog Produk"
        image={image}
      />
      <PageHeader title="Katalog Produk" />
      <section className="section">
        <div className="container">
          <div className="row">
            {DUMMY.map((post: any, index: number) => (
              <div key={index} className="mb-14 md:col-6 lg:col-4">
                <ProductCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KatalogProduk;
