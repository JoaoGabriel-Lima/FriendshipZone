import styled from "styled-components";

export const BuildStyle = styled.div`
  display: flex;
  padding: 0 10px;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  /* height: 100%; */
  /* justify-content: space-between; */

  /* * {
        transition: 1s;
    } */

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    flex-direction: column;
  }
  .accentcolor {
    color: #a764fc !important;
  }
  .titlesection {
    max-width: 460px;
  }
  .description {
    max-width: 360px;
  }
  #backtohome {
    top: 0;
    position: relative;
    margin-bottom: 40px;
    max-width: 390px;
    width: 90%;
    height: 50px;
    color: white;
    background-color: #a764fc;
    border-radius: 8px;
    box-shadow: 0px 4px 0px 0px #7149c6;
    font-size: 14px;
    text-align: center;
    transition: all 175ms linear !important;
    -webkit-transition: all 175ms linear !important;
    -moz-transition: all 175ms linear !important;
    -ms-transition: all 175ms linear !important;
    -o-transition: all 175ms linear !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  #backtohome:hover {
    background-color: #b179f7;
    top: 1px;
    box-shadow: 0px 3px 0px 0px #8261c7;
  }
  #backtohome:active {
    top: 4px;
    background-color: #b179f7;
    box-shadow: 0px 1px 0px 0px #8261c7;
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
  @media only screen and (min-height: 730px) {
    .center {
    }
  }
`;
