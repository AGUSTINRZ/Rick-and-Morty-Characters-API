import { useState, useEffect } from "react";
import Character from "./Character";
import Nav from "./Nav";

function CharactersList() {
	const [characters, setCharacters] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			);
			const data = await response.json();
			setCharacters(data.results);
			setIsLoading(false);
		}
		fetchData();
	}, [page]);

	return (
		<>
			<Nav page={page} setPage={setPage} />
			{isLoading ? (
				<p className="text-center py-32 font-bold text-white text-3xl">
					Loading...
				</p>
			) : (
				<>
					<section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 max-w-[1420px] mx-auto">
						{characters.map((character) => {
							return <Character key={character.id} character={character} />;
						})}
					</section>
					<Nav page={page} setPage={setPage} />
				</>
			)}
		</>
	);
}

export default CharactersList;
