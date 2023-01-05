import styled from "styled-components";

export const StyleContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  justify-content: center;
  display: flex;
  align-items: center;
  /* height: 100vh; */

  width: 100%;
  max-width: 100vw;
  flex-direction: column;
  position: relative;

  body {
    background-color: #ffcb5f;
  }
  .maintitle {
    text-shadow: 0px 2px 0px rgba(255, 182, 29, 0.62);
    max-width: 391px;
    /* margin-top: 50px; */
  }
  .mainimg {
    max-width: 600px;
    margin-top: 30px;
    width: 95%;
  }
  .AccentColor {
    color: #a764fc;
    opacity: 1 !important;
  }
  .maindescription {
    margin-top: 30px;
    /* color: rgba(0,0,0,0.72); */
    font-size: 29px;
    width: 90%;
    line-height: 34px;
    font-weight: 600;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
  .maindescription2 {
    width: 89%;
    /* font-size: 14px; */
    max-width: 700px;
  }
  form {
    margin-top: 28px;
    width: 90%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
  }
  #nameinput {
    width: 100%;
    height: 45px;
    border: solid #a764fc 3px;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
  }
  #nameinput:disabled {
    border: solid #ab8ad5 3px;
    cursor: not-allowed;
  }
  #nameinput::placeholder {
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    /* color: rgba(0,0,0,0.6) */
  }
  #buttoninput {
    top: 0;
    position: relative;
    margin-top: 20px;
    width: 100%;
    max-width: 485px;
    height: 50px;
    color: white;
    background-color: #a764fc;
    border-radius: 8px;
    box-shadow: 0px 4px 0px 0px #7149c6;
    font-size: 13px;
    text-align: center;
    transition: all 175ms linear !important;
    -webkit-transition: all 175ms linear !important;
    -moz-transition: all 175ms linear !important;
    -ms-transition: all 175ms linear !important;
    -o-transition: all 175ms linear !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  #buttoninput:hover {
    background-color: #b179f7;
    top: 1px;
    box-shadow: 0px 3px 0px 0px #8261c7;
  }
  #buttoninput:active {
    top: 4px;
    background-color: #b179f7;
    box-shadow: 0px 1px 0px 0px #8261c7;
  }

  #buttoninput:disabled {
    cursor: not-allowed;
    top: 0;
    background-color: #ab8ad5;
    box-shadow: 0px 4px 0px 0px #5d4d81;
  }
  #buttoninput:disabled:hover {
    background-color: #ab8ad5;
    top: 0;
    box-shadow: 0px 4px 0px 0px #5d4d81;
  }

  .bottombar {
    margin-top: 30px;
    height: 30px;
    background-color: #ffcb5f;
    box-shadow: 0px -3px 0px 0px #e2b24e;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* align-self: flex-end; */
    /* float: bottom; */
  }
  *:focus {
    outline: none;
  }
  .ellipse {
    width: 300px;
    height: 300px;
    background-color: #a764fc;
    opacity: 0.5;
    border-radius: 500px;
    filter: blur(264px);
    position: absolute;
  }
  .ellipse2 {
    position: absolute !important;
    top: -100px;
    left: 60%;
  }
  .ellipse1 {
    position: absolute !important;
    bottom: -100px;
    right: 60%;
    background-color: #ffb61d;
    opacity: 0.45;
  }

  #themetoggle {
    background-color: white;
    width: 130px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #4c4c4c;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 40px;
    width: 40px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: #989898 url("https://i.ibb.co/FxzBYR9/night.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background-color: #a764fc;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #a764fc;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url("https://i.ibb.co/7JfqXxB/sunny.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  #nameinput {
    max-width: 700px;
  }

  @media only screen and (min-height: 913px) {
    /* height: 100vh;

    .bottombar {
      position: absolute;
      bottom: 0;
    } */
    #nameinput {
      max-width: 700px;
    }
    #buttoninput br {
      display: none;
    }
    #buttoninput {
      max-width: 700px;
      width: 60%;
    }
    .maintitle {
      /* margin: 0px !important; */
      max-width: 600px;
    }
    .maintitle br {
      display: none;
    }
    .maindescription2 {
      max-width: 700px;
    }
  }
`;
