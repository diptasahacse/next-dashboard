import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Documents = () => {
    return (
        <Html data-theme="light">
            <Head>
                {/* <link rel="shortcut icon" href="/images/fav.png" /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Documents