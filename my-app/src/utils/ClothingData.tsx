import ClothingItem, { ClothingItemProps } from "@/app/components/ClothingItem";

export let clothingData = [
    {
      id: 1,
      name: 'Black Leather Boots',
      image: "/black_boots.jpg",
      gender: 'Women',
      sizes: ['37, 38, 39'],
    },
    {
      id: 2,
      name: 'Black Small SunGlasses',
      image: '/black_eyeglasses.jpg',
      gender: 'Unisex',
      sizes: ['universal'],
    },
    {
        id: 3,
        name: 'Black Men Shirt',
        image: '/black_shirt.jpg',
        gender: 'Men',
        sizes: ['S, M'],
      },
      {
        id: 4,
        name: 'Elegant Blue Skirt',
        image: '/blue_skirt.jpg',
        gender: 'Women',
        sizes: ['XS, S'],
      },{
        id: 5,
        name: 'Crazy Colorful Pants',
        image: '/colorful_pants.jpg',
        gender: 'Women',
        sizes: ['XS, L'],
      },{
        id: 6,
        name: 'Gray Denim Pants',
        image: '/denim_pants.jpg',
        gender: 'Men',
        sizes: ['S, L'],
      },
      {
        id: 7,
        name: 'Blue Denim Pants',
        image: '/denims.jpg',
        gender: 'Women',
        sizes: ['XS, XL'],
      },{
        id: 8,
        name: 'Winter Jacket',
        image: '/jacket.jpg',
        gender: 'Women',
        sizes: ['S, M'],
      },{
        id: 9,
        name: 'Biker Leather Jacket',
        image: '/leather_jacket.jpg',
        gender: 'Men',
        sizes: ['L, XL'],
      },{
        id: 10,
        name: 'Elegant Pink Dress',
        image: '/pink_dress.jpg',
        gender: 'Women',
        sizes: ['XS, S, M'],
      },{
        id: 11,
        name: 'Pink Handbag',
        image: '/pink_purse.jpg',
        gender: 'Women',
        sizes: ['Universal'],
      },
      {
        id: 12,
        name: 'Pink Shirt',
        image: '/pink_shirt.jpg',
        gender: 'Men',
        sizes: ['M, L'],
      },
      {
        id: 13,
        name: 'Red Business Suit',
        image: '/red_suit.jpg',
        gender: 'Women',
        sizes: ['M, L'],
      },
      {
        id: 14,
        name: 'Floral Dress',
        image: '/rochie_flori.jpeg',
        gender: 'Women',
        sizes: ['M, XL'],
      },
      {
        id: 15,
        name: 'Summer Dress',
        image: '/summer_dress.jpg',
        gender: 'Women',
        sizes: ['S, L'],
      },
      
      {
        id: 16,
        name: 'Beach Hat',
        image: '/sunhat.jpg',
        gender: 'Women',
        sizes: ['Universal'],
      },
      {
        id: 17,
        name: 'Tennis Shoes',
        image: '/tennis_shoes.jpg',
        gender: 'Men',
        sizes: ['42, 43, 44'],
      },
      {
        id: 18,
        name: 'Sun Hat',
        image: '/white_hat.jpg',
        gender: 'Women',
        sizes: ['Universal'],
      },
      {
        id: 19,
        name: 'White Mini Skirt',
        image: '/white_skirt.jpg',
        gender: 'Women',
        sizes: ['S, M, L'],
      },
      {
        id: 20,
        name: 'Yellow Dress',
        image: '/yellow_dress.jpg',
        gender: 'Women',
        sizes: ['S, M'],
      },
  ];
  
  export function add(comp: any) {
    clothingData.push(comp);
    console.log(clothingData);
}

export function findClothingItemByName(name: string) {
  return clothingData.find(item => item.name === name) || null;
}
