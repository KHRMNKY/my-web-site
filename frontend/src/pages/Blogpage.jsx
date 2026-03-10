import BlogComponent from "../components/BlogComp";
import Docker from "../blogs/Docker.mdx";
import Guitar from "../blogs/guitar.mdx";




function Blogpage() {
  return (
    <div className="blog-page">
        <Docker />
        <Guitar />

    </div>
  );
}

export default Blogpage