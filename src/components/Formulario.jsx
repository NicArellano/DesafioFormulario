 export const Formulario = (props) => {
    return (
            <div>
          <form>
            <input type="text" placeholder="Nombre"/> {props.text}
            <input type="text" placeholder="tuemail@ejemplo.com"/> {props.text}
            <input type="text" placeholder="Contraseña"/> {props.text}
            <input type="text" placeholder="Confirma tu Contraseña" /> {props.text} 
            </form>
            <button type="submit" value="Registrate" >Registrate </button>
            </div>
      )

 }




  
 