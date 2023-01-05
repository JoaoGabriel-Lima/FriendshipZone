import { AnimatePresence } from "framer-motion";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="O seu cantinho no meu coração" />
        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:site_name" content="JãoSpace"></meta>
        <meta property="og:url" content="https://jaospace.vercel.app/" />
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="Eu criei este site com o objetivo de preservar os momentos
            inesquecíveis que compartilhei com aquelas pessoas que fizeram a
            diferença em minha vida ao longo dos últimos anos. Além de ser uma
            maneira divertida de manter contato e compartilhar essas lembranças
            com meus amigos, acredito que este site também será uma ótima
            ferramenta para documentar esses momentos e ter acesso a eles no
            futuro. Ele pode se tornar um lugar onde possamos reviver esses
            momentos e compartilhá-los com outras pessoas que apreciem esses
            momentos tanto quanto nós."
        ></meta>
        <meta property="og:image" content="/icon.png" />
        <meta name="theme-color" content="#FFCB5F"></meta>
        <meta charSet="UTF-8"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
