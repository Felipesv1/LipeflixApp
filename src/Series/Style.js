import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: black;
`;

export const Box_Search = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 350px;
  height: 45px;
  font-size: 18px;
  letter-spacing: 2px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 250px;
  }
`;
export const ContainerTwo = styled.div`
  width: 100%;
`;

export const ListSeries = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  flex-direction: column;

  li {
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-weight: bolder;
    color: white;
    @media screen and (min-width: 300px) and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }

  p {
    top: 55px;
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    border-bottom: 1px solid red;
    color: white;
    @media screen and (min-width: 300px) and (max-width: 800px) {
      display: block;
    }
  }
`;

export const Box_Cards_Series = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  border: 1px solid red;
  padding: 5px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 300px;
  object-fit: cover;
  padding: 5px;
  transition: 1s all;
  border-radius: 15px;
  border: 1px solid red;
`;
