import Link from 'next/link'
import React, { useEffect , useState } from 'react'
import styles from '../styles/Blog.module.css'
import * as fs from 'fs';

const Blog = (props)=> {

  const [blogpost, setBlogpost] = useState(props.allData) ;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Content</h2>

          {
            blogpost.map((ele)=>{
              return(
                <div className={styles.blogs} key={ele.slug}>
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


export async function getStaticProps(context) {

  let data = await fs.promises.readdir('blogdata');
    let allData = [] ;
    let myfile ;
    for (let i = 0 ; i < data.length ; i++) {
      const ele = data[i];
      myfile = await fs.promises.readFile(('blogdata/' + ele) , 'utf-8');
      allData.push(JSON.parse(myfile));
    }

  return {
    props: {allData}, // will be passed to the page component as props
  }
}