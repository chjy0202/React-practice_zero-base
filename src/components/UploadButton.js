import { Icon } from './Icon.js';

const BUTTON_TEXT = {
  idle: '업로드',
  pending: '업로드 중',
  resolved: '완료',
  rejected: '실패',
  disabled: '업로드',
};

const buttonStyle = {
  display: 'flex',
  marginTop: '20px',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: '89px',
  height: '30px',
  padding: '9px 12px',
  fontFamily: 'Spoqa Han Sans Neo',
  fontSize: '12px',
  fontWeight: '700',
  lineHeight: '12px',
  color: 'rgba(82, 85, 119, 1)',
  background: '#ffffff',
  boxShadow: '0px 4px 4px #DBDDF0',
  borderRadius: '30px',
  border: 'none',
  // cursor: 'pointer',
};

export function UploadButton(props) {
  const { status } = props;
  const text = BUTTON_TEXT[status];
  let disabled = status === 'disabled';

  return (
    <button
      style={{
        ...buttonStyle,
        cursor: `${disabled ? 'not-allowed' : 'pointer'}`,
      }}
      type="button"
      disabled={disabled}
    >
      <span style={{ filter: `${disabled ? 'opacity(50%)' : ''}` }}>
        {text}
      </span>
      <Icon status={status}></Icon>
    </button>
  );
}
