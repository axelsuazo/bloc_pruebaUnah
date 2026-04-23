type Props = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string;
  onCategoryChange: (value: string) => void;
  categories: string[];
};

function Search({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: Props) {
  return (
    <section className="mx-auto mb-8 grid max-w-6xl gap-4 px-4 md:grid-cols-2">
      <input
        type="text"
        placeholder="Buscar por título"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none"
      />

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none"
      >
        <option value="Todas">Todas las categorías</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </section>
  );
}

export default Search;