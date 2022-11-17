import axios from "axios";
import React, { useEffect, useState } from "react";
import * as S from "./Style";
import { ApiSeries } from "../Api/Apis";
import Header from "../Header";

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// eff0ebc6f24060cba1c4ceb8fea3f898

export default function App() {
  const [search, setSearch] = useState("");
  const [series, setSeries] = useState([]);

  const [erro, setErro] = useState("");

  const seriesFiltered =
    search.length > 0
      ? series.filter((Series) =>
          Series.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  useEffect(() => {
    axios
      .get(ApiSeries)
      .then((res) => {
        console.log(res.data.results);
        setSeries(
          res.data.results.map((item) => {
            return {
              name: item.name,
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
      <Header/>
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
        <S.ListSeries>
          {search.length > 0
            ? seriesFiltered.map((i) => {
                return (
                  <S.Box_Cards_Series key={i.id}>
                    <li>
                      {i.name} <S.Img src={i.imagem} alt="poster dos filmes" />
                    </li>
                    <p>{i.Sinopse}</p>
                  </S.Box_Cards_Series>
                );
              })
            : series.map((i) => {
                return (
                  <S.Box_Cards_Series>
                    <li>
                      {i.name} <S.Img src={i.imagem} alt="poster dos filmes" />
                    </li>
                    <p> {i.Sinopse}</p>
                  </S.Box_Cards_Series>
                );
              })}
          <p>{erro}</p>
        </S.ListSeries>
      </S.ContainerTwo>
    </S.Container>
  );
}
