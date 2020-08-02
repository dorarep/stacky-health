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
        <amp-img src={product.thumbnail} />
        <ul>
          {product.amazonUrl && (<li><a href={product.amazonUrl} rel="nofollow">Amazon</a></li>)}
          {product.kindleUrl && (<li><a href={product.kindleUrl} rel="nofollow">Kindle</a></li>)}
        </ul>
      </div>
      <style jsx>{`
        div {
          margin-top: 2rem;
          margin-bottom: 2rem;
          padding: 1rem;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
          transition: .3s ease;
        }
        div:hover {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Amazon;

