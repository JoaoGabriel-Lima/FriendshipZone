import { BsFillSuitHeartFill } from "react-icons/bs";
import styled from "styled-components";

const FooterStyle = styled.div`
  width: 100%;
  margin-top: 30px;
  min-height: 30px;
  height: 30px;
  background-color: #ffcb5f;
  box-shadow: 0px -3px 0px 0px #e2b24e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <a
        target="_blank"
        href="https://joaolima.vercel.app/"
        rel="noopener noreferrer"
      >
        <h4 className="text-xs text-center font-semibold">Made with all my </h4>
      </a>
      <BsFillSuitHeartFill className="mx-1 text-xs" />
      <a
        target="_blank"
        href="https://joaolima.vercel.app/"
        rel="noopener noreferrer"
      >
        <h4 className="text-xs text-center font-semibold">
          by <span className="underline">Jão</span>
        </h4>
      </a>
    </FooterStyle>
  );
}
