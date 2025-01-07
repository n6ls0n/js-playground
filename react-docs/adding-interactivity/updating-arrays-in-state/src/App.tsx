import { JSX } from 'react/jsx-runtime';

// ############# Updating arrays without mutation  #############

// import { useState } from 'react';

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState<{ id: number; name: string }[]>([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         setArtists([
//           ...artists,
//           { id: nextId++, name: name }
//         ]);
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// #############

// import { useState } from 'react';

// let initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>
//             {artist.name}{' '}
//             <button onClick={() => {
//               setArtists(
//                 artists.filter(a =>
//                   a.id !== artist.id
//                 )
//               );
//             }}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// #############

// import { useState } from 'react';

// let initialShapes = [
//   { id: 0, type: 'circle', x: 50, y: 100 },
//   { id: 1, type: 'square', x: 150, y: 100 },
//   { id: 2, type: 'circle', x: 250, y: 100 },
// ];

// export default function ShapeEditor() {
//   const [shapes, setShapes] = useState(
//     initialShapes
//   );

//   function handleClick() {
//     const nextShapes = shapes.map(shape => {
//       if (shape.type === 'square') {
//         // No change
//         return shape;
//       } else {
//         // Return a new circle 50px below
//         return {
//           ...shape,
//           y: shape.y + 50,
//         };
//       }
//     });
//     // Re-render with the new array
//     setShapes(nextShapes);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Move circles down!
//       </button>
//       {shapes.map(shape => (
//         <div
//           key={shape.id}
//           style={{
//           background: 'purple',
//           position: 'absolute',
//           left: shape.x,
//           top: shape.y,
//           borderRadius:
//             shape.type === 'circle'
//               ? '50%' : '',
//           width: 20,
//           height: 20,
//         }} />
//       ))}
//     </>
//   );
// }


// #############

// import { useState } from 'react';

// let initialCounters = [
//   0, 0, 0
// ];

// export default function CounterList() {
//   const [counters, setCounters] = useState(
//     initialCounters
//   );

//   function handleIncrementClick(index: number) {
//     const nextCounters = counters.map((c, i) => {
//       if (i === index) {
//         // Increment the clicked counter
//         return c + 1;
//       } else {
//         // The rest haven't changed
//         return c;
//       }
//     });
//     setCounters(nextCounters);
//   }

//   return (
//     <ul>
//       {counters.map((counter, i) => (
//         <li key={i}>
//           {counter}
//           <button onClick={() => {
//             handleIncrementClick(i);
//           }}>+1</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// #############

// import { useState } from 'react';

// let nextId = 3;
// const initialArtists = [
//   { id: 0, name: 'Marta Colvin Andrade' },
//   { id: 1, name: 'Lamidi Olonade Fakeye'},
//   { id: 2, name: 'Louise Nevelson'},
// ];

// export default function List() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState(
//     initialArtists
//   );

//   function handleClick() {
//     const insertAt = 1; // Could be any index
//     const nextArtists = [
//       // Items before the insertion point:
//       ...artists.slice(0, insertAt),
//       // New item:
//       { id: nextId++, name: name },
//       // Items after the insertion point:
//       ...artists.slice(insertAt)
//     ];
//     setArtists(nextArtists);
//     setName('');
//   }

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={handleClick}>
//         Insert
//       </button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


// #############

// import { useState } from 'react';

// const initialList = [
//   { id: 0, title: 'Big Bellies' },
//   { id: 1, title: 'Lunar Landscape' },
//   { id: 2, title: 'Terracotta Army' },
// ];

// export default function List() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const nextList = [...list];
//     nextList.reverse();
//     setList(nextList);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         Reverse
//       </button>
//       <ul>
//         {list.map(artwork => (
//           <li key={artwork.id}>{artwork.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }


// ############# Updating objects inside arrays #############
// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function BucketList() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   interface Artwork {
//     id: number;
//     title: string;
//     seen: boolean;
//   }

//   function handleToggleMyList(artworkId: number, nextSeen: boolean) {
//     setMyList(myList.map((artwork: Artwork) => {
//       if (artwork.id === artworkId) {
//         return { ...artwork, seen: nextSeen };
//       } else {
//         return artwork;
//       }
//     }));
//   }

//   function handleToggleYourList(artworkId: number, nextSeen: boolean) {
//     setYourList(yourList.map(artwork => {
//       if (artwork.id === artworkId) {
//         // Create a *new* object with changes
//         return { ...artwork, seen: nextSeen };
//       } else {
//         // No changes
//         return artwork;
//       }
//     }));
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// interface Artwork {
//   id: number;
//   title: string;
//   seen: boolean;
// }

// function ItemList({ artworks, onToggle }: { artworks: Artwork[], onToggle: (id: number, seen: boolean) => void }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }


// ############# Challenge 1 Solution #############

// import { useState } from 'react';

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId: number) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return { ...product, count: product.count + 1 };
//       } else {
//         return product;
//       }
//     }));
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
// ############# Challenge 2 Solution #############

// import { useState } from 'react';

// const initialProducts = [{
//   id: 0,
//   name: 'Baklava',
//   count: 1,
// }, {
//   id: 1,
//   name: 'Cheese',
//   count: 5,
// }, {
//   id: 2,
//   name: 'Spaghetti',
//   count: 2,
// }];

// export default function ShoppingCart() {
//   const [
//     products,
//     setProducts
//   ] = useState(initialProducts)

//   function handleIncreaseClick(productId: number) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         return {
//           ...product,
//           count: product.count + 1
//         };
//       } else {
//         return product;
//       }
//     }))
//   }

//   function handleDecreaseClick(productId: number) {
//     setProducts(products.map(product => {
//       if (product.id === productId) {
//         if (product.count > 1) {
//           return {
//             ...product,
//             count: product.count - 1
//           };
//         } else {
//           return {
//             ...product,
//             count: 0
//           };
//         }
//       } else {
//         return product;
//       }
//     }).filter(product => product.count > 0))
//   }

//   return (
//     <ul>
//       {products.map(product => (
//         <li key={product.id}>
//           {product.name}
//           {' '}
//           (<b>{product.count}</b>)
//           <button onClick={() => {
//             handleIncreaseClick(product.id);
//           }}>
//             +
//           </button>
//           <button onClick={() => {
//             handleDecreaseClick(product.id);
//           }}>
//             –
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }
// ############# Challenge 3 Solution #############

import { useState } from 'react';
import AddTodo from './AddTodo';
import { Todo } from './TaskList';
import TaskList from './TaskList';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(
    initialTodos
  );


function handleAddTodo(title: string) {
    const newTodo: Todo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        title: title,
        done: false
    };
    setTodos([...todos, newTodo]);
}

  function handleChangeTodo(nextTodo: Todo) {
    const todo = todos.find(t =>
      t.id === nextTodo.id
    );
    if (todo) {
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    }
    setTodos([...todos]);
  }

  function handleDeleteTodo(todoId: number) {
    const nextTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(nextTodos);
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}


// ############# Challenge 4 Solution #############

// See website
