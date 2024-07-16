import styled from "styled-components"

const HeaderEstilizado = styled.header`
    padding: 43px 51px;
    display: flex;
    justify-content: space-between;
    img {
        width: 169px;
        height: 40px;
    }
`

const Cabecalho = () => {
    return (<HeaderEstilizado>
        <img src="/imagens/logo alura.png" alt="" />
    </HeaderEstilizado>)
}

export default Cabecalho 