import Image from 'next/image'
import SearchButton from './components/SearchButton'
import ClothesList from './components/ClothesList'
import { clothingData } from '@/utils/ClothingData'

export default function Home() {
  const clothes = clothingData;
  console.log(clothes);
  return (
    <main>
      <SearchButton />
      
    </main>
  )
}


