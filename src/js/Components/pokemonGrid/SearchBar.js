const SearchBar = ({ search, setSearch }) => {
    return (
        <div>
            <input className="searchInput" type='text' value={search} onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}

export default SearchBar
