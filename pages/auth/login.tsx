import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [name, setName] = useState(""); // Menggunakan 'name' bukan 'email'
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      name,  
      password,
    });

    console.log(res);

    if (res && res.ok) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
