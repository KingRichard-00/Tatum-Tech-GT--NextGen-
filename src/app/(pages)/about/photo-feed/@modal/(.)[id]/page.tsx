import Image from "next/image";
import traineesImages, {
  TraineeImage,
} from "@/app/(pages)/about/photo-feed/trainees";
import Modal from "@/app/(homepage)/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: TraineeImage = traineesImages.find((p) => p.id === id)!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full md:h-[400px] object-cover aspect-square"
      />

      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.Description}</h3>
      </div>
    </Modal>
  );
}
