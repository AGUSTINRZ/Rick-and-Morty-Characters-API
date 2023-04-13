function Nav({ page, setPage }) {

	function getPrevPage() {
		if (page > 1) {
			setPage(page - 1);
		}
	}

	function getNextPage() {
		setPage(page + 1);
	}

	return (
		<nav className="flex items-center justify-between max-w-[1420px] mx-auto px-4 py-2">
			<span className="text-white font-semibold text-xl">
				Page: {`${page}`}
			</span>
			<div>
				<button className="text-white font-medium bg-blue-700 px-2 py-1 rounded hover:bg-blue-800 transition-colors" onClick={() => {
					getPrevPage();
				}}>
					Prev Page
				</button>
				<button className="text-white font-medium bg-blue-700 px-2 py-1 rounded hover:bg-blue-800 transition-colors ml-2" onClick={() => {
					getNextPage();
				}}>
					Next Page
				</button>
			</div>
		</nav>
	);
}

export default Nav;
