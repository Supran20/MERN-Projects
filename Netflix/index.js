import express from "express";

// app
const app = express();

// to make app understand json
app.use(express.json());

// ? movie List
let movieList = [
  {
    id: 1,
    name: "Breaking Bad",
  },
  {
    id: 2,
    name: "GOT",
  },
];
//get all movies
app.get("/movie/list", (req, res) => {
  console.log(typeof res);
  return res.status(200).send({ message: "success", movies: movieList });
});

// add a movie
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;

  movieList.push(newMovie);
  return res.status(200).send("Movie is added successfully");
});
// ? error first approach
// get movie details by id
app.get("/movie/detail/:id", (req, res) => {
  //extract movie id from req params
  const movieId = Number(req.params.id);

  // console.log(movieId);
  //find movie id using movie id
  const movie = movieList.find((item) => {
    return item.id === movieId;
  });
  // if not movie, throw error
  if (!movie) {
    return res.status(404).send({ message: "Movie does not exist.." });
  }
  return res.status(200).send({ message: "success", movieDetails: movie });
});

app.delete("/movie/delete/:id", (req, res) => {
  // console.log(req.params);
  // extract movie id from req.params and type cast
  const movieId = +req.params.id;

  // find movie using movie id
  const movie = movieList.find((item) => {
    return item.id === movieId;
  });

  // if not movie, throw error
  if (!movie) {
    return res.status(404).send({ message: "Movie does not exist.." });
  }

  // delete movie
  movieList = movieList.filter((item) => {
    return item.id !== movieId;
  });

  // send res
  return res.status(200).send({ message: "Movie is  deleted successfully" });
});
//edit movie by id
app.put("/movie/edit/:id", (req, res) => {
  // extract movie id from req.params and type cast
  const movieId = +req.params.id;

  // find movie
  const movie = movieList.find((item) => {
    return item.id === movieId;
  });

  // if not movie, throw error
  if (!movie) {
    return res.status(404).send({ message: "Movie does not exist.." });
  }
  // extract new values from req.body
  const newValues = req.body;

  // update movie
  movieList = movieList.map((item, index, self) => {
    if (item.id === movieId) {
      return { id: item.id, name: newValues.name };
    }
    return item;
  });

  // send res
  return res.status(200).send("Movie is updated successfully");
});
//network port and server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
