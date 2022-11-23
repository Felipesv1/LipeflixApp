import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: black;
`;
export const Box_Search = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 35rem;
  margin: auto;
  margin-top: 50px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 5px;
  padding: 1rem 1.6rem;
  border: none;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 250px;
  }
`;
export const ContainerTwo = styled.div`
  width: 100%;
  background: black;

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: white;
    padding: 15px;
  }
`;

export const ListMovies = styled.ul`
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

export const Box_Cards_Movies = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border: 5px solid red;
  padding: 5px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  width: 300px;
  object-fit: cover;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid red;
`;
