/* Styles */
import styles from "./Steps.module.scss";
import classnames from "classnames";

/* Components */
import { TiTick } from "react-icons/ti";

/* Hooks */
import { useState } from "react";

type stepsProps = {
  currentStep: number;
};
export default function Steps({ currentStep }: stepsProps) {
  const steps = ["Identificação", "Avaliação", "Envio"];

  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div
            key={i}
            className={classnames(
              styles["step-item"],
              currentStep === i ? styles.active : "",
              i < currentStep || complete ? styles.complete : ""
            )}
          >
            <div className={styles["step"]}>
              {i + 1 <= currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
}
