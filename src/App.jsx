import CharactersList from "./components/CharactersList";

function App({page}) {
	return (
		<div className="App">
			<main className="bg-gray-800 min-h-screen font-titillium-web">
				<h1 className="text-white font-bold text-center text-3xl pt-10">Rick and Morty Characters</h1>
				<CharactersList />
			</main>
		</div>
	);
}

export default App;
