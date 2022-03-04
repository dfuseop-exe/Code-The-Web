import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/slug.module.css";

const slug = (props) => {
  const [post, setPost] = useState(props.parsed);
  
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
export default slug;




export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${context.query.slug}`);
  let parsed = await data.json();

  return {
    props: { parsed }, // will be passed to the page component as props
  };
}
