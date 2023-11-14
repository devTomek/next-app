import { getProducts } from "@/api";
import Card from "@/components/Card/Card";

export default async function ProductList() {
  const products = await getProducts();

  return (
    <>
      {products.map(({ id, description, image, price, title }) => (
        <Card
          key={id}
          alt={title}
          buttonText="Add to cart"
          description={description}
          price={price}
          src={image}
          title={title}
        />
      ))}
    </>
  );
}
