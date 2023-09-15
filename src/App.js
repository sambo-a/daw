import HelloWorld from "./componentes/hello";
import MeusDados from "./componentes/nome_idade";
import Contador from "./componentes/contador";
import ToDoList from "./componentes/ToDoList";
import VidaDoComponente from "./componentes/VidaComponente";
import RenderizacaoCondicional from "./componentes/renderizacaocondicional";
function App() {
  return (
    <div>
      <HelloWorld />
      <MeusDados />
      <Contador />
      <ToDoList />
      <VidaDoComponente />
      <RenderizacaoCondicional />
    </div>
  )
}
export default App;