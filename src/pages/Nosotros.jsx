import React from 'react'
import { Link } from 'react-router-dom'

function Nosotros() {
  return (
    <>
    <h1>Nosotros</h1>
            <hr />
    <div style={{ width: '85%', margin: '0 auto' }}>

        <p>MultiATM quiere llegar a ser uno de sus mejores proveedores, socio de negocios y amigo, con quien podrá contar siempre para ayudar con todas sus necesidades de Hardware. Contamos con un equipo excepcional de profesionales con una vasta experiencia en el campo de IT lo que combinado con nuestra flexibilidad, agilidad y eficiencia, nos permite llevar nuestros servicios al nivel más alto de excelencia, con productos de máxima calidad y precios altamente competitivos para asegurar que nuestros clientes tengan los mejores resultados.</p>
        <p>MultiATM se especializa en la COMPRA y VENTA de sistemas completos, upgrades (actualizaciones) Partes, repuestos, etc. (nuevos y reacondicionados). Tenemos acceso a millones de dólares de Hardware en inventarios de fabricantes, distribuidores, y revendedores en todo el mundo, lo cual nos permite ofrecer precios bajos y realizar entregas rápidas eficientemente..</p>
        <p>Nuestra Compañía está comprometida a superar las expectativas de los clientes. Actuando como un componente clave de su equipo los ayudamos a tener éxito en sus proyectos e incrementar su rentabilidad. Nuestro objetivo es claro, queremos ser socios estratégicos de nuestros clientes y ser su primera opción como proveedores en todas sus necesidades de Hardware en Informática. La misión de MultiSol Inc. es alcanzar el más alto nivel de confianza con nuestros clientes y lograr crecimiento con beneficio mutuo.</p>
        <Link to="/"><button>Volver al Inicio</button></Link>
    </div>
    </>
  )
}

export default Nosotros