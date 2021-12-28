const FilterBar = ({search, setSearch}) => {
    return (
        <div className="filter-container fadeIn-animation">
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
    )
}

const SearchBar = ({ search, setSearch }) => {
    return (
        <div className="search-input-container">
            <input className="search-input" type='text' value={search} placeholder="Search Pokemon..." onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}


export default FilterBar
