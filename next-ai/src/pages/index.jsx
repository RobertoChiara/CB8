import OpenAI from "openai";
import { useState } from "react";

export default function Home() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });
  const [userRequest, setUserRequest] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userImageReq, setUserImageReq] = useState("");

  const onHandleChatGPT3 = async (e) => {
    e.preventDefault();

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "system",
          content: inputValue,
        },
      ],
    });

    setUserRequest(completion.choices[0]);
    setInputValue("");
  };

  const onHandleDalle2 = async () => {
    const image = await openai.images.generate({
      model: "dall-e-2",
      prompt: inputValue,
    });
  };

  const onHandleInputValue = (e) => setInputValue(e.target.value);

  return (
    <div>
      <ul>
        {userRequest ? (
          userRequest.split("\n").map((item) => <li key={item}>{item}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <form onSubmit={onHandleChatGPT3}>
        <input type="text" value={inputValue} onChange={onHandleInputValue} />
        <input type="submit" value={"Search"} />
      </form>
      <button onClick={onHandleChatGPT3}>Reply</button>;
    </div>
  );
}
