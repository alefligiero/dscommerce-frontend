export default function FormTextArea(props: any) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validation,
    invalid = "false",
    dirty = "false",
    onTurnDirty,
    ...textAreaProps
  } = props;

  function handleBlur() {
    onTurnDirty(props.name);
  }

  return (
    <textarea
      onBlur={handleBlur}
      {...textAreaProps}
      data-invalid={invalid}
      data-dirty={dirty}
    />
  );
}
