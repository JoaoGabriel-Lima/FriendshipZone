import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library, text } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {useRouter} from 'next/router'
import Router from 'next/router'
config.autoAddCss = false;
library.add(fas, fab);
import {BuildStyle} from '../../styles/pages/buildstyle'
export default function BuildPage() {
    var currentTheme = "";
    if (typeof window !== "undefined") {
        currentTheme = localStorage.getItem("theme");
    }
    if (currentTheme == "dark") {
        document.documentElement.classList.add("dark");
    }
    if (typeof window !== "undefined") {
    }

    function gotohome() {
        Router.push("/")
    }
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <title>FriendshipZone do Jão</title>
                <meta property="og:title" content="O seu cantinho no meu coração" />
                <meta property="og:locale" content="pt_BR"></meta>
                <meta property="og:site_name" content="FriendshipZone"></meta>
                <meta property="og:url" content="https://friendshipzone.vercel.app/" />
                <meta property="og:type" content="website"></meta>
                <meta property="og:description" content="Eu criei este lugar para que possam se lembrar o como eu gosto de todos vocês e como me fazem felizes todos os dias da minha vida."></meta>
                <meta property="og:image" content="/icon.png" />
                <meta name="theme-color" content="#FFCB5F"></meta>
                <meta charSet="UTF-8"></meta>
            </Head>
            <main className="dark:bg-black dark:bg-opacity-95">
                <BuildStyle>
                    <div id="yellowbar"></div>
                    <div className="center">
                        <img src="/findnothing.png" className="mb-7"></img>
                        <h1 className="dark:text-white text-center text-2xl titlesection">Ops, parece que sua página ainda está em <span className="accentcolor">construção</span> {":("}</h1>
                        <h3 className="dark:text-white text-center text-xs mt-5 description font-medium mb-8 opacity-75">Caso houver problemas para entrar, por favor entre em contato comigo, eu te ajudo a resolver! {":)"}</h3>
                        <button onClick={gotohome} className="dark:text-white font-medium text-center" id="backtohome">Voltar ao início e <br/> tentar novamente</button>
                    </div>
                    <div className="bottombar w-full">
                        <a target="_blank" href="https://github.com/JoaoGabriel-Lima" rel="noopener noreferrer">
                        <h4 className="text-xs text-center font-semibold">Made with all of my </h4>
                        </a>
                        <FontAwesomeIcon icon={['fas', 'heart']} className="w-3 mr-1 ml-1 text-black hover:text-red-400 cursor-pointer" /> 
                        <a target="_blank" href="https://github.com/JoaoGabriel-Lima" rel="noopener noreferrer">
                        <h4 className="text-xs text-center font-semibold">by <span className="underline">Jão</span></h4>
                        </a>
                    </div> 
                </BuildStyle>
            </main>
        </div>
    )
}