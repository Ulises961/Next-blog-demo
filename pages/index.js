import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import  utilStyle from '../styles/utils.module.css'
import { getSortedPostData } from '../lib/post'

export async function getStaticProps() {
  
  const allPostData = getSortedPostData();
    return { 
      props: {
        allPostData} 
    };
}

export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <section className={utilStyle.headingMd}>
        <p>Hi there, <br/>This is my first page using {' '} <a> Next.js </a>{' '} and I am preety excited about it.
        Have a look!</p>
        
      </section>

      <section className={`${utilStyle.headingMd}${utilStyle.padding1px}`}>
      <h2 className = {utilStyle.headingLg}>Blog</h2>
      <ul className={utilStyle.list}>
        {allPostData.map(({id, date, title}) => (
          <li className={utilStyle.listItem} key={id}>
            <Link href={`/posts/${id}`}><a>{title}</a></Link>
            <br /> 
            <small className={utilStyle.lightText}><Date dateString={date} /></small>
          </li>
        ))}
        </ul>
       
      </section>
      
    </Layout>
  )
}
