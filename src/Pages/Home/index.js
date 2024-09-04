import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function Home() {
  const [data, setData] = useState({
    peso: "",
    altura: "",
  });
  const [resultado, setResultado] = useState("O resultado aparecerá aqui.");
  let imc, classificacao;

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function handleCalculate(event) {
    event.preventDefault();
    imc = data.peso / (data.altura * data.altura);

    if (!imc) {
      return setResultado("Preencha os campos corretamente!");
    }

    if (imc < 16.9) {
      classificacao = "Muito abaixo do peso";
    } else if (imc >= 17 && imc <= 18.4) {
      classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
      classificacao = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
      classificacao = "Obesidade grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
      classificacao = "Obesidade grau 2";
    } else {
      classificacao = "Obesidade grau 3";
    }

    setData({
      peso: "",
      altura: "",
    });

    return setResultado(
      `O seu IMC é: ${imc.toFixed(
        2
      )} kg/m2, sua classificação é: ${classificacao}!`
    );
  }

  return (
    <div>
      <Header />
      <div className="main">
        <div>
          <h2>Calculadora de IMC</h2>
        </div>
        <form id="form">
          <div>
            <input
              type="number"
              id="peso"
              min="0"
              name="peso"
              value={data.peso}
              onChange={handleChange}
              placeholder="Digite seu peso aqui (ex.: 69,2)"
              required
            />
            <input
              type="number"
              id="altura"
              min="0"
              max="2.5"
              name="altura"
              value={data.altura}
              onChange={handleChange}
              placeholder="Digite sua altura aqui (ex.: 1,70)"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              id="submit-btn"
              onClick={(event) => {
                handleCalculate(event);
              }}
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
      <div className="resultado">
        <div id="resultado">
          <h3>Resultado</h3>
          <p>{resultado}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
