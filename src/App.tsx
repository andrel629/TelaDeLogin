import styled,{createGlobalStyle} from "styled-components"
import Login from "./Pages/Login/Login"




const GlocalStyle=createGlobalStyle`
  body, html{
    padding:0px;
    margin:0px;
  }
` 

const BackgroudStyle= styled.div`

  @property --fundo{
         syntax:"<fundo>";
        initial-value:50% 50%;
        inherits:false;
    }

    @keyframes FundoAnimacao {
        0%{
            --fundo: 50% 50%;
        }
        25%{
          --fundo: 37.5% 62.5%;
        }
        50%{
            --fundo: 25% 75%;
        }
        75%{
          --fundo: 12.5% 87.5%;
        }
        100%{
            --fundo: 0% 100%
        }
      }
      @keyframes FalseFundoAnimacao {
        0%{
            --fundo: 50% 50%;
        }

        100%{
            --fundo: 50% 50%
        }
      }
  background-color: #171718;
  isolation:isolate;
  
  z-index:-10;
  padding:0px;
  margin:0px;
  display:flex;
  width:100vw;
  height:100vh;
  flex-direction:row;
  justify-content: center;

  
` 


function App() {
 

  return (
    <>
    <GlocalStyle/>
      <BackgroudStyle >
          <Login />
      </BackgroudStyle>
    </>
  )
}

export default App
