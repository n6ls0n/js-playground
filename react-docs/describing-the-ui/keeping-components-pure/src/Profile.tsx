import { getImageUrl, Person } from './utils';

export default function Profile({ person }: {person: Person}) {
  return (
    <>
      <Header currentPerson={person}/>
      <Avatar currentPerson={person} />
    </>
  )
}

function Header({currentPerson}: {currentPerson: Person}) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar({currentPerson}: {currentPerson: Person}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
