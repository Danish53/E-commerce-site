import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { ResponseContext } from "./ResponseContext";
import { toast, Toaster } from "react-hot-toast"

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { response_Context, setResponse_Context } = useContext(ResponseContext);

  const registration = async (first_name, last_name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://foundation.alphalive.pro/api/user/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ first_name, last_name, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "registration failed");
      }

      if (data.status === true) {
        localStorage.setItem("token", data.data.token);
        setResponse_Context(data);
        toast.success("User Registerd Successful!");
        router.push("/login");
        return data;
      } else {
        throw new Error(data?.error?.email || "registration failed.");
      }
    } catch (err) {
      setError(err?.message);
      toast.error(error?.message || "registration failed.")
      return null;
    } finally {
      setLoading(false);
    }
  };
  // Log response_Context when it updates
  useEffect(() => {
    console.log("Updated response_Context:", response_Context);
  }, [response_Context]);

  return { registration, loading, error };
};

export default useAuth;
