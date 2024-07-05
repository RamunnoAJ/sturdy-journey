import { useEffect } from "react";

export default function useClosePage() {
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === ":" && event.ctrlKey) {
        if (window.confirm("Do you want to close this window?")) {
          window.close();
        }
      }
    }

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
}
