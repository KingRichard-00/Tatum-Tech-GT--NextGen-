import Link from "next/link";
import trainee from "./trainees";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">
        Tatum Bank Tech Graduate Trainees
      </h1>
      <div className="m-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {trainee.map(({ id, src, name }) => (
          <Link key={id} href={`/about/photo-feed/${id}`}>
            <Image
              alt={name}
              src={src}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
