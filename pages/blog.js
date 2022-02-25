import Link from 'next/link'
import React from 'react'
import styles from '../styles/Blog.module.css'

const Blog = ()=> {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>Popular Content</h2>

        
          <div className={styles.blogs}>
            <div className="blogItem">
            <Link href={'/blogpost/How to learn Javascript in 2022'}><h3>How to learn Javascript in 2022</h3></Link>
              <p>javascript is a programming language</p>
            </div>
          </div>
        

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn Javascript in 2022</h3>
            <p>javascript is a programming language</p>
          </div>
        </div>

        <div className="blogs">
          <div className="blogItem">
            <h3>How to learn Javascript in 2022</h3>
            <p>javascript is a programming language</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Blog