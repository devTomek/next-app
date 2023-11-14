import Providers from "@/Providers";
import Card from "@/components/Card/Card";
import { roboto } from "@/fonts";
import "./globals.css";
import "./reset.css";

export default function Home() {
  return (
    <Providers>
      <main className={roboto.className}>
        <Card
          alt="asd"
          buttonText="Add to cart"
          description="Eu in ea ipsum do labore enim sit ut do ut."
          price={20}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          title="Black Backpack"
        />
      </main>
    </Providers>
  );
}
