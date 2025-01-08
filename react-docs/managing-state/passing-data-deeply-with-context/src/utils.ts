export interface Place {
    id: number;
    imageId: string;
    name: string;
    description: string;
}

export function getImageUrl(place: Place) {
    return (
      'https://i.imgur.com/' +
      place.imageId +
      'l.jpg'
    );
  }
