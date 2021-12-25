import SearchBar from './SearchBar'

const FilterBar = ({search, setSearch}) => {
    return (
        <div className="filter-container">
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
    )
}

export default FilterBar
