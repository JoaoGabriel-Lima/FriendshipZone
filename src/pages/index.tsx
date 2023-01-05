import { StyleContainer } from "../styles/pages/ladingpage";
import Router from "next/router";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isSearching, setIsSearching] = useState(false);
  const [input_name, setInputName] = useState("");

  const findFriendPage = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    let router = `/amigo/${input_name.trim().toLowerCase()}`;
    if (router == "/amigo/") {
      Router.push("/ops");
    } else {
      Router.push(router);
    }
    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let localTheme = localStorage.getItem("theme");
      !localTheme &&
        (localTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
      localTheme && setTheme(localTheme);
      localStorage.setItem("theme", localTheme);
      localTheme == "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
      localTheme == "dark" ? setIsChecked(false) : setIsChecked(true);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      setIsChecked(false);
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      setIsChecked(true);
      document.documentElement.classList.remove("dark");
    }
  };
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <StyleContainer className="dark:bg-black dark:bg-opacity-95">
        <h2 className="px-5 maintitle text-black text-center font-semibold text-xl mt-14 dark:text-white">
          Bem-vindo ao seu cantinho especial no meu coração
        </h2>
        <img className="mainimg" src="/landinglogo.png"></img>
        <h1 className="text-center text-gray-800 maindescription dark:text-white">
          “Eu sou bobo às vezes mas{" "}
          <span className="AccentColor opacity-100">amo</span> todos vocês!”
        </h1>
        <h3 className="maindescription2 text-sm text-center text-black mt-4 font-medium opacity-90 dark:text-white">
          Eu criei este site com o objetivo de preservar os momentos
          inesquecíveis que compartilhei com aquelas pessoas que fizeram a
          diferença em minha vida ao longo dos últimos anos. Além de ser uma
          maneira divertida de manter contato e compartilhar essas lembranças
          com meus amigos, acredito que este site também será uma ótima
          ferramenta para documentar esses momentos e ter acesso a eles no
          futuro. Ele pode se tornar um lugar onde possamos reviver esses
          momentos e compartilhá-los com outras pessoas que apreciem esses
          momentos tanto quanto nós.
        </h3>
        <form>
          <input
            type="text"
            id="nameinput"
            className="bg-gray-100 dark:bg-white dark:bg-opacity-5 dark:text-white placeholder-black::placeholder dark:placeholder-white::placeholder"
            placeholder="Escreva o seu primeiro nome"
            disabled={isSearching}
            onChange={(e) => setInputName(e.target.value)}
            value={input_name}
          ></input>
          <button
            type="submit"
            id="buttoninput"
            className="font-medium text-center flex justify-center items-center"
            onClick={(e) => findFriendPage(e)}
            disabled={isSearching}
          >
            {isSearching && <FiLoader className="animate-spin mr-2" />}
            {isSearching
              ? "Procurando o seu cantinho..."
              : "Explorar o meu cantinho especial"}
          </button>
        </form>
        <a
          href="https://joaolima.vercel.app/"
          target="_blank"
          className="px-5 cursor-pointer text-center font-semibold text-xs hover:underline text-black mt-6 mb-5 opacity-60 dark:opacity-70 dark:text-white dark:font-medium"
        >
          Problemas? Fala comigo que eu resolvo!
        </a>

        <label id="switch" className="switch">
          <input
            type="checkbox"
            id="slider"
            checked={isChecked}
            onChange={() => toggleTheme()}
          />
          <span className="slider round"></span>
        </label>
        <Footer />
      </StyleContainer>
    </motion.main>
  );
}
