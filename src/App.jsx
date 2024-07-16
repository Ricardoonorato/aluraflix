import styled from "styled-components"
import EstilosGlobais from "./componentes/EtilosGlobais"
import Cabecalho from "./componentes/Cabecalho"


const FundoGeral = styled.div`
  background-color: #000000;
  width: 100%;
  min-height: 100vh;
`

function App() {


  return (
    <FundoGeral>
      <EstilosGlobais/>
      <Cabecalho/>
    </FundoGeral>
  )
}

export default App
