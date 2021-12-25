import SearchBar from './SearchBar'

const FilterBar = ({search, setSearch}) => {
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
        </div>
    )
}

export default FilterBar
