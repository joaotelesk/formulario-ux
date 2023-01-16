type stepsProps = {
  currentStep: number;
};
export default function Steps({ currentStep }: stepsProps) {
  return (
    <>
      <span>{currentStep}</span>
    </>
  );
}
