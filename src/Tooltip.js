import './Tooltip.css';

export default function Tooltip(props) {
  return (
    <span className="tooltip">
      <span className="label">{props.label}</span>
      {props.children}
    </span>
  );
}
