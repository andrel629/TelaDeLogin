import styled from "styled-components";
import { BtnForm, FormPrincipal, InputText, Titulo } from "./Styles";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Redimesionamento } from "../../Regras/Resposivit";

const Redm=Redimesionamento;
const screen=window.innerWidth

const CardPrincipal=styled.div`
    @property --angle{
        syntax:"<angle>";
        initial-value:0deg;
        inherits:false;
    }
    
    

    background-color:#3c3c3c;


    @media (min-width:320px ){
        
        width:80%;
        height:40%;
        border-radius:40px;
        align-self: center;
        
        display:flex;
        flex-direction:column;
        justify-content:center;

        position:relative;

         &::after, &::before{
            content:'';
            position:absolute;
            height:100%;
            width:100%;
            border-radius:40px;
            background-image:conic-gradient(from var(--angle),#5dc1b9,transparent,#8ae0db,transparent,#5dc1b9);
            top:50%;
            left:50%;
            translate:-50% -50%;
            z-index:-2;
            animation: 10s spin linear infinite;

            padding:5px;
        }
        &::before{
            filter:blur(1.2rem);
            padding:10px;
            opacity:0.75;
           
        }
        @keyframes spin {
            from{
                --angle:0deg;
            }
            to{
                --angle:360deg;
            }
        }

    }
    

    @media (min-width:768px ){
        
        width:60%;
        height:50%;
        border-radius:40px;

        align-self: center;

        display:flex;
        flex-direction:column;
        justify-content:center;
        

        position:relative;
        

        &::after, &::before{
            content:'';
            position:absolute;
            height:100%;
            width:100%;
            border-radius:40px;
            background-image:conic-gradient(from var(--angle),#5dc1b9,transparent,#8ae0db,transparent,#5dc1b9);
            top:50%;
            left:50%;
            translate:-50% -50%;
            z-index:-2;
            animation: 10s spin linear infinite;

            padding:5px;
        }
        &::before{
            filter:blur(1.2rem);
            padding:10px;
            opacity:0.75;
           
        }
        @keyframes spin {
            from{
                --angle:0deg;
            }
            to{
                --angle:360deg;
            }
        }
    }
    @media (min-width:1026px ){
       
        width:60%;
        height:60%;
        border-radius:40px;

        align-self: center;

        display:flex;
        flex-direction:column;
        justify-content:center;

        
        position:relative;
        

         &::after, &::before{
            content:'';
            position:absolute;
            height:100%;
            width:100%;
            border-radius:40px;
            background-image:conic-gradient(from var(--angle),#5dc1b9,transparent,#8ae0db,transparent,#5dc1b9);
            top:50%;
            left:50%;
            translate:-50% -50%;
            z-index:-2;
            animation: 10s spin linear infinite;

            padding:5px;
        }
        &::before{
            filter:blur(1.2rem);
            padding:10px;
            opacity:0.75;
           
        }
        @keyframes spin {
            from{
                --angle:0deg;
            }
            to{
                --angle:360deg;
            }
        }
    }
`
const ErrorMensagen=styled.p`
    color:red;
    
    font-size:${Redm(20,screen)};
    margin-top:0px;
    justify-self:start;
    align-self:center;
`

export default function () {
    const [Email,setEmail]=useState("");
    const [Senha,setSenha]=useState("");


    const esquemaLindo=z.object({
        Email:z.email({message:"Digite um E-mail valido"}),
        Senha:z.string()
        .min(8,{message:"Minimo de 8 caracteres"})
        .regex(/[a-z]/,{message:"Letras minusculas"})
        .regex(/[A-Z]/,{message:"Letras maiusculas"})
        .regex(/[0-9]/,{message:"Deve conter numeros"})
        .regex(/[^a-zA-Z0-9]/,{message:"Deve Conter caracter especiais"})
    })

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(esquemaLindo)
    })   

    useEffect(()=>{
        console.log(errors.Senha!=undefined || errors.Email!=undefined?errors:"None")
        
        },[errors])

    const Submetido=(data:any)=>{
        console.log(data)
    }

    return (
        <CardPrincipal onSubmit={handleSubmit(Submetido)}>
            <Titulo>Tela de login</Titulo>
            <FormPrincipal>
                <InputText type="text" {...register("Email")} placeholder={"E-mail"} value={Email} onChange={e=>setEmail(e.target.value)}></InputText>
                {errors.Email!=undefined?<ErrorMensagen>{errors.Email.message}</ErrorMensagen>:<ErrorMensagen></ErrorMensagen>}
                <InputText type="password" {...register("Senha")} placeholder="Senha"value={Senha} onChange={e=>setSenha(e.target.value)}></InputText>
                {errors.Senha!=undefined?<ErrorMensagen>{errors.Senha.message}</ErrorMensagen>:<ErrorMensagen></ErrorMensagen>}
                
                <BtnForm type="submit" value="Login" ></BtnForm>
            </FormPrincipal>
        </CardPrincipal>
    )
}