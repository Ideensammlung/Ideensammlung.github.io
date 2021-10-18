import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>Ideensammlung</title>

      {/* Global site tag (gtag.js) - Google Analytics */ ''}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-W1NLWDJEV1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W1NLWDJEV1');
          `,
        }}
      />
    </Head>
  )
}
