import config from "@/config/config.json";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa/index.js";
import ImageFallback from "../helpers/ImageFallback";
import { Image } from "@chakra-ui/react";


interface IProps {
  data: {
    title: string;
    image: string;
    author: string;
    date: any;
    description: string;
    slug: string;
  }
}

const ProductCard: React.FC<IProps> = (props) => {
  // const { summary_length, blog_folder } = config.settings;
  return (
    <div className="bg-body dark:bg-darkmode-body">
      {/* {image && ( */}
      <Image
        className="mb-6 w-full rounded"
        src={props.data.image}
        alt={props.data.title}
        width={200}
        height={230}
      />
      {/* )} */}
      <h4 className="mb-3">
        <Link href={`/katalog-produk/${props.data.slug}`}>{props.data.title}</Link>
      </h4>
      <ul className="mb-4">
        <li className="mr-4 inline-block">
          <a href={`/authors/${slugify(props.data.author)}`}>
            <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
            {humanize(props.data.author)}
          </a>
        </li>
        {/* <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
          {categories?.map((category: string, index: number) => (
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </Link>
          ))}
        </li> */}
        {props.data.date && <li className="inline-block">{dateFormat(props.data.date)}</li>}
      </ul>
      <p className="mb-6">
        {plainify(props.data.description!.slice(0, Number(100)))}
      </p>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/katalog-produk/${props.data.slug}`}
      >
        Cek detail
      </Link>
    </div>
  );
};

export default ProductCard;
