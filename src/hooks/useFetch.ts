import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState<unknown[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  function loadData() {
    setLoading(true);
    fetch(
      `https://hp-api.onrender.com/api/characters`,
      {
        method: "GET",
      }
    )
    .then(async (response) => {
      const json = await response.json();
      setData([...data, ...json]);
    })
    .catch((err) => console.log("ERROR: ", err))
    .finally(() => setLoading(false));
}

function handleScroll() {
  if (
    window.innerHeight + document.documentElement.scrollTop <
      document.documentElement.offsetHeight ||
    loading
  ) {
    return;
  }

  setPage(page + 1);
}

useEffect(() => {
  loadData();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [page]);

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [loading]);

return { loading, data, page };
}
