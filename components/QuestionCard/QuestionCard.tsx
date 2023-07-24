import { css, cva } from '@/styled-system/css';
import { vstack } from '@/styled-system/patterns';

const wrapperStyles = css({
  '& h2': { fontSize: '20px', maxW: '400px' },
  '& span *': { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
});

const answerWrapperStyles = vstack({ paddingTop: '8' });

// A Panda CSS recipe
const button = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: 'bold',
    minH: '45px',
    maxW: '400',
    w: 'full',
    mt: '2',
    mb: '2',
    rounded: '10px'
  },
  variants: {
    visual: {
      default: { bg: 'white', color: '#9F50AC' },
      correct: { bg: '#55AC78', color: 'white' },
      wrong: { bg: '#AC5050', color: 'white' }
    }
  },
  defaultVariants: {
    visual: 'correct'
  }
});

type Props = {
  currentQuestionIndex: number;
  question: string;
  answers: string[];
  userAnswer: string | undefined;
  correctAnswer: string;
  onClick: (answer: string, currentQuestionIndex: number) => void;
};

const QuestionCard: React.FC<Props> = ({
  currentQuestionIndex,
  question,
  answers,
  userAnswer,
  onClick,
  correctAnswer
}) => {
  const isAnswerCorrect = userAnswer ? userAnswer === correctAnswer : undefined;

  return (
    <div className={wrapperStyles}>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      <div className={answerWrapperStyles}>
        {answers.map(answer => (
          <div
            key={answer}
            onClick={() => onClick(answer, currentQuestionIndex)}
            className={button({
              visual:
                isAnswerCorrect === false && answer === userAnswer
                  ? 'wrong'
                  : (isAnswerCorrect === true && answer === userAnswer) ||
                    (isAnswerCorrect === false && answer === correctAnswer)
                  ? 'correct'
                  : 'default'
            })}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
