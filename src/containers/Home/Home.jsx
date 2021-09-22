import { useEffect, useState } from 'react';
import { listPokemon } from 'services/api';
import './Home.css';

const Home = () => {
	const [pokemons, setPokemons] = useState([]);
	const handleListPokemon = async () => {
		const results = await listPokemon();
		setPokemons(results);
	};

	useEffect(() => {
		handleListPokemon();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				{pokemons.map(pokemon => (
					<div className="App-card">
						<img
							src={pokemon.sprites.front_default}
							className="App-logo"
							alt="logo"
						/>
						<p>{pokemon.name}</p>
					</div>
				))}
			</header>
		</div>
	);
};

export default Home;
