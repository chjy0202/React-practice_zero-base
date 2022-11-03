const ICON_TYPE = {
  idle: 'up-arrow',
  pending: 'spinner-animate',
  resolved: 'check-mark',
  rejected: 'cross',
  disabled: 'not-allowed',
};

export function Icon(props) {
  const { status } = props;

  return (
    <img
      style={{ filter: `${status === 'disabled' ? 'opacity(50%)' : ''}` }}
      src={`/assets/icons/type=${ICON_TYPE[status]}.svg`}
    ></img>
  );
}
