import TituloPreto from "./TituloPreto"
import './QuemSomos.css'

function QuemSomos() {
    return(
            <section id="quemsomos" className="p-2 mx-auto d-flex justify-content-center align-items-center">
                <div className="d-flex bg-black w-50">
                    <img className="w-100" src="" alt="" />
                </div>
                <div className=" d-flex flex-column justify-content-center align-items-center w-50">
                    <TituloPreto content="Quem somos"> </TituloPreto>
                    <p className="p-4">O bar se Iniciou com o seu Silvio (Avô). Que infelizmente faleceu no ano de 2022. O seu neto (Que também se chama Silvio) produziu esse site, para ajudar a vender as garrafas que ainda estão no bar.</p>
                </div>
            </section>
    )
}

export default QuemSomos