import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/slug.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  const [post, setPost] = useState(props.myBlog);
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{post && post.title}</h2>
        <h6>{post && post.auther}</h6>
        <p>{post && post.description}</p>
      </main>
    </div>
  );
};


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'how-to-learn-javascript'} } ,
      { params: { slug: 'how-to-learn-next'} } ,
      { params: { slug: 'how-to-learn-react'} } ,
    ],
    fallback: true // false or 'blocking'
  };
}

//this is used to get props on server 
export async function getStaticProps(context) {

  const { slug } = context.params ;

  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
 
  return {
    props: { myBlog: JSON.parse(myblog) }, // will be passed to the page component as props
  };
}

export default Slug;