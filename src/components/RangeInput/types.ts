export interface IProps {
  name: string;
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  hideLabel?: boolean;
}
