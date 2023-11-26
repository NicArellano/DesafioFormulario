import { useState } from "react"

 export const Formulario = (props) => {
   
      const [form , setForm] = useState({
            name: "",
            email: "",
            pass: "",
            passRepeat: ""
       })

      const enviar = (e) => {
            e.preventDefault()
            console.log("enviando")
      }

      const changeInput = (e) => {
            const input = e.target.name
            const value = e.target.value
            setForm({...form , [input]: value})
           
      }
   
      return (

     
            <div>
          <form onSubmit={enviar}>
            <input type="text" placeholder="Nombre" name="name" onChange={changeInput}/> {props.text}
            <input type="text" placeholder="tuemail@ejemplo.com" name="email" onChange={changeInput}/> {props.text}
            <input type="text" placeholder="Contraseña" name="pass" onChange={changeInput}/> {props.text}
            <input type="text" placeholder="Confirma tu Contraseña" name="passRepeat" onChange={changeInput}/> {props.text} 
            </form>
            <button type="submit" value="Registrate" >Registrate </button>
            </div>
      )

 }




  
 