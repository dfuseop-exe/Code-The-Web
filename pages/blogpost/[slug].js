import {useRouter} from 'next/router'
import React, { useEffect , useState } from 'react'
import styles from '../../styles/slug.module.css'

const slug = () => {
  
  const [post, setPost] = useState()
  const router = useRouter()
  useEffect(() => {

    if(!router.isReady) return ;
    const {slug} = router.query
    const getData = async () => {
      let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
      let parsed = await data.json();
      setPost(parsed)
      
    }
    getData();

  },[router.isReady])

 
  return (

    <div className={styles.container}>
      <main className={styles.main}>
        <h2>{post && post.title}</h2>
        <h6>{post && post.auther}</h6>
        <p>{post && post.description}</p>                
      </main>
    </div>   

  )
}
export default slug