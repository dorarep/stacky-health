import products from "../../../../master/products.json";
import {FC} from "react";

type Props = {
  productKey: string;
}

type Product = {
  title: string;
  shortTitle: string;
  amazonUrl?: string;
  kindleUrl?: string;
  thumbnail?: string;
}

const Amazon: FC<Props> = ({ productKey }) => {
  const product: Product = products[productKey];

  return (
    <>
      <div>
        <p>
          {product.title}
        </p>
        <ul>
          {product.amazonUrl && (<li><a href={product.amazonUrl} rel="nofollow">Amazon</a></li>)}
          {product.kindleUrl && (<li><a href={product.kindleUrl} rel="nofollow">Kindle</a></li>)}
        </ul>
      </div>
      <style jsx>{`
        div {
          margin-top: 1rem;
          max-width: 900px;
          background-color: white;
          padding: 1rem;
        }
      `}</style>
    </>
  );
};

export default Amazon;

