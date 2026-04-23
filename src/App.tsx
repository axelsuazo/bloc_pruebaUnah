import { useState } from 'react';
import Card from './components/Card';

import Search from './components/Search';
import { posts } from './data/posts';

 
function App() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  const [pagina, setPagina] = useState(1);
  const [postAbierto, setPostAbierto] = useState<any>(null);

  const porPagina = 8;

  const categorias = [...new Set(posts.map((item) => item.category))];

  const filtrados = posts.filter((item) => {
    const tituloCoincide = item.title
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const categoriaCoincide =
      categoria === 'Todas' || item.category === categoria;

    return tituloCoincide && categoriaCoincide;
  });


  const inicio = (pagina - 1) * porPagina;
  const visibles = filtrados.slice(inicio, inicio + porPagina);

  function cambiarBusqueda(valor: string) {
    setBusqueda(valor);
    setPagina(1);
  }

  function cambiarCategoria(valor: string) {
    setCategoria(valor);
    setPagina(1);
  }

  if (postAbierto) {
    return (
      <main className="bg-slate-100 px-4 py-10">
        <section className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-lg">
          <img
            src={postAbierto.image}
            alt={postAbierto.title}
            className="h-80 w-full object-cover"
          />

          <div className="p-6">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900">
              {postAbierto.category}
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-800">
              {postAbierto.title}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Por {postAbierto.author} • {postAbierto.date}
            </p>

            <p className="mt-6 leading-7 text-slate-700">
              {postAbierto.content}
            </p>

            <button
              onClick={() => setPostAbierto(null)}
              className="mt-8 rounded-lg bg-blue-900 px-4 py-2 text-white"
            >
              Volver
            </button>
          </div>
        </section>
 
      </main>
    );
  }

  return (
    <main className="bg-slate-100 py-10">
      <Search
        searchTerm={busqueda}
        onSearchChange={cambiarBusqueda}
        selectedCategory={categoria}
        onCategoryChange={cambiarCategoria}
        categories={categorias}
      />

      <section className="mx-auto max-w-6xl px-4">
        {filtrados.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-slate-800">
              No se encontraron posts
            </h2>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {visibles.map((item) => (
                <Card
                  key={item.id}
                  post={item}
                  onReadMore={setPostAbierto}
                />
              ))}
            </div>

           
          </>
        )}
      </section>
    </main>
  );
}

export default App;