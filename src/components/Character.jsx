function Character({ character }) {
	function getCharacterStatus(status) {
		switch (status) {
			case "Alive":
				return "bg-green-500";
			case "Dead":
				return "bg-red-500";
			case "unknown":
				return "bg-gray-500";
			default:
				return "bg-gray-500";
		}
	}

	return (
		<article
			key={character.id}
			className="flex flex-col md:flex-row rounded overflow-hidden bg-gray-700 shadow-lg text-gray-200"
		>
			<div className="min-w-[250px] aspect-square bg-gray-600">
				<img
					src={character.image}
					alt={`Image of ${character.name}`}
					className="w-full md:max-w-[250px]"
				/>
			</div>
			<div className="flex flex-col justify-between p-2 md:px-4 w-full">
				<div className="flex gap-x-2 items-center flex-wrap">
					<h2 className="font-bold text-2xl w-full">{character.name}</h2>
					<div
						className={`w-2 h-2 rounded ${getCharacterStatus(
							character.status
						)}`}
					></div>
					<strong className="font-normal">
						{character.status} - {character.species}
					</strong>
				</div>
				<div>
					<span className="font-semibold text-gray-400">Gender:</span>
					<p>{character.gender}</p>
				</div>
				<div>
					<span className="font-semibold text-gray-400">Origin:</span>
					<p>{character.origin.name}</p>
				</div>
				<div>
					<span className="font-semibold text-gray-400">
						Last known location:
					</span>
					<p>{character.location.name}</p>
				</div>
			</div>
		</article>
	);
}

export default Character;
