import dynamic from 'next/dynamic';
import Head from "next/head";
import "../styles/globals.scss";
import { TimelineAnimationWrapper } from "../components/TimelineWrapper";
import ResizeProvider from "../components/ResizeProvider";
import { BebasNeue, SourceSansPro } from '@next/font/google'
// import localFont from '@next/font/local'
//
// const adobeCleanRegular = localFont({ src: '../public/AdobeClean-Regular.otf' })
// const asarRegular = localFont({ src: '../public/Asar Regular.ttf' })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sparkle SSG Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="preload" 
          as="image" 
          fetchpriority="high"
          imagesrcset="/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=256&amp;q=90 256w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=384&amp;q=90 384w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=640&amp;q=90 640w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=750&amp;q=90 750w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=828&amp;q=90 828w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=1080&amp;q=90 1080w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=1200&amp;q=90 1200w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=1920&amp;q=90 1920w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=2048&amp;q=90 2048w, /_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&amp;w=3840&amp;q=90 3840w" 
          imagesizes="(max-width: 840px) 100vw, 40vw"/>
          {/*prefetch makes it slower from some reason*/}
        {/* <link rel="prefetch" href="/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Fbiker.png&w=1080&q=75" /> */}
        {/*<link rel="prefetch" href="/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Frocks1.png&w=1920&q=75" />*/}
        {/*<link rel="prefetch" href="/_next/image?url=https%3A%2F%2Fpublish-p81252-e700817.adobeaemcloud.com%2F%2Fcontent%2Fdam%2Fsample-wknd-app%2Fen%2Fimage-files%2Frocks3.png&w=1080&q=75" />*/}
      </Head>

      <ResizeProvider>
        <TimelineAnimationWrapper>
          <Component {...pageProps} />
        </TimelineAnimationWrapper>
      </ResizeProvider>
    </>
  );
}

export default MyApp;
