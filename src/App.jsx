import {Formulario} from './components/Formulario'
import { SocialButton } from './components/SocialButton'


function App () {

return (
    <div className='bg-success-subtle d-flex flex-column align-item-center gap-5 padding: 2px'>
        <header>
            <h1 className='d-flex align-item-center'>Crea una cuenta</h1>
        </header>
<div>

<div className='d-flex align-item-center justify-content-center'><SocialButton /></div>

<div className='d-flex flex-column '><Formulario/></div>


</div>
</div>
)
}

export default App 