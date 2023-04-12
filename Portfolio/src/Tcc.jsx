import React from "react";
import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  img {
    height: 100px;
    width: 200px;
  }
  p {
    font-size: 20px;
    color: gray;
  }
`;

const Tcc = () => {
  return (
    <Title className=" ">
      <p>Hello World and</p>
      <h2>Data</h2>
    </Title>
  );
};

export default Tcc;

// bg-black text-gray-100
