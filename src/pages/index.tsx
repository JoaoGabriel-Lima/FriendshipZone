import Head from 'next/head'
import {StyleContainer} from '../styles/pages/ladingpage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Router from 'next/router'
config.autoAddCss = false;
library.add(fas, fab);

var currentTheme = "";
if (typeof window !== "undefined") {
  currentTheme = localStorage.getItem("theme");
}
if (currentTheme == "dark") {
  document.documentElement.classList.add("dark");
}
if (typeof window !== "undefined") {
  document.getElementById("slider").addEventListener("click", function() {
    if(currentTheme == "dark"){
      document.documentElement.classList.toggle("dark");
      currentTheme = "light";
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.toggle("dark");
      currentTheme = "dark";
      localStorage.setItem("theme", "dark")
    }
    
    console.log("changed")


  })
}
(function () {
  if (typeof window !== "undefined") {
    if (localStorage.getItem('theme') === 'dark') {
        let slider = (document.getElementById('slider') as HTMLInputElement)
        slider.checked = false;
    } else {
        let slider = (document.getElementById('slider') as HTMLInputElement)
        slider.checked = true;
    }
  }
})();

export default function Home() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <title>Create Next App</title>
      </Head>

      <main>
        <StyleContainer className="dark:bg-black dark:bg-opacity-95">
          <h2 className="maintitle text-black text-center font-semibold text-xl mt-14 dark:text-white">Bem vindo ao seu cantinho especial no meu coração</h2>
          <img className="mainimg" src="/landinglogo.png"></img>
          <h1 className="text-center text-gray-800 maindescription dark:text-white">“Eu sou bobo às vezes mas <span className="AccentColor opacity-100">amo</span> todos vocês!”</h1>
          <h3 className="maindescription2 text-center text-black mt-4 text-sm font-medium opacity-90 dark:text-white">Eu criei este lugar para que possam se lembrar o como eu gosto de todos vocês e como me fazem felizes todos os dias da minha vida.</h3>
          <form>
            <input type="text" id="nameinput" className="bg-gray-100 dark:bg-white dark:bg-opacity-5 dark:text-white placeholder-black::placeholder dark:placeholder-white::placeholder" placeholder="Escreva o seu primeiro nome"></input>
            <button type="button" id="buttoninput" className="font-medium text-center">Explorar o meu <br/> cantinho especial</button>
          </form>
          <a className="text-center font-semibold text-xs underline text-black mt-6 mb-5 opacity-60 dark:opacity-70 dark:text-white dark:font-medium">Problemas? Fala comigo que eu resolvo!</a>
          
          {/* <div id="themetoggle">Trocar Tema</div> */}
          <label id="switch" className="switch">
            <input type="checkbox" id="slider"/>
            <span className="slider round"></span>
          </label>

          <div className="bottombar w-full">
            <h4 className="text-xs text-center font-semibold">{"Made with all of my <3 by Jão"}</h4>
          </div>

          <ellipse className="ellipse ellipse1 hidden dark:block"></ellipse>
          <ellipse className="ellipse ellipse2 hidden dark:block"></ellipse>
        </StyleContainer>
      </main>
    </div>
  )
}
