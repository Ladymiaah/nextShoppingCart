import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title> Zamt Empire | Shop</title>
      <meta name="keywords" content="next" />
    </Head>
      <div className="img">
                <Image src="/img2.jpg" width={900} height={400}/>
            </div>
      <Link href="/Store" className={styles.btn}>See all product</Link>
</>    
  )
}
