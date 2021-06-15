import Link from 'next/link';
import Head from 'next/dist/next-server/lib/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
    <Layout>
        <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <section>
        <h1>First Post</h1>
   
        </section>
    </Layout>

    )
  }
  