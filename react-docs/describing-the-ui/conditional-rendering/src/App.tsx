import { JSX } from 'react/jsx-runtime';

// ############# Conditionally returning JSX #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   if (isPacked) {
//     return <li className="item">{name} ✅</li>;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   if (isPacked) {
//     return null;
//   }
//   return <li className="item">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// ############# Conditionally including JSX #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   return (
//     <li className="item">
//       {isPacked ? (
//         <del>
//           {name + ' ✅'}
//         </del>
//       ) : (
//         name
//       )}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   return (
//     <li className="item">
//       {name} {isPacked && '✅'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   let itemContent = name;
//   if (isPacked) {
//     itemContent = name + " ✅";
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// #############   #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   let itemContent: string | JSX.Element = name;
//   if (isPacked) {
//     itemContent = (
//       <del>
//         {name + " ✅"}
//       </del>
//     );
//   }
//   return (
//     <li className="item">
//       {itemContent}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// ############# Challenge 1 Solution #############

// function Item({ name, isPacked }: { name: string, isPacked: boolean }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✅' : '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// ############# Challenge 2 Solution #############

// function Item({ name, importance }: { name: string, importance: number }) {
//   return (
//     <li className="item">
//       {name}
//       {importance > 0 && ' '}
//       {importance > 0 && <i>(Importance: {importance})</i>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           importance={9}
//           name="Space suit"
//         />
//         <Item
//           importance={0}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           importance={6}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }

// ############# Challenge 3 Solution #############

function Drink({ name }: { name: string }) {
  if (name === 'tea') {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
          <>
          <dt>Part of plant</dt>
          <dd>leaf</dd>
          <dt>Caffeine content</dt>
          <dd>15–70 mg/cup</dd>
          <dt>Age</dt>
          <dd>4,000+ years</dd>
          </>
      </dl>
    </section>
  );
} else {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
          <>
          <dt>Part of plant</dt>
          <dd>seed</dd>
          <dt>Caffeine content</dt>
          <dd>70–140 mg/cup</dd>
          <dt>Age</dt>
          <dd>1,000+ years</dd>
          </>
      </dl>
    </section>
  );
}
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
