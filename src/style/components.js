import styled from "styled-components";

import AppImageCold from "../assets/images/1.jpg";
import AppImageNormal from "../assets/images/2.jpg";

export const Main = styled.div`
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: ${prop =>
    prop.temp < 15
      ? `url(${AppImageCold}) center top / cover no-repeat`
      : `url(${AppImageNormal}) center top / cover no-repeat`};
  position: relative;
  display: flex;
  justify-content: center;
`;
