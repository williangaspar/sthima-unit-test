import { useEffect, useState } from "react";

const useExchange = (base: "USD" | "CAD") => {
  const [realValue, setRealValue] = useState<number>(0);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setError(() => "");
      try {
        const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
        const json = await response.json();
        setRealValue(() => json.rates.BRL);
      } catch (e) {
        setError(() => "Erro ao carregar dados");
      }
    };

    fetchData();
  }, [base]);

  return { realValue, error};
};

export default useExchange;
