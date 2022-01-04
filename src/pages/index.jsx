import Head from 'next/head'
import Nav from 'components/nav'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta content='Generated by create next app' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      Test Ping
      <Nav />
    </div>
  )
}
