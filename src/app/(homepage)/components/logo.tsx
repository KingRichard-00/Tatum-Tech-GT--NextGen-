import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="https://www.tatumbank.com/" className="sticky w-1/8 top-4">
      <div className="bg-white w-[100px] rounded-lg py-2 px-3">
        <Image
          src="/images/hero/tatum-logo.svg"
          height={96}
          width={96}
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
