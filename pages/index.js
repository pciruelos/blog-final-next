import fs from "fs";
import path from "path";
import Layout from "../components/Layout";
import matter from 'gray-matter'
import Link from 'next/link'
import Post from "../components/Post";
import {sortByDate} from '../utils'


export default function Home({posts}) {
  console.log(posts)
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Latest Post</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts.map((p,i) => (
          <Post key={i} post={p} />
        )  )}
      </div>
      <Link href='/blog'><a className="block text-center border border-[#A8518A] text-[#A8518A] rounded-md py-4 my-4 transition duration-500 ease select-one hover:text-white hover:bg-[#A8518A] focus:outline-none focus:shadow-outline w-full" >More Posts</a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const {data:frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });


  return {
    props: {
      posts: posts.sort(sortByDate).slice(0,6)
    },
  };
}
