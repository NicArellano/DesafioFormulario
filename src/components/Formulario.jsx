 export const Formulario = (props) => {
    return (
    
          <form>
            <input type="text" placeholder="Nombre"/> {props.text}
            <input type="text" placeholder="Email"/> {props.text}
            <input type="text" placeholder="Contraseña"/> {props.text}
            <input type="text" placeholder="Repite Contraseña" /> {props.text} 
            </form>
        
      )

 }



  
 