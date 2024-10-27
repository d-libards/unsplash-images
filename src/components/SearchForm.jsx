import { useGlobalContext } from '../context';

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);

    e.target.elements.search.value = '';
  }

  return (
    <section>
      <h1 className="title">UnSplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;
