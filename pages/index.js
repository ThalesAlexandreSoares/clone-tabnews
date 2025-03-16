import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [subText, setSubText] = useState("");

  const fullText = "Boa prova, gostosa.";
  const fullSubText = "Tião! 🩵";

  // Efeito de digitação para o título
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        startSubtitle();
      }
    }, 100);

    const startSubtitle = () => {
      let subIndex = 0;
      const subInterval = setInterval(() => {
        setSubText(fullSubText.slice(0, subIndex));
        subIndex++;
        if (subIndex > fullSubText.length) {
          clearInterval(subInterval);
        }
      }, 100);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{text}</h1>
      <h2 style={styles.subtitle}>{subText}</h2>
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
};
