import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Home() {
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
          <Button variant="default">profile</Button>
        </Link>
      </div>
    </div>
  );
}
