import { forwardRef, ForwardedRef} from 'react';

export default forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function SearchInput(props, ref: ForwardedRef<HTMLInputElement>) {
    return (
      <input
        ref={ref}
        placeholder="Looking for something?"
      />
    );
  }
);
