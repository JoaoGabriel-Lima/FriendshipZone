import { useRouter } from "next/router";
import { FriendStyle } from "../../styles/pages/friendpage";
import Router from "next/router";
import axios from "axios";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function calctime(data) {
  let timetocalc = data;
  let transformtime = Math.abs(new Date(timetocalc).getTime() / 1000);
  let currentDate = Math.abs(new Date().getTime() / 1000);
  let diff = currentDate - transformtime;
  let years = Math.floor(diff / 31536000);
  let weeks = Math.floor(diff / 604800) % 52;
  let days = Math.floor(diff / 86400) % 7;
  let hours = Math.floor(diff / 4600) % 24;
  let minutos = Math.floor(diff / 60) % 60;
  let seconds = diff % 60;

  return [weeks, days, hours, minutos, years, seconds, diff];
}

export default function UserPage(props: any) {
  const [textAreaInput, setTextAreaInput] = useState("");

  useEffect(() => {
    axios
      .get("/api/savetext", {
        params: {
          amigo: name,
        },
      })
      .then((res) => {
        res && setTextAreaInput(res.data.textarea);
      });
  }, []);

  function LoadFacts() {
    const data = props.content;
    if (!data)
      return (
        <div className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center animate-pulse"></div>
      );
    if (data.funfacts != undefined) {
      return data.funfacts.map((facts, index) => (
        <div
          key={index}
          className="w-full bg-[#e1e4e8] dark:bg-[#373534] mb-3 rounded-md dark:bg-opacity-60 factsbox flex items-center justify-center"
        >
          <div className="centerbox">
            <h1
              className="dark:text-white font-semibold question text-base"
              dangerouslySetInnerHTML={{ __html: facts.pergunta }}
            ></h1>
            <h3
              className="dark:text-white opacity-80 font-normal answer text-sm"
              dangerouslySetInnerHTML={{ __html: facts.resposta }}
            ></h3>
          </div>
        </div>
      ));
    } else {
      return (
        <div className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center">
          <div className="centerbox">
            <h1 className="dark:text-white font-semibold question mb-1">
              Error ao carregar os dados
            </h1>
            <h3 className="dark:text-white opacity-80 font-normal answer text-xs">
              Dados não existente ou não foi possível se conectar ao banco de
              dados
            </h3>
          </div>
        </div>
      );
    }
  }

  const goHome = async () => {
    await axios.post("/api/savetext", {
      amigo: name,
      text: textAreaInput,
    });
    Router.push("/");
  };

  const router = useRouter();
  let name = router.query.amigo;
  let time = calctime(props.content.dataqueconhecemos);

  if (!props.content.aniversario) {
    props.content.textos = "";
    props.content.aniversario = [];
  } else {
    let fixedDate = props.content.aniversario[3].split("-");
    fixedDate[0] = new Date().getFullYear().toString();
    let dt = new Date(fixedDate.join("-"));

    let weekdays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    let weeknumber = dt.getDay();
    var week;
    for (let i = 0; i < weekdays.length; i++) {
      if (weeknumber == i) {
        week = weekdays[i];
      }
    }
  }

  let colortheme = {};
  colortheme[`${props.content.corfavorita}`] = true;
  const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <div>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        className="dark:bg-black dark:bg-opacity-95 flex flex-col items-center"
      >
        <div
          id="yellowbar"
          className="w-full h-[10px] bg-[#ffcb5f] mb-[40px]"
        ></div>
        <FriendStyle theme={colortheme}>
          <div id="namebox" className="mb-10 accentbackground accentshadow">
            <h2 className="defaultshadow2 text-[22px] font-bold">
              {props.content.displayname}
            </h2>
          </div>
          <img
            id="illustration"
            src={`/colors/${props.content.corfavorita}.svg`}
            className="mb-7"
          ></img>
          <h1
            className="text-center maintitle text-2xl font-bold dark:text-white "
            dangerouslySetInnerHTML={{
              __html: props.content.textos.frasefavorita,
            }}
          >
            {/* {props.content.textos.frasefavorita} */}
          </h1>
          <h3
            className="text-center text-base maindescription font-medium dark:text-white text-opacity-50 dark:text-opacity-75"
            dangerouslySetInnerHTML={{ __html: props.content.textos.descricao }}
          ></h3>
          <div className="timeleft p-5 bg-red-400 bg-opacity-60 dark:bg-opacity-30 flex items-center">
            {
              <h3 className="dark:text-white font-semibold text-2xl">
                Faz...
                <br />
                {time[4] >= 1 && (
                  <>
                    <span className="accentcolortext dark:accentcolortext">
                      {time[4]} {time[4] != 1 ? "anos" : "ano"}
                    </span>
                    ,
                    <br />
                  </>
                )}
                <span className="accentcolortext dark:accentcolortext">
                  {time[0]} {time[0] != 1 ? "semanas" : "semana"}
                </span>
                ,
                <br />
                <span className="accentcolortext dark:accentcolortext">
                  {time[1]} {time[1] != 1 ? "dias" : "dia"}
                </span>
                ,
                <br />
                <span className="accentcolortext dark:accentcolortext">
                  {time[2]} {time[2] != 1 ? "horas" : "hora"}
                </span>{" "}
                e
                <br />
                <span className="accentcolortext dark:accentcolortext">
                  {time[3]} {time[3] != 1 ? "minutos" : "minuto"}
                </span>
                <br />
                que você me faz feliz!
              </h3>
            }
          </div>
          <div className="iknowbox">
            <h1 className="dark:text-white self-start text-2xl mb-5">
              Nesse tempo eu sei:
            </h1>
            {LoadFacts()}
            <h3 className="text-sm mt-5 dark:text-white font-normal underline text-center opacity-60 mb-12">
              Entre muitas outras coisas
            </h3>
            <div
              id="calendar"
              className="rounded-lg bg-gray-200 dark:bg-opacity-10 flex flex-col items-center "
            >
              <div className="calendartop accentshadow text-white text-xl font-semibold flex items-center justify-center accentbackground">
                <div>
                  <div className="suspensorio"></div>
                  <div className="supensorioshadow colorshadow"></div>
                </div>
                <h2 className="calendarTextTheme">
                  {props.content.aniversario[1] &&
                    props.content.aniversario[1][0].toUpperCase() +
                      props.content.aniversario[1].slice(1)}{" "}
                  {new Date().getFullYear()}
                </h2>
                <div>
                  <div className="suspensorio2"></div>
                  <div className="supensorioshadow2 colorshadow"></div>
                </div>
              </div>
              <h2 className="dark:text-white font-semibold text-lg text-center nivertext">
                Sim, o seu aniversário está no meu calendário mágico e cai
                exatamente no dia
              </h2>
              <div
                id="NiverData"
                className="flex items-center justify-center accentbackground"
              >
                <h1 className="text-white calendarTextTheme text-2xl">
                  {props.content.aniversario[0]}
                </h1>
              </div>
              <h3 className="dark:text-white opacity-50 font-medium mt-2">
                {week}
              </h3>
            </div>
            <div
              id="motivacionaltext"
              className="accentbackground accentshadow flex justify-center items-center mb-5"
            >
              <h3
                className="text-white text-center textTheme text-lg font-medium w-11/12"
                dangerouslySetInnerHTML={{
                  __html: props.content.textos.frasemotivacional,
                }}
              ></h3>
            </div>
            <h1 className="dark:text-white text-center text-2xl font-bold mt-12 mb-12">
              <span className="accentcolortext">Obrigado</span> por chegar até
              aqui, você faz uma diferença enorme na minha vida e{" "}
              <span className="accentcolortext">quero te ter para sempre!</span>
            </h1>
            <textarea
              className="w-full text-center  bg-gray-200 dark:bg-opacity-10 rounded-md accentborder p-5 text-sm dark:text-white mb-5"
              id="textarea"
              value={textAreaInput}
              onChange={(e) => setTextAreaInput(e.target.value)}
              placeholder={
                "Aqui você pode me deixar uma mensagem para mim se quiser!" +
                "\u000A" +
                'Ela é salva ao clicar no botão "Voltar para o início"'
              }
            ></textarea>
            <div className="w-full flex items-center justify-center flex-col">
              <h3
                className="text-center dark:text-white font-light mb-5"
                id="finaltitle"
              >
                Você é o melhor amigo que eu poderia ter
              </h3>
              <button
                className="accentbackground rounded-lg animation text-white textTheme font-medium accentshadow mb-5"
                id="gohomebutton"
                onClick={() => goHome()}
              >
                Voltar para o início
              </button>
            </div>
          </div>
        </FriendStyle>
        <Footer />
      </motion.main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const res = await axios.get(
    `http://localhost:3000/api/${context.params.amigo}`
  );

  const data = await res.data;

  if (
    !data.displayname ||
    !data.dataqueconhecemos ||
    !data.textos ||
    !data.aniversario ||
    !data.corfavorita
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      content: data,
    },
  };
}
