import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {useRouter} from 'next/router'
config.autoAddCss = false;
library.add(fas, fab);
import axios from 'axios'


export default function UserPage() {
    
    const router = useRouter()
    const name = router.query.amigo
    console.log(name)
    function capitalize(s) {
        return s && s[0].toUpperCase() + s.slice(1);
    }
    var resposta = "teste"
    axios
      .post("/api/getpage", {amigo : name})
      .then(response => {
        
        (resposta =(response.data.cor))
        change(resposta)

        
    })
    function change(resposta) {
        if(resposta != undefined) {
            document.getElementById("favoritecolor").innerHTML = "Sua cor favorita é " + resposta;
        } else {
            document.getElementById("favoritecolor").innerHTML = "Error a carregar os dados";
        }
    }
    return (
        <div>
            <h1 className="text-5xl text-purple-700">Olá {capitalize(name)}</h1>
            <h2 id="favoritecolor"></h2>
        </div>
    )
}