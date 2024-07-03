import Link from "next/link";
import Image from "next/image";
import filot from "@/app/images/filot.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2" aria-label="Cruip">
      <Image
        src={filot}
        width={24}
        height={24}
        alt="Logo 01"
      />
      <h3 className="text-lg font-bold">
        Filot
      </h3>
    </Link>
  );
}
