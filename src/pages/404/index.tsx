import { motion } from "framer-motion";
import Router from "next/router";
import Footer from "../../components/footer";

import { BuildStyle } from "../../styles/pages/buildstyle";
export default function BuildPage() {
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
      transition={{ duration: 0.4, type: "easeInOut" }}
      className="dark:bg-black dark:bg-opacity-95 h-full flex flex-col justify-between"
    >
      <div id="yellowbar"></div>
      <BuildStyle>
        <div className="center">
          <img src="/findnothing.png" className="mb-7"></img>
          <h1 className="dark:text-white font-semibold text-center text-2xl titlesection">
            Ops, parece que sua página ainda está em{" "}
            <span className="accentcolor">construção</span> {":("}
          </h1>
          <h3 className="dark:text-white text-center text-sm mt-5 description font-medium mb-8 opacity-75">
            Caso houver problemas para entrar, por favor entre em contato
            comigo, eu te ajudo a resolver!
          </h3>
          <button
            onClick={() => Router.push("/")}
            className="dark:text-white font-medium text-center px-5"
            id="backtohome"
          >
            Voltar ao início e tentar novamente
          </button>
        </div>
      </BuildStyle>
      <Footer />
    </motion.main>
  );
}
