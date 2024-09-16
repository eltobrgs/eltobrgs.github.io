// pages/agradecimento.js
import Head from 'next/head';
import Link from 'next/link';
export default function Agradecimento() {
  return (
    <div className='mainAgrad'>
      <Head>
        <title>Agradecimento</title>
        <meta name="description" content="Página de agradecimento pelo contato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className='textAgr'>Obrigado pelo contato</h1>
      <p className='paragrafoAgr'>Em breve entrarei em contato!!</p>
      <Link href="index.jsx">
        <a className='btnAgr'>Home</a>
      </Link>
    </div>
  );
}
