export interface letter {
    id: number;
    isStarred: boolean;
    subject: string;
  };

interface LetterProps {
  letter: letter,
  isHighlighted: boolean;
  onHover: (letterId: number) => void;
  onToggleStar: (letterId: number) => void;
}

export default function Letter({
    letter,
    isHighlighted,
    onHover,
    onToggleStar,
  }: LetterProps) {
    return (
      <li
        className={
          isHighlighted ? 'highlighted' : ''
        }
        onFocus={() => {
          onHover(letter.id);
        }}
        onPointerMove={() => {
          onHover(letter.id);
        }}
      >
        <button onClick={() => {
          onToggleStar(letter.id);
        }}>
          {letter.isStarred ? 'Unstar' : 'Star'}
        </button>
        {letter.subject}
      </li>
    )
  }
