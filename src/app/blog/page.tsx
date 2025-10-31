import PageHeader from "@/components/PageHeader";
import { fetchApi } from "../../helpers/fetch-api";
import PageCardImage from "@/components/PageCardImage";
import { Post } from "../../interfaces/post";
import PagePagination from "@/components/PagePagination";

const getData = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  const urlParamsObject = {
    // el populate es para traernos toda la información del objeto más las imagenes
    populate: "*",
    // para que nos lo devuelva ordenado ascendente
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);

  return {
    data,
    pagination: meta.pagination,
  };
};

interface Props {
  searchParams: {
    page?: string; // el simbolo ? significa que es opcional
  };
}

const Blog = async ({ searchParams }: Props) => {
  const { page } = await searchParams;
  // const data = await getData();
  // data está dentro de un data.data, por eso podemos hacer un destructurin
  let pageNumber = page ? parseInt(page) : 1;

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  const { data, pagination } = await getData(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader text="Latest Posts" />
      <PagePagination pagination={pagination} />
      <div className="grid gap-4">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
