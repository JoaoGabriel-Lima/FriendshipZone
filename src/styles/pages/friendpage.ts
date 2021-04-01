import styled from 'styled-components';

export const FriendStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* * {
        transition: 1s;
    } */
    #yellowbar {
        width: 100%;
        height: 15px;
        background-color: #FFCB5F;
        margin-bottom: 40px;
    }
    #namebox {
        height: 43px;
        background-color: #FF565E;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        box-shadow: 0px 4px 0px 0px #FFB61D;
    }
    #namebox h2{
        font-size: 22px;
        padding-left: 70px;
        padding-right: 70px;
        text-shadow: 0px 1px 0px #FFB61D;
        color: white;
    }
    #illustration {
        width: 88%;
        max-width: 500px;
    }
    .maintitle {
        width: 90%;
        font-size: 18px;
    }
    .accentcolortext {
        color: #FF565E;
    } 
    .maindescription {
        margin-top: 22px;
        font-size: 12px;
        width: 90%;
    }
    .timeleft {
        margin-top: 19px;
        margin-bottom: 31px;
        border-radius: 11px;
        width: 90%;
        height: 250px;
        /* background-color: #643D3C; */
    }
    .iknowbox {
        width: 90%;
    }
`