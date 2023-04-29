import React from "react";
import SingleBlog from "@/Components/Blogs/SingleBlog";
import { useRouter } from "next/router";

const SingleBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <SingleBlog id={id} />
    </>
  );
};

export default SingleBlogPage;
