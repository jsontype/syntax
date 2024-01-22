import React from "react";
import "./Top.css";

type TopProps = {
  isMovies: boolean;
  setIsMovies: React.Dispatch<React.SetStateAction<boolean>>;
  isNews: boolean;
  setIsNews: React.Dispatch<React.SetStateAction<boolean>>;
  isTodos: boolean;
  setIsTodos: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Top({
  isMovies,
  setIsMovies,
  isNews,
  setIsNews,
  isTodos,
  setIsTodos,
}: TopProps) {
  const onClickMovies = () => {
    onReset();
    setIsMovies(true);
  };
  const onClickNews = () => {
    onReset();
    setIsNews(true);
  };
  const onClickTodos = () => {
    onReset();
    setIsTodos(true);
  };

  const onReset = () => {
    setIsMovies(false);
    setIsNews(false);
    setIsTodos(false);
  };

  return (
    <div className="navbar">
      <div className="navbarItem">
        <h2>종합앱</h2>
      </div>
      <div className="navbarItem menu" onClick={onClickMovies}>
        영화
      </div>
      <div className="navbarItem menu" onClick={onClickNews}>
        뉴스
      </div>
      <div className="navbarItem menu" onClick={onClickTodos}>
        투두
      </div>
    </div>
  );
}
