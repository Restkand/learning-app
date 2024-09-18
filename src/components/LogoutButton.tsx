// components/LogoutButton.tsx
"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  return (
    <Button
      variant="default"
      onClick={() => signOut({ redirect: true, callbackUrl: "/auth/login" })}
    >
      Logout
    </Button>
  );
}