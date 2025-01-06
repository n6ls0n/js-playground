export interface Person {
    imageId: string;
    name: string;
}

export function getImageUrl(person: Person, size: string = 's'): string {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}
