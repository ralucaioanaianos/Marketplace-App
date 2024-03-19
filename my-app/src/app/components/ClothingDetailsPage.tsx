import { useRouter } from 'next/navigation';

const ClothingDetailsPage = () => {
  const router = useRouter();
  const { name } = router.back;

  return <h1>{name}</h1>;
};

export default ClothingDetailsPage;
