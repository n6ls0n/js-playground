interface SearchButtonProps {

    onClick: () => void;

  }

export default function SearchButton({ onClick }: SearchButtonProps) {
    return (
      <button onClick={onClick}>
        Search
      </button>
    );
  }
