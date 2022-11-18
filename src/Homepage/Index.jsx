import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import * as S from "./Style";
import { motion } from "framer-motion";
import { ApiMovies, ApiSeries } from "../Api/Apis";
import Header from "../Header";
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// eff0ebc6f24060cba1c4ceb8fea3f898

export default function Homepage() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [erro, setErro] = useState("");
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    axios
      .get(ApiMovies)
      .then((res) => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
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
    axios
      .get(ApiSeries)
      .then((res) => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        setSeries(
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
    <S.Container as={motion.section}>
      <Header/>
      <S.TitleFilmes>Filmes Mais Populares:</S.TitleFilmes>
      <S.ListMovies ref={carousel}>
        <S.Inner
          as={motion.div}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {movies.map((i) => {
            return (
              <S.Box_Cards_Movies as={motion.div} key={i.id} >
                <li >
                  <S.Img src={i.imagem} alt="poster dos filmes" />
                </li>
              </S.Box_Cards_Movies>
            );
          })}
        </S.Inner>
        <p>{erro}</p>
      </S.ListMovies>
      <S.TitleSeries>Series Mais Populares:</S.TitleSeries>

      <S.ListSeries >
        <S.Inner
          as={motion.div}
          whileTap={{ cursor: "grabbing" }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {series.map((i) => {
            return (
              <S.Box_Cards_Series as={motion.div} >
                <li>
                  <S.Img src={i.imagem} alt="poster das series"  />
                </li>
              </S.Box_Cards_Series>
            );
          })}
        </S.Inner>
        <p>{erro}</p>
      </S.ListSeries>
    </S.Container>
  );
}
