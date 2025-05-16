import React, { useEffect, useState } from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';
import Card from './Card';

const Staff = () => {
  
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const getPokemons = async () =>{
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
            const data = await resp.json();
            // Simulamos un retardo de 2 segundos
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            setPokemons(data.results);
        }
        getPokemons();
    }, []);

    const renderStaff = () => pokemons.map((pokemon,i) => <Card key={i} data={pokemon} />);

    return (
        <section>  
        {pokemons.length>0?renderStaff():<SpinnerRoundOutlined />}
        </section>
    );
    
}
 
export default Staff