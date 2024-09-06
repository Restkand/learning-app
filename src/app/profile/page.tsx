import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function Profile() {
  return (
    <div className="relative h-screen">
      {/* Tombol di pojok kiri atas */}
      <div className="absolute top-0 left-0 m-4">
        <Link href="/..">
          <Button variant="default" size="sm">Back to Home</Button>
        </Link>
      </div>
      
      {/* Input di tengah layar */}
      <div className="flex flex-col h-full items-center justify-center space-y-4">
        <h1>shacdn</h1>
        <Input className="w-64 h-6"/>
      </div>
    </div>
  );
}
