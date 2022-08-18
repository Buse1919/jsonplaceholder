
import './App.css';
import { useState, useRef, useEffect  } from 'react';
import ListeElemani from './ListeElemani';


function App() {
  const [yenile, setYenile] = useState(true);
  const listeRef = useRef([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => { 
      console.log("veri", json)
      listeRef.current = json
      setYenile(prev=>!prev)
    })
  },[]
  );

return (
 <>{listeRef.current.map(eleman=>(<ListeElemani liste_elemani={eleman} />))}</>
)

}

export default App;
