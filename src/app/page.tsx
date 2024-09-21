import Link from "next/link";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/LogoutButton";

export default function RootH() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="shacdn">
        <Link href="/shacdn"> 
          <Button variant="default">shacdn</Button>
        </Link>
      </div>
      <div className="aceternity pl-2">
        <Link href="/aceternity"> 
          <Button variant="default">aceternity</Button>
        </Link>
      </div>
      <div className="aceternity pl-2">
        <Link href="/docs"> 
          <Button variant="default">Documentation</Button>
        </Link>
      </div>
      <div className="absolute top-0 left-0 m-4">
        <LogoutButton /> {/* Tambahkan komponen Logout */}
      </div>
    </div>
  );
}