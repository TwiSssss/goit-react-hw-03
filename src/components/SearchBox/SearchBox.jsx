import style from "./SearchBox.module.css";
const SearchBox = ({ value, onChange }) => {
    return (
        <div className={style.searchBox}>
            <p>Find contacts by name </p>
            <input className={style.searchBoxInput} type="text" value={value} onChange={onChange} />
        </div>
    );
};
export default SearchBox;
