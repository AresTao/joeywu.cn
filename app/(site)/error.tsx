"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="items-center justify-center text-center">
      <h2 className="font-heading">Something is wrong!</h2>
      <button onClick={() => reset()}>Please try again later</button>
    </div>
  );
}
