import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        // this.props. to define props specified in app.js
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)


export default SearchBox;