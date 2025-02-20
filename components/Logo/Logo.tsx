"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
export function Logo() {
  const Router = useRouter();
  return (
    <div
      className="min-h-20 h-20 flex items-center cursor-pointer justify-center "
      onClick={() => Router.push("/")}
    >
      <Image
        src="/logoipsum-255.svg"
        alt="logo"
        width={40}
        height={40}
        priority
      /> <h1 className="text-2xl p-3">Mi Empresa</h1>
    </div>
  );
}
