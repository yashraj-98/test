import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://fixhealth-server.onrender.com";

interface useAxiosProps {
  method: "get" | "post" | "put" | "delete";
  url: string;
}

export default function ({ method, url }: useAxiosProps) {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios({ method, url });
        setResponse(res.data);
      } catch (err: any) {
        setError(err.message || "An error occured");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
    fetchData();
  }, [method, url]);

  return { response, error, loading };
}
