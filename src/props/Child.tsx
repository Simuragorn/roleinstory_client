interface ChildProps {
  color: string;
}

export const Child = (props: ChildProps) => {
  return <div>{props.color}</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};
