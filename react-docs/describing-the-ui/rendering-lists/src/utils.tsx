export interface Person {
    imageId: string;
    name: string;
}

export function getImageUrl(person: Person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
