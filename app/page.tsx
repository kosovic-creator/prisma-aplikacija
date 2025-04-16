


import Product from "./product/page";
export const fetchCache = 'force-no-store';

export default async function Home() {


  return (
    <>
      <Product />
    </>
  );
}
