import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiMovies } from "../Api/Apis";
import Header from "../Header";
import { MagnifyingGlass } from "phosphor-react";

import * as S from "./Style";
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// eff0ebc6f24060cba1c4ceb8fea3f898

export default function Movies() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [erro, setErro] = useState("");

  const moviesFiltered =
    search.length > 0
      ? movies.filter((Movies) =>
          Movies.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  useEffect(() => {
    axios
      .get(ApiMovies)
      .then((res) => {
        setMovies(
          res.data.results.map((item) => {
            return {
              name: item.title,
              Sinopse: item.overview,
              imagem: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
            };
          })
        );
      })
      .catch((err) => {
        setErro("Algo deu errado" + err);
      });
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Box_Search>
        <S.Input
          value={search}
          placeholder="busca..."
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />

      </S.Box_Search>
      <S.ContainerTwo>
        <h2>Filmes Mais Populares :</h2>
        <S.ListMovies>
          {search.length > 0
            ? moviesFiltered.map((i) => {
                return (
                  <S.Box_Cards_Movies>
                    <li key={i.id}>
                      {i.name} <S.Img src={i.imagem} alt="poster dos filmes" />
                    </li>
                    <p>{i.Sinopse}</p>
                  </S.Box_Cards_Movies>
                );
              })
            : movies.map((i) => {
                return (
                  <S.Box_Cards_Movies>
                    <li >
                      {i.name} <S.Img src={i.imagem} alt="poster dos filmes" />
                    </li>
                    <p>{i.Sinopse}</p>
                  </S.Box_Cards_Movies>
                );
              })}
          <p>{erro}</p>
        </S.ListMovies>
      </S.ContainerTwo>
    </S.Container>
  );
}
