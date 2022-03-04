import Link from 'next/link'
import React, { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'

const Blog = (props)=> {

  const [blogpost, setBlogpost] = useState(props.parsed) ;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Content</h2>

          {
            blogpost.map((ele)=>{
              return(
                <div className={styles.blogs}>
                  <div className="blogItem">
                  <Link href={`/blogpost/${ele.slug}`}><h3>{ele.title}</h3></Link>
                    <p>{ele.description.substr(0,380)} .....</p>
                  </div>
                </div>
              )
            })
          }
        
      </main>
    </div>
  )
}

export default Blog


export async function getServerSideProps(context) {

    let data = await fetch('http://localhost:3000/api/blogs');
    let parsed = await data.json();

  return {
    props: {parsed}, // will be passed to the page component as props
  }
}