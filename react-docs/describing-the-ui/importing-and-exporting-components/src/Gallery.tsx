import { JSX } from 'react/jsx-runtime';

// ############# Exporting and importing a component #############

// function Profile(): JSX.Element {
//     return (
//         <img
//             src="https://i.imgur.com/QIrZWGIs.jpg"
//             alt="Alan L. Hart"
//         />
//     );
// }


// export default function Gallery(): JSX.Element {
//     return (
//         <section>
//             <h1>Amazing Scientists</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

// ############# Exporting and importing multiple components from the same file  #############

// export function Profile(): JSX.Element {
//     return (
//         <img
//             src="https://i.imgur.com/QIrZWGIs.jpg"
//             alt="Alan L. Hart"
//         />
//     );
// }


// export default function Gallery(): JSX.Element {
//     return (
//         <section>
//             <h1>Amazing Scientists</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

// ############# Challenge 1 Solution #############

import Profile from './Profile';

export default function Gallery(): JSX.Element {
    return (
        <section>
            <h1>Amazing Scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}
