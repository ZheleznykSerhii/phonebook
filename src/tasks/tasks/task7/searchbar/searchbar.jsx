import style from './searchbar.module.css'

const Searchbar = ({ submit, value, onChange }) => {
  return (
    <div className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={submit}>
        <button type="submit" className={style.SearchForm_button}>
          <span className={style.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={style.SearchForm_input}
          type="text"
          value={value}
          onChange={onChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </div>
  )
}

export default Searchbar
