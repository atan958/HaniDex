const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-container">
            <input className="search-input" type='text' value={search} placeholder="Search Pokemon..." onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}

export default SearchBar
