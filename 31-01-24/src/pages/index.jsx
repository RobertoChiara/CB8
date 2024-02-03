import OpenAI from "openai";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [userChatReq, setUserChatReq] = useState("");
  const [inputValue, setInputValue] = useState("");

  const onHandleChatGPT3 = async (e) => {
    e.preventDefault();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "system", content: inputValue }],
    });

    setUserChatReq(completion.choices[0].message.content);
    setInputValue("");
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  return (
    <div className={styles.maincontainer}>
      <p className={styles.header}>ChatGPT 3.5</p>
      <div className={styles.container}>
        <div className={styles.centerContainer}>
          <img src="/open-ai.svg" alt="logo" className={styles.logo} />
          <ul className={styles.list}>
            {userChatReq ? (
              userChatReq.split("\n").map((item) => <li key={item}>{item}</li>)
            ) : (
              <p>Come posso aiutarti oggi?</p>
            )}
          </ul>
          <div className={styles.bottomContainer}>
            <div className={styles.examplesContainer}>
              <div className={styles.example}>
                <h4>Brainstorm nomi</h4>
                <p>per un cocktail analcolico con Coca-Cola</p>
              </div>
              <div className={styles.example}>
                <h4>Mostrami un frammento di codice</h4>
                <p>di una intestazione fissa di un sito web</p>
              </div>
              <div className={styles.example}>
                <h4>Progetta uno schema di database</h4>
                <p>per un negozio di merchandise online</p>
              </div>
              <div className={styles.example}>
                <h4>Scrivere una nota di ringraziamento</h4>
                <p>al mio intervistatore</p>
              </div>
            </div>
            <div className={styles.input}>
              <form onSubmit={onHandleChatGPT3}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={onHandleInputValue}
                  className={styles.textImput}
                  placeholder="Messaggio ChatGPT..."
                />
                <input type="submit" value="⬆" className={styles.btntImput} />
              </form>
              <p className={styles.bottom}>
                ChatGPT può commettere errori. Considera di verificare le
                informazioni importanti
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
