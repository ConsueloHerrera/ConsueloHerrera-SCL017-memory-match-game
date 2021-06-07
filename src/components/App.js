//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//
import pokemon from '../data/pokemon/pokemon.js';
 console.log(pokemon);

const App = () => {
  const mostrarImagenPokemon = document.createElement('div');


  mostrarImagenPokemon.className = 'listaDePokemones';
  



  const shuffle = (arr) =>{
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;    
  
  }
  const pokemonAleatorio = shuffle(pokemon.items);

  for (let i = 0; i < pokemonAleatorio.length; i++) {
    const element = pokemonAleatorio[i];
    mostrarImagenPokemon.innerHTML += `<img src ="${element.image}"></img>`
    console.log(element.id)
    
  }
  
  console.log(shuffle(pokemon.items)); //cuando busco algo dentro de un objeto se utiliza . dice que items está dentro del objeto pokemon

  return mostrarImagenPokemon;

};
const div1 = document.createElement ("div");
div1.id="";
div1.classname="td";

export default App;
