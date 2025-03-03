import { FC, useEffect, useState } from "react";
import "./modalNotification.scss";
import notification from "../../assets/images/infoWhite.svg";

interface ModalNotificationProps {
  enabled: boolean
  enableChangeCallback: () => void
  text: string
}

const ModalNotification: FC<ModalNotificationProps> = ({ enabled, enableChangeCallback, text }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (enabled) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 2000);

      const removeTimer = setTimeout(() => {
        enableChangeCallback();
      }, 2300);

      return () => {
        clearTimeout(timer);
        clearTimeout(removeTimer);
      };
    }
  }, [enabled, enableChangeCallback]); 

  if (!enabled) return null; 

  return (
    <div className={visible ? "notification show" : "notification hide"}>
      <img src={notification} alt="i" />
      <span>{text}</span>
    </div>
  );
};

export default ModalNotification;
