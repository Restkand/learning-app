// pages/auth/error.tsx
import { useRouter } from "next/router";

export default function ErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  let errorMessage = "An unknown error occurred";
  if (error === "CredentialsSignin") {
    errorMessage = "Invalid username or password";
  }

  return (
    <div>
      <h1>Error</h1>
      <p>{errorMessage}</p>
      <button onClick={() => router.push("/auth/login")}>Go back to login</button>
    </div>
  );
}
