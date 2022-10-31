import Card from "./components/Card";
import Button from "./components/Button";

function App() {

  const a = () => {
    alert("Aqui vou entrar no sistema");
    // Aqui posso fazer N coisas.
  }
  /**
   * A ideia principal dos componentes, é vc brincar de lego.
   * 
   * 
   * 
   */

  return (
    <div>
          <Button valor="Entrar" executar={a}/>
           <br/>
           <Card texto="Brincando de lego"/>
           <br/>
          <Button valor="Salvar" executar={() => alert("Aqui vou salvar alguma coisa ...")}/>
          <br/>
          <Card texto="Brincando de lego"/>
           <br/>
          <Button valor="Lançar nota" executar={() => alert("Aqui vou dar 10 para geral")}/>

      {/* <Card texto="Fulano" subtitulo="Da Silva" /> */}
      {/* <Card texto="Ciclano" />
      <Card texto="Beltrano" subtitulo=" Rodrigues"/> */}

 
    </div>
  );
}

export default App;
