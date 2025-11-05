import styled from "styled-components";
import {Redimesionamento} from "../../Regras/Resposivit";

const Redm=Redimesionamento;
const screen=window.innerWidth

const Titulo=styled.h1`
    margin-bottom:0px;
    color:#b5b5b5;
    @media (max-width: 320px) {
        font-size:0;
        
    }
    @media (min-width: 320px){
        font-size:${Redm(30,320)};
        
        align-self:center;
        
    }
    @media (min-width: 768px){
        font-size:${Redm(80)};
        
        align-self:center;
    }
    @media (min-width: 1026){
        font-size:${Redm(60)};
        
        align-self:center;
    }
`

const FormPrincipal=styled.form`
@media (max-width: 320px) {
        
     
    }
    @media (min-width: 320px){
        
        
        flex:1;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media (min-width: 768px){
        
        flex:1;

        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media (min-width: 1026){
        
        flex:1;

        
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
`
const InputText=styled.input`
        width:${Redm(screen/2,screen)};
        height:${Redm(50,screen)};
        margin:${Redm(5,screen)};

        padding-left:15px;

        border-radius:20px;
        border:2px solid;
        border-color:#8c8c8c;
        color:#8c8c8c;
        font-weight:bolder;
        font-size:${Redm(20,screen)};

        background-color:#515151;
        
        &:focus{
            border:3px solid #5dc1b9;
            box-shadow: 0px 0px 10px 0.5px #8ae0db;
            
            outline:none;
        }
`
const BtnForm=styled.input`
    width:${Redm(screen/3,screen)};
        height:${Redm(55,screen)};
        margin:${Redm(5,screen)};

        background-color:#515151;

         border-radius:20px;
        border:2px solid;
        border-color:#8c8c8c;
        color:#8c8c8c;
        font-weight:bolder;
        font-size:${Redm(20,screen)};
        

        &:active {
           
            height:${Redm((55+5),screen)};

            background-color:#b5b5b5;
            color:#515151;

            border:3px solid #5dc1b9;
           
            
        }
        &:hover{
            border:3px solid #5dc1b9;
            box-shadow: 0px 2px 25px 3px #8ae0db;
        }
        
       


        
`

export{Titulo,FormPrincipal,InputText,BtnForm}