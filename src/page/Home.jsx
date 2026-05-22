import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import Button from '../components/ui/Buttom.jsx'
import Card from '../components/card/Card.jsx'
import Contact from './Contact.jsx'
import '@/styles/App.css'

const services = [
  {
    primaryParamName: "Servicio",
    primaryParamValue: "Limpieza y Mantenimiento",
    secondaryParamName: "Descripción",
    secondaryParamValue: "Limpieza interna de polvo, pasta térmica y ventiladores para mejorar el rendimiento.",
  },
  {
    primaryParamName: "Servicio",
    primaryParamValue: "Reparación de Hardware",
    secondaryParamName: "Descripción",
    secondaryParamValue: "Diagnóstico y reemplazo de componentes: RAM, disco, fuente de poder y más.",
  },
  {
    primaryParamName: "Servicio",
    primaryParamValue: "Instalación de Software",
    secondaryParamName: "Descripción",
    secondaryParamValue: "Instalación de sistema operativo, drivers, antivirus y programas esenciales.",
  },
]

function Home() {

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

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
        <Contact />
      </section>
    </>
  )
}

export default Home;