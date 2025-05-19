import { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-06-20T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    setShowMessage(true);
  };

  const handleBack = () => {
    setShowMessage(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>

      <h1 style={styles.title}>🎉🌽 São João de Itaberaba 🤠🎉</h1>

      {!showMessage ? (
        <>
          <div style={styles.countdownBox}>
            <p style={styles.countdownText}>Faltam:</p>
            <p style={styles.time}>
              {timeLeft.days} dias, {timeLeft.hours} horas, {timeLeft.minutes}{" "}
              minutos e {timeLeft.seconds} segundos
            </p>
          </div>
          <div style={styles.buttonWrapper}>
            <button style={styles.button} onClick={handleClick}>
              Clique aqui! 👉👈
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={styles.messageBox}>
            <p style={styles.message}>Beijos do Tatalinho!! 😘</p>
            <button style={styles.button} onClick={handleBack}>
              Voltar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    minHeight: "100vh",
    padding: "2rem",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundImage:
      'url("https://www.itaberabanoticias.com.br/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-22-at-9.18.13-PM.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 0,
  },
  title: {
    fontSize: "3rem",
    marginBottom: "2rem",
    color: "#FFD700",
    textShadow: "2px 2px 8px #000",
    zIndex: 1,
  },
  countdownBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    padding: "2rem",
    display: "inline-block",
    marginBottom: "1.5rem",
    zIndex: 1,
  },
  countdownText: {
    fontSize: "1.7rem",
    marginBottom: "1rem",
    color: "#333",
  },
  time: {
    fontSize: "1.4rem",
    color: "#FF4500",
  },
  buttonWrapper: {
    zIndex: 1,
  },
  button: {
    padding: "0.85rem 2rem",
    fontSize: "1.2rem",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#FF4500",
    color: "#FFF",
    cursor: "pointer",
    boxShadow: "3px 3px 15px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  messageBox: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "2rem",
    borderRadius: "12px",
    display: "inline-block",
    zIndex: 1,
  },
  message: {
    fontSize: "1.7rem",
    marginBottom: "1rem",
    color: "#333",
  },
};

// Adicione isso no final para efeito hover do botão:
styles.button[":hover"] = {
  backgroundColor: "#FF6347",
  transform: "scale(1.05)",
};
