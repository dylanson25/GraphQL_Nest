interface FakeStore {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}
export const fakeStoreData: FakeStore[] = [
  {
    id: 1,
    title: 'Blusa 1',
    description: 'Bluza azul',
    image:
      'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720',
    price: 200,
  },
  {
    id: 2,
    title: 'Blusa 2',
    description: 'Bluza roja',
    image:
      'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720',
    price: 200,
  },
  {
    id: 3,
    title: 'Blusa 1',
    description: 'Bluza morada',
    image:
      'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720',
    price: 200,
  },
];
