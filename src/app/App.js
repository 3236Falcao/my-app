<Capslock texto="Me deixe em caps Lock por favor" />

function Capslock(props) {
  const textoInserido = props.children;
  const textoEmCapaslock = textoInserido.toUperCase()
  return <div>{textoEmCapaslock}</div>
}


//Não deu certo
function Pagina() {
  return<div>Massinha</div>
}
export default Pagina;

// function Pagina(){
//   return <Capslock>Show</Capslock> 
// }
// export default Pagina;

{/* const App = () => {
  return (
    <div className='App'>
      Primeira tela
    </div>
  );
}

export default App; */}
