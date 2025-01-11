import { useState } from 'react';

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

interface HandleChangeEvent {
    target: {
        value: string;
    };
}

function handleChange(e: HandleChangeEvent) {
    setValue(e.target.value);
}

  const inputProps = {
    value: value,
    onChange: handleChange
  };

  return inputProps;
}
