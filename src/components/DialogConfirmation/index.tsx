import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  id: number;
  message: string;
  onDialogAnswer: (id: number, answer: boolean) => void;
};

export default function DialogConfirmation({
  id,
  message,
  onDialogAnswer,
}: Props) {
  return (
    <div
      className="dsc-dialog-background"
      onClick={() => onDialogAnswer(id, false)}
    >
      <div
        className="dsc-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(id, false)}>
            <ButtonInverse text="Não" />
          </div>
          <div onClick={() => onDialogAnswer(id, true)}>
            <ButtonPrimary text="Sim" />
          </div>
        </div>
      </div>
    </div>
  );
}
