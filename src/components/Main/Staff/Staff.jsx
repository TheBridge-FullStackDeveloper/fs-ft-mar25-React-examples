import React, { useEffect, useState } from 'react';
import Card from './Card';

const Staff = () => {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            setPokemons(data.results);
        }
        getPokemons();
    }, []);

    const renderStaff = () => pokemons.map((pokemon,i) => <Card key={i} data={pokemon} />);

    return (
        <section>
          {renderStaff()}
        </section>
    );
    
}
 
export default Staff