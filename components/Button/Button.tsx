import { css } from '@/styled-system/css';

const styles = css({
  bgColor: '#9F50AC',
  userSelect: 'none',
  fontWeight: 'bold',
  h: '45px',
  minW: '120px',
  rounded: '10px',
  color: 'white'
});

type Props = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
