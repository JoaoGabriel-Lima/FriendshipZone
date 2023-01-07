import styled, { css } from "styled-components";

export const FriendStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Inter";
  font-weight: 600;
  max-width: 700px;
  /* * {
        transition: 1s;
    } */
  #yellowbar {
    width: 100%;
    height: 10px;
    background-color: #ffcb5f;
    margin-bottom: 40px;
  }
  #namebox {
    min-height: 48px;
    width: 80%;
    max-width: 400px;
    background-color: #ff565e;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    /* box-shadow: 0px 4px 0px 0px #ffb61d; */
  }
  #namebox h2 {
    /* font-size: 22px; */
    margin-left: 20px;
    margin-right: 20px;
    text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.4);
    color: white;
  }
  #illustration {
    /* fill: #FFB61D; */
    width: 88%;
    max-width: 500px;
  }
  .maintitle {
    width: 80%;
    /* font-size: 18px; */
  }
  .accentcolortextlight {
    color: #ff565e;
  }
  .accentcolortext {
    color: #ff565e;
  }

  .accentbackground {
    background-color: #ff565e;
  }
  .defaultshadow {
    box-shadow: 0px 4px 0px 0px #ffcb5f !important;
  }
  #motivacionaltext {
    width: 100%;
    border-radius: 7px;
    min-height: 120px;
  }
  .maindescription {
    margin-top: 22px;
    font-size: 15px;
    width: 90%;
  }
  .timeleft {
    margin-top: 19px;
    margin-bottom: 31px;
    border-radius: 11px;
    width: 90%;
    min-height: 215px;

    /* background-color: #643D3C; */
  }
  .iknowbox {
    width: 90%;
  }

  .factsbox {
    width: 100%;
    padding: 20px 15px;
    min-height: 80px;
  }
  .question + .answer {
    margin-top: 5px;
  }

  .centerbox {
    /* background-color: red; */
    width: 100%;
  }
  #calendar {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    border: solid 2px rgba(255, 255, 255, 0.09);
    position: relative;
  }
  .calendartop {
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 100%;
    height: 60px;
    background-color: #ff565e;
    box-shadow: 0px 4px 0px 0px #be444a;
    position: relative;
  }
  .suspensorio {
    background-color: #c4c4c4;
    border-radius: 4px;
    height: 52px;
    width: 24px;
    position: absolute;
    left: 30px;
    top: -20px;
    z-index: 5;
  }
  .supensorioshadow {
    position: absolute;

    width: 39px;
    height: 32px;
    background-color: #be444a;
    border-radius: 999px;
    left: 22px;
    top: 10px;
  }

  .suspensorio2 {
    background-color: #c4c4c4;
    border-radius: 4px;
    height: 52px;
    width: 24px;
    position: absolute;
    right: 30px;
    top: -20px;
    z-index: 5;
  }
  .supensorioshadow2 {
    position: absolute;

    width: 39px;
    height: 32px;
    background-color: #be444a;
    border-radius: 999px;
    right: 22px;
    top: 10px;
  }
  .nivertext {
    width: 90%;
    margin-top: 25px;
    margin-bottom: 16px;
  }
  #NiverData {
    width: 55px;
    height: 55px;
    background-color: #ff565e;
    border-radius: 999px;
  }
  .colorshadow {
    background-color: #be444a;
  }
  .accentshadow {
    box-shadow: 0px 4px 0px 0px #be444a;
  }

  #textarea {
    min-height: 200px;
  }
  .accentborder {
    border: solid 2px #be444a;
  }
  #finaltitle {
    width: 200px;
  }
  #gohomebutton {
    width: 60%;
    height: 45px;
  }
  .animation {
    top: 0;
    position: relative;
    box-shadow: 0px 4px 0px 0px #be444a;
    transition: all 175ms linear !important;
    -webkit-transition: all 175ms linear !important;
    -moz-transition: all 175ms linear !important;
    -ms-transition: all 175ms linear !important;
    -o-transition: all 175ms linear !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .animation:active {
    top: 4px;
    box-shadow: 0px 1px 0px 0px #be444a;
  }

  *:focus {
    outline: none;
  }
  ${(props) =>
    props.theme.laranja &&
    css`
      .textTheme {
        color: black;
      }

      .accentcolortext {
        color: #e4a222 !important;
      }
      .accentbackground {
        background-color: #ff9d56 !important;
      }
      .bg-red-400 {
        background-color: rgba(255, 157, 86, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(190, 127, 68) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(190, 127, 68) !important;
      }
      .accentborder {
        border: solid 2px rgb(190, 127, 68) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(190, 127, 68);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(190, 127, 68);
      }
    `}

  ${(props) =>
    props.theme.amarelo &&
    css`
      .textTheme {
        color: black;
      }
      .calendarTextTheme {
        color: black;
      }
      .accentcolortext {
        color: #e8bb5e !important;
      }
      .accentbackground {
        background-color: #ffcb5f !important;
      }
      .bg-red-400 {
        background-color: rgba(255, 203, 95, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(190, 170, 68) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(190, 170, 68) !important;
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px #ff6056 !important;
      }
      .accentborder {
        border: solid 2px rgb(190, 170, 68) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(190, 170, 68);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(190, 170, 68);
      }
    `}


    ${(props) =>
    props.theme.verde &&
    css`
      .textTheme {
        color: black;
      }
      .accentcolortext {
        color: #73bf67 !important;
      }
      .accentbackground {
        background-color: #87c159 !important;
      }
      .bg-red-400 {
        background-color: rgba(155, 222, 103, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(95, 164, 63) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(95, 164, 63) !important;
      }
      .accentborder {
        border: solid 2px rgb(95, 164, 63) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(95, 164, 63);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(95, 164, 63);
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px rgb(95, 164, 63) !important;
      }
    `}

    ${(props) =>
    props.theme.azulclaro &&
    css`
      .accentcolortext {
        color: #48b2df !important;
      }
      .accentbackground {
        background-color: #51bcea !important;
      }
      .bg-red-400 {
        background-color: rgba(81, 188, 234, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(111, 164, 194) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(111, 164, 194) !important;
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px #438faf !important;
      }
      .accentborder {
        border: solid 2px rgb(111, 164, 194) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(111, 164, 194);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(111, 164, 194);
      }
    `}


    ${(props) =>
    props.theme.azul &&
    css`
      .accentcolortext {
        color: #5685ff !important;
      }
      .accentbackground {
        background-color: #5685ff !important;
      }
      .bg-red-400 {
        background-color: rgba(86, 133, 255, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(68, 109, 190) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(68, 109, 190) !important;
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px #3f66b0 !important;
      }
      .accentborder {
        border: solid 2px rgb(68, 109, 190) !important ;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(68, 109, 190);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(68, 109, 190);
      }
    `}


    ${(props) =>
    props.theme.roxo &&
    css`
      .accentcolortext {
        color: #9756ff !important;
      }
      .accentbackground {
        background-color: #9756ff !important;
      }
      .bg-red-400 {
        background-color: rgba(151, 86, 255, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(136, 68, 190) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(136, 68, 190) !important;
      }
      .accentborder {
        border: solid 2px rgb(136, 68, 190) !important;
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px rgb(136, 68, 190) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(136, 68, 190);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(136, 68, 190);
      }
    `}




    ${(props) =>
    props.theme.rosa &&
    css`
      .accentcolortext {
        color: #df78b6 !important;
      }
      .accentbackground {
        background-color: #f28ce2 !important;
      }
      .bg-red-400 {
        background-color: rgba(242, 140, 226, var(--tw-bg-opacity)) !important;
      }
      .colorshadow {
        background-color: rgb(188, 111, 194) !important;
      }
      .accentshadow {
        box-shadow: 0px 4px 0px 0px rgb(188, 111, 194) !important;
      }
      .accentborder {
        border: solid 2px rgb(188, 111, 194) !important;
      }
      .animation {
        top: 0;
        position: relative;
        box-shadow: 0px 4px 0px 0px rgb(188, 111, 194);
        transition: all 175ms linear !important;
        -webkit-transition: all 175ms linear !important;
        -moz-transition: all 175ms linear !important;
        -ms-transition: all 175ms linear !important;
        -o-transition: all 175ms linear !important;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
      }
      .animation:active {
        top: 4px;
        box-shadow: 0px 1px 0px 0px rgb(188, 111, 194);
      }
      .defaultshadow {
        box-shadow: 0px 4px 0px 0px rgb(188, 111, 194) !important;
      }
      .defaultshadow2 {
        text-shadow: 0px 1px 0px rgb(188, 111, 194) !important;
      }
    `}
`;
