import Card from "@/components/Card/Card";
import { Product } from "@/lib/api";
import { productRoute } from "@/lib/routes";
import { LinkWrapper, Wrapper } from "./ProductList.styled";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <Wrapper>
      {products.map(({ id, description, image, price, title }) => (
        <LinkWrapper key={id} href={productRoute(id)}>
          <Card
            alt={title}
            buttonText="Add to cart"
            description={description}
            price={price}
            src={image}
            title={title}
          />
        </LinkWrapper>
      ))}
    </Wrapper>
  );
}
