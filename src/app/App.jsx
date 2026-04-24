import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Button from '../components/ui/Buttom.jsx'
import '@/styles/App.css'

function App() {

  const [mostrar, setMostrar] = useState(false)
  const nodeRef = useRef(null)

  return (
    <>
      <Button type="button" label={mostrar ? "Ocultar" : "Mostrar"} buttonType="primary" onClick={() => setMostrar(!mostrar)} />
      <div>
        <CSSTransition
          in={mostrar}
          timeout={300}
          classNames="fade"
          unmountOnExit
          nodeRef={nodeRef}
          >
          <div className="box" ref={nodeRef}>
            ¡Hola! Soy un componente con animación de entrada y salida.
          </div>
      </CSSTransition>
      </div>
    </>
  )
}

export default App;
