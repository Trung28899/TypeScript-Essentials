export type ContainerProps = {
  styles: React.CSSProperties;
};

export type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  handleClick: () => void;
  handleClick2: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};
