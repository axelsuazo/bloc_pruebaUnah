import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import { posts } from "./data/posts";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [pagina, setPagina] = useState(1);

  
  const [postAbierto, setPostAbierto] = useState<(typeof posts)[0] | null>(null);

  const porPagina = 8;

  const categorias = ["Todas", "React", "Diseño", "Programación", "Universidad"];

  const postsFiltrados = posts.filter((post) => {
    if (categoria !== "Todas" && post.category !== categoria) {
      return false;
    }

    if (!post.title.toLowerCase().includes(busqueda.toLowerCase())) {
      return false;
    }

    return true;
  });

  const inicio = (pagina - 1) * porPagina;
  const fin = inicio + porPagina;
  const postsPagina = postsFiltrados.slice(inicio, fin);

  const totalPaginas = Math.ceil(postsFiltrados.length / porPagina);

  function buscar(valor: string) {
    setBusqueda(valor);
    setPagina(1);
  }

  function filtrar(valor: string) {
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
        onSearchChange={buscar}
        selectedCategory={categoria}
        onCategoryChange={filtrar}
        categories={categorias}
      />

      <section className="mx-auto max-w-6xl px-4">
        {postsFiltrados.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-md">
            <h2 className="text-2xl font-bold text-slate-800">
              No se encontraron posts
            </h2>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {postsPagina.map((post) => (
                <Card
                  key={post.id}
                  post={post}
                  onReadMore={setPostAbierto}
                />
              ))}
            </div>

          
            <div className="mt-8 flex justify-center gap-3">
              <button
                onClick={() => setPagina(pagina - 1)}
                disabled={pagina === 1}
                className="rounded-lg bg-blue-900 px-4 py-2 text-white disabled:bg-gray-400"
              >
                Anterior
              </button>

              <span className="px-4 py-2">
                Página {pagina} de {totalPaginas}
              </span>

              <button
                onClick={() => setPagina(pagina + 1)}
                disabled={pagina === totalPaginas}
                className="rounded-lg bg-blue-900 px-4 py-2 text-white disabled:bg-gray-400"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;