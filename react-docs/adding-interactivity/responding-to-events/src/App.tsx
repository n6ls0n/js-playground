import { JSX } from 'react/jsx-runtime';

// ############# Adding event handler #############

// function AlertButton({ message, children }: { message: string, children: React.ReactNode }) {
//     return (
//       <button onClick={() => alert(message)}>
//         {children}
//       </button>
//     );
//   }

//   export default function Toolbar() {
//     return (
//       <div>
//         <AlertButton message="Playing!">
//           Play Movie
//         </AlertButton>
//         <AlertButton message="Uploading!">
//           Upload Image
//         </AlertButton>
//       </div>
//     );
//   }


// #############

// function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
//     return (
//       <button onClick={onClick}>
//         {children}
//       </button>
//     );
//   }

//   function PlayButton({ movieName }: { movieName: string }) {
//     function handlePlayClick() {
//       alert(`Playing ${movieName}!`);
//     }

//     return (
//       <Button onClick={handlePlayClick}>
//         Play "{movieName}"
//       </Button>
//     );
//   }

//   function UploadButton() {
//     return (
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     );
//   }

//   export default function Toolbar() {
//     return (
//       <div>
//         <PlayButton movieName="Kiki's Delivery Service" />
//         <UploadButton />
//       </div>
//     );
//   }



// #############

// function Button({ onSmash, children }: { onSmash: () => void, children: React.ReactNode }) {
//     return (
//       <button onClick={onSmash}>
//         {children}
//       </button>
//     );
//   }

//   export default function App() {
//     return (
//       <div>
//         <Button onSmash={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onSmash={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }

// #############

// export default function App() {
//     return (
//       <Toolbar
//         onPlayMovie={() => alert('Playing!')}
//         onUploadImage={() => alert('Uploading!')}
//       />
//     );
//   }

//   function Toolbar({ onPlayMovie, onUploadImage }: { onPlayMovie: () => void, onUploadImage: () => void }) {
//     return (
//       <div>
//         <Button onClick={onPlayMovie}>
//           Play Movie
//         </Button>
//         <Button onClick={onUploadImage}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }

//   function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
//     return (
//       <button onClick={onClick}>
//         {children}
//       </button>
//     );
//   }


// ############# Event propagation #############

// export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <button onClick={() => alert('Playing!')}>
//           Play Movie
//         </button>
//         <button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </button>
//       </div>
//     );
//   }


// #############

// function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onClick();
//       }}>
//         {children}
//       </button>
//     );
//   }

//   export default function Toolbar() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <Button onClick={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }



// #############

// export default function Signup() {
//     return (
//       <form onSubmit={() => alert('Submitting!')}>
//         <input />
//         <button>Send</button>
//       </form>
//     );
//   }

// #############
// export default function Signup() {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert('Submitting!');
//       }}>
//         <input />
//         <button>Send</button>
//       </form>
//     );
//   }

// ############# Challenge 1 Solution #############

export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }

    return (
      <button onClick={handleClick}>
        Toggle the lights
      </button>
    );
  }

// ############# Challenge 2 Solution #############

// See website
