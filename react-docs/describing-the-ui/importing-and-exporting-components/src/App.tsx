import { JSX } from 'react/jsx-runtime';

// ############# Exporting and importing a component  #############
// import Gallery from './Gallery';
// export default function(): JSX.Element{
//     return (
//         <Gallery />
//     );
// }

// ############# Exporting and importing multiple components from the same file  #############

// import Gallery from './Gallery';
// import { Profile } from './Gallery';
// export default function(): JSX.Element{
//     return (
//         <Profile />
//     );
// }


// ############# Challenge 1 Solution #############

import Gallery from './Gallery';
import Profile  from './Profile';
export default function App(): JSX.Element {
    return (
        <>
        <Gallery />
        <Profile />
        </>
    );
}

