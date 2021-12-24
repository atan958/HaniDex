const SearchBar = ({ search, setSearch }) => {
    return (
        <>
            <input className="searchInput" type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </>
    )
}

export default SearchBar
