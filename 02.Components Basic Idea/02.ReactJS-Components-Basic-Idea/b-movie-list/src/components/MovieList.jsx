import MovieListItem from "./MovieListItem";

export default function MovieList(props) {
  return (
    <>
      <h1>{props.title}</h1>

      <ul>
        <MovieListItem url="https://www.imdb.com/title/tt0133093/">
          {props.movies[0]}
        </MovieListItem>
        <MovieListItem url="https://www.imdb.com/title/tt0770828/?ref_=fn_al_tt_1">
          {props.movies[1]}
        </MovieListItem>
        <MovieListItem url="https://www.imdb.com/video/vi2933311001/?playlistId=tt7631058&ref_=tt_pr_ov_vi">
          {props.movies[2]}
        </MovieListItem>
        <MovieListItem url="https://www.imdb.com/title/tt6113488/">
          {props.movies[3]}
        </MovieListItem>
      </ul>
    </>
  );
}
