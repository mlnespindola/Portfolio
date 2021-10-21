import "./contact.scss";
import { useRef, useState } from "react";

export default function Contact() {

    const [formEnviado, setFormEnviado] = useState(false);
  const inputNameValue = useRef("");
  const inputEmailValue = useRef("");
  const inputMensagemValue = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    setFormEnviado(true);

    const formData = [
      { nome: inputNameValue.current.value },
      { email: inputEmailValue.current.value },
      { mensagem: inputMensagemValue.current.value },
    ];

    console.log(formData);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="imgs/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Seu nome"
            required
            ref={inputNameValue}
          />
          <input
            type="email"
            placeholder="Email"
            required
            ref={inputEmailValue}
          />
          <textarea
            placeholder="Messagem"
            required
            ref={inputMensagemValue}
          ></textarea>
          <button type="submit">enviar</button>
          {formEnviado && (
            <span>Obrigada! entrarei em contato assim que possível!</span>
          )}
        </form>
      </div>
    </div>
  );
}
