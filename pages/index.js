import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");
  const [showTatalinho, setShowTatalinho] = useState(false);

  const fullText = "Saudades de você, pô. 😔";
  const fullSubText = "Tião... 🩵";

  // Função para iniciar o efeito de digitação
  const startTyping = () => {
    setText("");
    setSubText("");
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      // Quando finalizar a frase principal
      if (index > fullText.length) {
        clearInterval(interval);

        // Adiciona um delay de 80ms antes de começar a próxima linha
        setTimeout(() => {
          startSubtitle();
        }, 80); // delay depois de terminar o texto principal
      }
    }, 80);

    const startSubtitle = () => {
      let subIndex = 0;
      const subInterval = setInterval(() => {
        setSubText(fullSubText.slice(0, subIndex));
        subIndex++;
        if (subIndex > fullSubText.length) {
          clearInterval(subInterval);
        }
      }, 150);
    };
  };

  // Loop no efeito de digitação
  useEffect(() => {
    if (!showTatalinho) {
      startTyping();

      const loop = setInterval(() => {
        startTyping();
      }, 5000); // reinicia o typing a cada 5 segundos

      return () => clearInterval(loop);
    }
  }, [showTatalinho]);

  // Botão "Clique aqui! 👉👈"
  const handleClick = () => {
    setShowTatalinho(true);
    setText("");
    setSubText("");
  };

  // Botão "Voltar"
  const handleVoltar = () => {
    setShowTatalinho(false);
  };

  return (
    <div style={styles.container}>
      {!showTatalinho ? (
        <>
          <h1 style={styles.title}>{text}</h1>
          <h2 style={styles.subtitle}>{subText}</h2>
          <button onClick={handleClick} style={styles.button}>
            Clique aqui! 👉👈
          </button>
        </>
      ) : (
        <>
          <h1 style={styles.tatalinho}>
            Dia 30. (E São João em Itaberaba. 🌽🔥) 😘
          </h1>
          <button onClick={handleVoltar} style={styles.voltarButton}>
            Voltar 🔙
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    margin: "0",
    textShadow: "1px 1px 5px rgba(0,0,0,0.2)",
    transition: "all 0.5s ease-in-out",
  },
  subtitle: {
    fontSize: "32px",
    marginTop: "20px",
    color: "#333",
    textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
    transition: "all 0.5s ease-in-out",
  },
  button: {
    marginTop: "40px",
    padding: "15px 30px",
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: "#FFB6C1",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s ease",
  },
  voltarButton: {
    marginTop: "30px",
    padding: "12px 25px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#87CEFA",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    transition: "background-color 0.3s ease",
  },
  tatalinho: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#FF69B4",
    textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
  },
};
