import { useEffect } from 'react';

interface UseIntervalProps {
    onTick: () => void;
    delay: number;
}

export function useInterval({ onTick, delay }: UseIntervalProps) {
    useEffect(() => {
        const id = setInterval(onTick, delay);
        return () => clearInterval(id);
    }, [onTick, delay]);
}
