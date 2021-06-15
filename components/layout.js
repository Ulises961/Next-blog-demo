import style from './layout.module.css';
import Head from 'next/dist/next-server/lib/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


const name = "Ulises";
export const siteTitle = 'Next.js Sample Website';

export default function Layout({children, home}){

    return <div className={style.container}>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta 
            name ="description"
            content = "Learn how to build a personal website using next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

    </Head>
    <header className={utilStyles.header}>
        {home ? (
            <> 
                <Image 
                    priority
                    src="/images/Headshot.jpeg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={name} />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
        ) : (
            <>
            <Link href="/"> 
                <a>
                    <Image
                        priority
                        src="/images/Headshot.jpeg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt={name} 

                    />

                </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
                <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
            </h2>
            </>
        )}
    </header>
    <main>{children}</main>
    {!home && (
        <div className={utilStyles.backToHome}>
        <Link href="/"><a> Back to Home</a></Link>
        </div>
    )}
    </div>
}