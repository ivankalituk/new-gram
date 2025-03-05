import { FC } from "react";
import "./message.scss";

// в телеге тут только текст и время
// если сообщение твоё, то тут также есть статус отправки
// статуса отправки пока нет так кака я не нашёл нормальные свг

interface MessageInterface {
  type: string;
}

const Message: FC<MessageInterface> = ({ type }) => {
  return (
    <div
      className="message"
      style={
        type === "user"
          ? { justifyContent: "end" }
          : { backgroundColor: "start" }
      }
    >
      <div
        className="message_container"
        style={
          type === "user"
            ? { backgroundColor: "#766ac8" }
            : { backgroundColor: "#2c2c2c" }
        }
      >
        <span className="message_text">
          Очень длинное сообщение для понимания позиции времени и статус статус
          статус статус статус статус статус статус статус статус статус
          статус{" "}
        </span>
        <span className="message_time">21:59</span>
      </div>
    </div>
  );
};

export default Message;
