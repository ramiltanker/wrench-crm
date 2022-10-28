import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames';

export enum InputThemes {
  CLEAR = 'clear',
  OUTLINE_PURPLE = 'outline_purple'
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  theme?: InputThemes;
}

const Input: FC<InputProps> = ({ className, value, onChange, theme = InputThemes.CLEAR, ...otherProps }) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const mods = {
    [styles[theme]]: true
  };

  return (
    <input
      data-testid="shared-input"
      {...otherProps}
      value={value}
      onChange={handleOnChange}
      className={classNames(styles.input, mods, [className])}
    ></input>
  );
};

export { Input };
