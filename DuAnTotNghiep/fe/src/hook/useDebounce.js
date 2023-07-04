import {useState,useEffect} from 'react'

function useDebounce(value, delay) {
    const [debouncedValue,setvDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setvDebouncedValue(value),delay);

        return () => clearTimeout(handler);
    },[value]);

    return debouncedValue;
}

export default useDebounce;