import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.flex}>
        <div>
        <Link href="/home">Home</Link>

        </div>
        <div>
        <Link href='/products'>Products</Link>
            
        </div>
        <div>
            <Link href='/blog'>Blog</Link>
        </div>

    </div>
  )
}

export default Header