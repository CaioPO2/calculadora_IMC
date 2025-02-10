import { useState } from "react"
import './formulario.css';


const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const IMC = peso / (altura * altura);

        if(IMC < 18.5){
            return (
                <p>A classificação do seu IMC é Magreza, e o valor é {IMC.toFixed(2)}</p>
            )
        }else if(IMC >= 18.5 && IMC <= 24.9 ){
            return(
                <p>A classificação do seu IMC é Normal, e o valor é {IMC.toFixed(2)}</p>
            )
        }else if (IMC >= 25 && IMC <= 29.9){
            return(
                <p>A classificação do seu IMC é Sobrepeso, e o valor é {IMC.toFixed(2)}</p>
            )
        }else if (IMC >= 30 && IMC <= 39.9){
            return(
                <p>A classificação do seu IMC é Obesidade, e o valor é {IMC.toFixed(2)}</p>
            )
        }else if (IMC >= 40){
            return(
                <p>A classificação do seu IMC é Obesidade Grave, e o valor é {IMC.toFixed(2)}</p>
            )
        }else {
            return(
                <p>Digite os valores</p>
            )
        }
    }



    return(
        <div>
            <h1>Calculadora IMC</h1>
            <form>
                <input id="input-peso" type="number" placeholder="Digite seu peso" onChange={ ({target}) => setPeso(parseFloat(target.value)) } />
                <input type="number" placeholder="Digite sua altura ex: 1.85" onChange={ ({target}) => setAltura(parseFloat(target.value)) } />
                {renderizaResultado()}
            </form>
        </div>
    )
}

export default Formulario