import React from 'react';
import './styles.scss';

interface InputFieldProps {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  value: string;
  onChange: any;
  ref: any;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, type, value, onChange, ref }) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="visually-hidden">{label}</label>
      <InputComponent
        id={name}
        name={name}
        placeholder={label}
        className={isTextarea ? "comment-input-field" : "input-field"}
        type={isTextarea ? undefined : type}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    </div>
  );
};

export default InputField;