import { getStrapiURL } from "../helpers/api-helper";

const getData = async () => {
  const url = getStrapiURL("/api/posts");

  const res = await fetch(url, { next: { revalidate: 0 } });
  // esto tenemos que transformarlo en otra promesa que nos devuelve el data
  const data = await res.json();
  // console.log(data);
  return data;
};

const Blog = async () => {
  // const data = await getData();
  // data está dentro de un data.data, por eso podemos hacer un destructurin
  const { data } = await getData();

  return (
    <div>
      <h1>Blog</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default Blog;
