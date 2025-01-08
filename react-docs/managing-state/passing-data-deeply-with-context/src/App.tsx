import { JSX } from 'react/jsx-runtime';

// ############# Context: an alternative to passing props #############

// import Heading from './Heading';
// import Section from './Section';

// export default function Page() {
//   return (
//     <Section level={1}>
//       <Heading>Title</Heading>
//       <Section level={2}>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section level={3}>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section level={4}>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

// ############# Using and providing context from the same component  #############

// import Heading from './Heading';
// import Section from './Section';

// export default function Page() {
//   return (
//     <Section>
//       <Heading>Title</Heading>
//       <Section>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Heading>Heading</Heading>
//         <Section>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Heading>Sub-heading</Heading>
//           <Section>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//             <Heading>Sub-sub-heading</Heading>
//           </Section>
//         </Section>
//       </Section>
//     </Section>
//   );
// }

// ############# Context passes through intermediate components #############

// import Heading from './Heading';
// import Section from './Section';

// export default function ProfilePage() {
//   return (
//     <Section isFancy={false}>
//       <Heading>My Profile</Heading>
//       <Post
//         title="Hello traveller!"
//         body="Read about my adventures."
//       />
//       <AllPosts />
//     </Section>
//   );
// }

// function AllPosts() {
//   return (
//     <Section isFancy={false}>
//       <Heading>Posts</Heading>
//       <RecentPosts />
//     </Section>
//   );
// }

// function RecentPosts() {
//   return (
//     <Section isFancy={false}>
//       <Heading>Recent Posts</Heading>
//       <Post
//         title="Flavors of Lisbon"
//         body="...those pastéis de nata!"
//       />
//       <Post
//         title="Buenos Aires in the rhythm of tango"
//         body="I loved it!"
//       />
//     </Section>
//   );
// }

// interface PostProps {
//   title: string;
//   body: string;
// }

// function Post({ title, body }: PostProps) {
//   return (
//     <Section isFancy={true}>
//       <Heading>
//         {title}
//       </Heading>
//       <p><i>{body}</i></p>
//     </Section>
//   );
// }


// ############# Challenge 1 Solution #############

import { useState, useContext } from 'react';
import { places } from './data';
import { getImageUrl, Place } from './utils';
import { ImageSizeContext } from './Context';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider
      value={imageSize}
    >
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place place={place} />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }: { place: Place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: { place: Place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
