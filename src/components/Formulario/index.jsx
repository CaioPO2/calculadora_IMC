import { useState } from "react"


const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    const renderizaResultado = () => {
        const IMC = peso / altura * altura;

        if(IMC <= 18.5){
            return (
                <p>A classificação do seu IMC é Magreza, e o valor é {IMC}</p>
            )
        }else if(IMC > 18 && IMC < 25 ){
            return(
                <p>A classificação do seu IMC é Normal, e o valor é {IMC}</p>
            )
        }else if (IMC >= 25 && IMC < 30){
            return(
                <p>A classificação do seu IMC é Sobrepeso, e o valor é {IMC}</p>
            )
        }else if (IMC >= 30 && IMC < 40){
            return(
                <p>A classificação do seu IMC é Obesidade, e o valor é {IMC}</p>
            )
        }else if (IMC > 40){
            return(
                <p>A classificação do seu IMC é Obesidade Grave, e o valor é {IMC}</p>
            )
        }else {
            return(
                <p>Digite os valores</p>
            )
        }
    }



    return(
        <form>
            <input type="number" placeholder="Digite seu peso" onChange={ ({target}) => setPeso(parseInt(target.value)) } />
            <input type="number" placeholder="Digite sua altura em cm" onChange={ ({target}) => setAltura(parseInt(target.value)) } />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario