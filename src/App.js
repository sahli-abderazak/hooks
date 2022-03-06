
import './App.css';
import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Add from './components/Add';
import {Movies} from './components/Movies';
import MovieList from './components/MovieList';
import {useState} from 'react' ;


function App() {

  const [ Films , setFilms] = useState (Movies) ;
  const addHandler = (newFilm) => {
  setFilms (
    [...Films , newFilm]
  )

  }
 
const [search,setSearch] = useState ("")


 
const [rating,setRating] = useState (0)



  return (
    <div className="App">
      
      <NavBar />
      <Filter setSearch={setSearch} rating ={rating} setRating={setRating} />
      <Add addHandler={addHandler} />
      <MovieList Film = {Films}
      search={search} rating ={rating}  />

      
    </div>
  );
}

export default App;
