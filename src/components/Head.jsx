import Head from 'next/head';

export default function HeadComponent() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Fontes do Google */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Bootstrap Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" 
      />
      
      {/* FontAwesome */}
      <script 
        src="https://kit.fontawesome.com/73962faf92.js" 
        crossOrigin="anonymous" 
        defer
      ></script>
      
      {/* Favicon */}
      <link 
        rel="shortcut icon" 
        type="image/x-icon" 
        href="/img/funny.ico" 
      />
      
      {/* Título da Página */}
      <title>PÁGINA WEB</title>
      
    </Head>
  );
}
