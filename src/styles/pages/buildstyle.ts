import styled, { css } from 'styled-components';

export const BuildStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* * {
        transition: 1s;
    } */
    #yellowbar {
        width: 100%;
        height: 10px;
        background-color: #FFCB5F;
        margin-bottom: 40px;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
        flex-direction: column;
    }
    .accentcolor {
        color: #A764FC !important;
    }
    .titlesection {
        width: 90%;
    }
    .description {
        width: 83%;
    }
    #backtohome {
        top: 0;
        position:relative;
        margin-bottom: 40px;
        width: 185px;
        height: 50px;
        color: white;
        background-color: #A764FC;
        border-radius: 8px;
        box-shadow: 0px 4px 0px 0px #7149C6;
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
        top:1px;
        box-shadow: 0px 3px 0px 0px #8261c7;
    }
    #backtohome:active {
        top:4px;
        background-color: #b179f7;
        box-shadow: 0px 1px 0px 0px #8261c7;

    }
    .bottombar {
        margin-top: 30px;
        height: 30px;
        background-color: #FFCB5F;
        box-shadow: 0px -3px 0px 0px #E2B24E;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        /* align-self: flex-end; */
        /* float: bottom; */
    }
    *:focus{
        outline: none;
    }
    @media only screen and (min-height: 730px) {
        .center {
            height: 100vh;
        }
    }
`