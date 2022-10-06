const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    &nbsp;
    <input id={id} value={value} type={type} onChange={onInputChange} />
  </>
);

export default InputWithLabel;
