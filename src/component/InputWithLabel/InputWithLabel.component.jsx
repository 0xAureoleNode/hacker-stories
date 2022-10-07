const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input id={id} value={value} type={type} onChange={onInputChange} />
  </>
);

export default InputWithLabel;
