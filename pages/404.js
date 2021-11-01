import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Error() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2500);
  }, []);
  return (
    <div className="error">
      <h1>404 Not Found</h1>
      <h2>That page could not be found</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}
