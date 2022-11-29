import React from "react";
import './global.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Caderno de Notas</strong>
        <form>

          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
