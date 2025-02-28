import { useState, useEffect } from 'react'
import * as petService from './services/petService';
import PetList from './components/PetList/PetList';
import './App.css'

const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  
  useEffect(() => {
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      setPets(fetchedPets);
    };
    fetchPets();
  }, []);



  return (
    <>
      <PetList pets={pets} />
    </>
  );
};

export default App;