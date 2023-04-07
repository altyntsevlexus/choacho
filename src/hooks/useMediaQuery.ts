import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(!!mediaQueryList.matches);

    listener();
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
