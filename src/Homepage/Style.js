import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background: black;
`;
export const TitleFilmes = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: white;
  padding: 15px;
  margin-top: 50px;
`;
export const TitleSeries = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: white;
  padding: 15px;
  margin-top: 50px;
`;

export const ListMovies = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  margin-top: 50px;
  cursor: grab;
  overflow: hidden;
`;

export const ListSeries = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  margin-top: 30px;
  cursor: grab;
  overflow: hidden;
`;
export const Inner = styled.div`
  display: flex;
`;

export const Box_Cards_Movies = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Box_Cards_Series = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Img = styled.img`
  width: 300px;
  height: 90%;
  object-fit: cover;
  padding: 5px;
  pointer-events: inherit;
  border-radius: 15px;
  border: 1px solid red;
`;
