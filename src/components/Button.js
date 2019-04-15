import styled from "styled-components";

export default styled.button`
  color: ${props=>props.theme.color};
  margin: 10px 0;
  padding: 5px 5px;
  text-align: center;
  display: inline-block;
  font-size: ${props=>props.theme.fontsize};
`;