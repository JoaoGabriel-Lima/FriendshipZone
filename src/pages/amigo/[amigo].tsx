import { useRouter } from "next/router";
import { FriendStyle } from "../../styles/pages/friendpage";
import { fetchQuery } from "../../lib/facts";
import Router from "next/router";

// Luan,
// Obrigado por fazer essa idéia surgir <3

// Programado por João Gabriel | © Copyright 2021 - Todos os direitos reservados

import axios from "axios";
import Footer from "../../components/footer";

export async function getServerSideProps(context) {
  const res = await axios.get(
    `http://localhost:3000/api/${context.params.amigo}`
  );

  const data = await res.data;

  return {
    props: {
      content: data,
    },
  };
}

function calctime(data) {
  let timetocalc = data;
  let transformtime = Math.abs(new Date(timetocalc).getTime() / 1000);
  let currentDate = Math.abs(new Date().getTime() / 1000);
  // console.log(currentDate - transformtime)
  var diff = currentDate - transformtime;
  var years = Math.floor(diff / 31536000);
  var weeks = Math.floor(diff / 604800) % 52;
  var days = Math.floor(diff / 86400) % 7;
  var hours = Math.floor(diff / 4600) % 24;
  var minutos = Math.floor(diff / 60) % 60;
  var seconds = diff % 60;

  return [weeks, days, hours, minutos, years, seconds, diff];
}

export default function UserPage(props) {
  function LoadFacts() {
    const data = props.content;
    console.log(data);
    if (!data)
      return (
        <div className="w-full h-20 bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center animate-pulse"></div>
      );
    if (data.funfacts != undefined) {
      return data.funfacts.map((facts, index) => (
        <div
          key={index}
          className="w-full bg-gray-200 mb-3 rounded-md dark:bg-opacity-10 factsbox flex items-center justify-center"
        >
          <div className="centerbox">
            <h1
              className="dark:text-white font-semibold mt-2 question mb-1"
              dangerouslySetInnerHTML={{ __html: facts.pergunta }}
            ></h1>
            <h3
              className="dark:text-white opacity-80 mb-2 font-normal answer text-xs"
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
  if (!(typeof window === "undefined")) {
    if (
      props.content.displayname == undefined ||
      props.content.dataqueconhecemos == undefined ||
      props.content.textos == undefined ||
      props.content.aniversario == undefined ||
      props.content.corfavorita == undefined
    ) {
      Router.push("/ops");
    }
  }
  async function gohome() {
    // var textarea = (document.getElementById("textarea") as HTMLTextAreaElement)
    var textarea = document.getElementById("textarea") as HTMLTextAreaElement;
    var res = await axios.post("/api/savetext", {
      amigo: name,
      text: textarea.value,
    });
    console.log(res.data);
    if (!(typeof window === "undefined")) {
      Router.push("/");
    }
  }
  // console.log(props.content)
  var currentTheme = "";
  if (typeof window !== "undefined") {
    currentTheme = localStorage.getItem("theme");
  }
  if (currentTheme == "dark") {
    document.documentElement.classList.add("dark");
  }
  if (typeof window !== "undefined") {
  }
  const router = useRouter();

  const name = router.query.amigo;

  // console.log(name)
  function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
  }
  var displayname = capitalize(name);
  // console.log(props.content.dataqueconhecemos)
  var time = calctime(props.content.dataqueconhecemos);
  if (props.content.aniversario == undefined) {
    props.content.textos = "";
    props.content.aniversario = [];
  } else {
    var dt = new Date(props.content.aniversario[3]);
    var weekdays = [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ];
    var weeknumber = dt.getDay();
    var week;
    for (var i = 0; i < weekdays.length; i++) {
      if (weeknumber == i) {
        week = weekdays[i];
      }
    }
  }
  var colortheme = {};
  colortheme[`${props.content.corfavorita}`] = true;
  if (typeof window !== "undefined") {
    document.addEventListener("DOMContentLoaded", async function () {});
  }
  (async function () {
    if (typeof window !== "undefined") {
      // console.log("got it")
      if (document.readyState !== "loading") {
        console.log("document is already ready, just execute code here");
        initCode();
      } else {
        document.addEventListener("DOMContentLoaded", async function () {
          console.log("document was not ready, place code here");
          initCode();
        });
      }
      // console.log(name)
    }
  })();

  async function initCode() {
    var res = await axios.get("/api/savetext", {
      params: {
        amigo: name,
      },
    });
    var textarea = document.getElementById("textarea") as HTMLTextAreaElement;
    if (textarea != null) {
      if (textarea.value != "undefined") {
        textarea.value = res.data.textarea;
      } else {
        textarea.value = "";
      }
    }
  }

  // var stylesheet = document.styleSheets[0]
  // stylesheet.insertRule(".accentbackground {background-color: #9756ff !important;}", 0);
  // let dom = new DOMParser().parseFromString(string_of_html, 'text/html');

  return (
    <div>
      <main className="dark:bg-black dark:bg-opacity-95 flex flex-col items-center">
        <div
          id="yellowbar"
          className="w-full h-[10px] bg-[#ffcb5f] mb-[40px]"
        ></div>
        <FriendStyle theme={colortheme}>
          <div id="namebox" className="mb-10 accentbackground defaultshadow">
            <h2 className="defaultshadow2">{props.content.displayname}</h2>
          </div>
          <img
            id="illustration"
            src={`/colors/${props.content.corfavorita}.svg`}
            className="mb-7"
          ></img>
          <h1
            className="text-center maintitle font-semibold dark:text-white"
            dangerouslySetInnerHTML={{
              __html: props.content.textos.frasefavorita,
            }}
          ></h1>
          <h3
            className="text-center maindescription font-medium dark:text-white text-opacity-50 dark:text-opacity-75"
            dangerouslySetInnerHTML={{ __html: props.content.textos.descricao }}
          ></h3>
          <div className="timeleft p-5 bg-red-400 bg-opacity-60 dark:bg-opacity-30 flex items-center">
            {
              <h3 className="dark:text-white font-semibold text-2xl">
                Faz...
                <br />
                {time[4] >= 1 && (
                  <>
                    <span className="accentcolortext">
                      {time[4]} {time[4] != 1 ? "anos" : "ano"}
                    </span>
                    ,
                    <br />
                  </>
                )}
                <span className="accentcolortext">
                  {time[0]} {time[0] != 1 ? "semanas" : "semana"}
                </span>
                ,
                <br />
                <span className="accentcolortext">
                  {time[1]} {time[1] != 1 ? "dias" : "dia"}
                </span>
                ,
                <br />
                <span className="accentcolortext">
                  {time[2]} {time[2] != 1 ? "horas" : "hora"}
                </span>{" "}
                e
                <br />
                <span className="accentcolortext">
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
            <h3 className="text-xs mt-5 dark:text-white font-normal underline text-center opacity-60 mb-12">
              Entre muitas outras coisas a mais
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
                <h2>{capitalize(props.content.aniversario[1])}</h2>
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
                <h1 className="text-white text-2xl">
                  {props.content.aniversario[0]}
                </h1>
              </div>
              <h3 className="dark:text-white opacity-50 font-medium mt-2">
                {week}
              </h3>
            </div>
            <div
              id="motivacionaltext"
              className="accentbackground defaultshadow mb-16 flex justify-center items-center mb-5"
            >
              <h3
                className="dark:text-white text-lg w-11/12"
                dangerouslySetInnerHTML={{
                  __html: props.content.textos.frasemotivacional,
                }}
              ></h3>
            </div>
            <h1 className="dark:text-white text-center text-xl mb-16">
              <span className="accentcolortext">Obrigado</span> por chegar até
              aqui, você faz uma diferença enorme na minha vida e{" "}
              <span className="accentcolortext">quero te ter para sempre!</span>
            </h1>
            <textarea
              className="w-full bg-gray-200 dark:bg-opacity-10 rounded-md accentborder p-2 text-sm dark:text-white mb-5"
              id="textarea"
              placeholder='Aqui você pode me deixar uma mensagem fofa se quiser! (Ele salva ao clicar no botão "Voltar para o início")'
            ></textarea>
            <div className="w-full flex items-center justify-center flex-col">
              <h3
                className="text-center dark:text-white font-light mb-5"
                id="finaltitle"
              >
                Você é o melhor amigo que eu poderia ter
              </h3>
              <button
                className="accentbackground rounded-lg animation text-white font-medium accentshadow mb-5"
                id="gohomebutton"
                onClick={gohome}
              >
                Voltar para o início
              </button>
            </div>
          </div>
        </FriendStyle>
        <Footer />
      </main>
    </div>
  );
}
