import { createContext } from 'react';

// ############# Context: an alternative to passing props #############
// export const LevelContext = createContext(1);


// ############# Using and providing context from the same component  #############
// export const LevelContext = createContext(0);

// ############# Context passes through intermediate components #############
export const LevelContext = createContext(0);
