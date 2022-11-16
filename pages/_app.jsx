import dynamic from 'next/dynamic';
import Head from "next/head";
import "../styles/globals.scss";
import { TimelineAnimationWrapper } from "../components/TimelineWrapper";
import ResizeProvider from "../components/ResizeProvider";
//import { BebasNeue, SourceSansPro } from '@next/font/google'
// import localFont from '@next/font/local'
//
// const adobeCleanRegular = localFont({ src: '../public/AdobeClean-Regular.otf' })
// const asarRegular = localFont({ src: '../public/Asar Regular.ttf' })

// const ResizeProviderDynamic = dynamic(() => import('../components/ResizeProvider'))
// const TimelineAnimationWrapperDynamic = dynamic(() => import('../components/TimelineWrapper'))

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>Sparkle SSG Demo</title>
                <link rel="icon" href="/favicon.ico"/>

                <link
                    fetchpriority="high"
                    rel="preload"
                    href="/_next/static/chunks/framework-3b5a00d5d7e8d93b.js"
                    as="script"/>

                {/* mobile*/}

                {/*biker_m.png*/}
                <link rel="preload"
                      fetchpriority="high"
                      media="(max-width: 840px)"
                      as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/biker_m?w=3840 3840w"
                      imageSizes="50vw"/>

                {/*sky_m.jpg*/}
                <link
                    rel="preload"
                    fetchpriority="high"
                    media="(max-width: 840px)"
                    as="image"
                    imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/sky_m?w=3840 3840w"
                    imageSizes="70vw"/>

                {/* rocks1_m.png */}
                <link
                    rel="preload"
                    as="image"
                    fetchpriority="high"
                    media="(max-width: 840px)"
                    imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/rocks1_m?w=3840 3840w"
                    imageSizes="50vw"/>

                {/* rocks3_m.pn */}
                <link
                    rel="preload"
                    as="image"
                    fetchpriority="high"
                    media="(max-width: 840px)"
                    imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/rocks3_m?w=3840 3840w"
                    imageSizes="50vw"/>

                {/* desktop */}

                {/* rocks1.png */}
                <link fetchpriority="high" media="(min-width: 841px)" rel="preload" as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/rocks1?w=3840 3840w"
                      imageSizes="50vw"/>

                {/* rocks3.png */}
                <link fetchpriority="high" media="(min-width: 841px)" rel="preload" as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/rocks3?w=3840 3840w"
                      imageSizes="50vw"></link>

                {/* biker.png */}
                <link fetchpriority="high" media="(min-width: 841px)" rel="preload" as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/biker?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/biker?w=3840 3840w"
                      imageSizes="50vw"/>

                {/* sky.jpg */}
                <link fetchpriority="high" media="(min-width: 841px)" rel="preload" as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/sky?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/sky?w=3840 3840w"
                      imageSizes="70vw"></link>

                {/* rocks2.png */}
                <link fetchpriority="high" media="(min-width: 841px)" rel="preload" as="image"
                      imageSrcSet="https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=384 384w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=640 640w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=750 750w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=828 828w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=1080 1080w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=1200 1200w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=1920 1920w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=2048 2048w, https://smartimaging.scene7.com/is/image/kasingh/rocks2?w=3840 3840w"
                      imageSizes="50vw"/>
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
