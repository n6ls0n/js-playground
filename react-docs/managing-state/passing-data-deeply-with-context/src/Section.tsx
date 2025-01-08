import { useContext } from 'react';
import { LevelContext } from './LevelContext';
// ############# Context: an alternative to passing props #############


// export default function Section({ level, children }: { level: number; children: React.ReactNode }) {
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }


// ############# Using and providing context from the same component  #############

// export default function Section({ children }: { children: React.ReactNode }) {
//   const level = useContext(LevelContext);
//   return (
//     <section className="section">
//       <LevelContext.Provider value={level + 1}>
//         {children}
//       </LevelContext.Provider>
//     </section>
//   );
// }


// ############# Context passes through intermediate components #############
export default function Section({ children, isFancy }: { children: React.ReactNode; isFancy: boolean }) {
    const level = useContext(LevelContext);
    return (
      <section className={
        'section ' +
        (isFancy ? 'fancy' : '')
      }>
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </section>
    );
  }
