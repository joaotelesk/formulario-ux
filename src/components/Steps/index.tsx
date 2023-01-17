/* Styles */
import styles from "./Steps.module.scss";
import classnames from "classnames";

/* Components */
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

type stepsProps = {
  currentStep: number;
};
export default function Steps({ currentStep }: stepsProps) {
  return (
    <>
      <div className={styles.steps}>
        <div className={`${styles.step} ${styles.active}`}>
          <AiOutlineUser />
          <p>Identificação</p>
        </div>
        <div
          className={classnames(
            styles.step,
            currentStep >= 1 ? styles.active : ""
          )}
        >
          <AiOutlineStar />
          <p>Avaliação</p>
        </div>
        <div
          className={classnames(
            styles.step,
            currentStep >= 2 ? styles.active : ""
          )}
        >
          <FiSend />
          <p>Envio</p>
        </div>
      </div>
    </>
  );
}
