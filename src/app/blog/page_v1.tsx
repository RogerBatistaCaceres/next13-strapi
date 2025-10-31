import { getStrapiURL } from "../../helpers/api-helper";

const getData = async () => {
  const url = getStrapiURL("/api/posts");

  const res = await fetch(
    // "https://strapi-webserve-7h97.onrender.com/api/posts"
    // "http://127.0.0.1:1337/api/posts"
    // para que me borre el cache ...
    "http://127.0.0.1:1337/api/posts",
    //{ next: { cache: "no-store" } }
    // se refrescan los datos si ha pasado más de xx tiempo desde que se realizó el primer fetch
    { next: { revalidate: 0 } }
  );
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
