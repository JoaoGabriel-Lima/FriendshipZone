import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {useRouter} from 'next/router'
config.autoAddCss = false;
library.add(fas, fab);
import axios from 'axios';
import {FriendStyle} from '../../styles/pages/friendpage'
import { MongoClient, Db } from 'mongodb'
import url from 'url';

// Luan,
// Obrigado por fazer essa idéia surgir <3

// Programado por João Gabriel | © Copyright 2021 - Todos os direitos reservados

import useSWR from 'swr'
import fetch from 'unfetch'
const fetcher = url => fetch(url).then(r => r.json())

function LoadFacts() {
    const router = useRouter()
    const name = router.query.amigo
  const { data, error } = useSWR(`/api/${name}`, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return (
      <div className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center animate-pulse">

      </div>
  )
    if(data.funfacts != undefined) {
        return (
            data.funfacts.map((facts, index) => (
                <div key={index} className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center">
                    <div className="centerbox">
                        <h1 className="dark:text-white font-semibold question mb-1">{facts.pergunta}</h1>
                        <h3 className="dark:text-white opacity-80 font-normal answer text-xs">{facts.resposta}</h3>
                    </div>
                </div>
            ))
        )    

    } else {
        return (
            <div className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center">
                <div className="centerbox">
                    <h1 className="dark:text-white font-semibold question mb-1">Error ao carregar os dados</h1>
                    <h3 className="dark:text-white opacity-80 font-normal answer text-xs">Dados não existente ou não foi possível se conectar ao banco de dados</h3>
                </div>
            </div>
        )
    }
}


export default function UserPage(props) {
    var currentTheme = "";
    if (typeof window !== "undefined") {
        currentTheme = localStorage.getItem("theme");
    }
    if (currentTheme == "dark") {
        document.documentElement.classList.add("dark");
    }
    if (typeof window !== "undefined") {
        
    }
    
    const router = useRouter()
    const name = router.query.amigo
    // console.log(name)
    function capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }
    var displayname = capitalize(name)
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
                <FriendStyle>
                    <div id="yellowbar"></div>
                    <div id="namebox" className="mb-10">
                        <h2>{displayname}</h2>
                    </div>
                    <img id="illustration" src="/iamge.svg" className="mb-7"></img>
                    <h1 className="text-center maintitle font-semibold dark:text-white">“I’m like a leaf in the stream of the creation, the <span className="accentcolortext">Universe</span> leads me to where I must to go”</h1>
                    <h3 className="text-center maindescription font-medium dark:text-white text-opacity-50 dark:text-opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam est viverra eros, aliquet sit enim, lacinia vitae. Ut egestas eget sit ut turpis amet. Et vulputate a urna at nunc, fringilla neque. Vitae, adipiscing quis sed tristique massa potenti scelerisque pharetra amet. Senectus lacinia diam porttitor arcu aliquam quam. Nisl, arcu velit, arcu ultricies. Purus cursus diam nisl ac cras platea tincidunt nisi. Consectetur tempus, pellentesque accumsan cursus purus. Ipsum, quis leo neque at ut nunc donec. Aliquet egestas purus mi pellentesque egestas. Consequ.</h3>
                    <div className="timeleft bg-red-400 opacity-60 dark:opacity-30">

                    </div>
                    <div className="iknowbox">
                        <h1 className="dark:text-white self-start text-2xl mb-5">Nesse tempo eu sei:</h1>
                        {LoadFacts()}
                        <h3 className="text-xs mt-5 dark:text-white font-normal underline text-center opacity-60">Entre muitas outras coisas a mais</h3>
                    </div>
                </FriendStyle>
            </main>
        </div>
    )
}
