import products from "../../../../master/products.json";
import {FC} from "react";
import {LinkButton} from "../../atoms/buttons/Link";

type Props = {
  productKey: string;
}

type Product = {
  title: string;
  shortTitle: string;
  amazonUrl?: string;
  kindleUrl?: string;
  rakutenUrl?: string;
  thumbnail?: string;
  width: string;
  height: string;
}

const Amazon: FC<Props> = ({ productKey }) => {
  const product: Product = products[productKey];

  return (
    <>
      <div className="card">
        <amp-img src={product.thumbnail} width={product.width} height={product.height} />
        <div className="body">
          <p>{product.title}</p>
          <div>
            {product.amazonUrl && (<LinkButton href={product.amazonUrl}>Amazon</LinkButton>)}
            {product.kindleUrl && (<LinkButton href={product.kindleUrl}>Kindle</LinkButton>)}
            {product.rakutenUrl && (<LinkButton href={product.rakutenUrl}>楽天市場</LinkButton>)}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card {
          display: flex;
          margin-top: 2rem;
          margin-bottom: 2rem;
          padding: 1rem;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
          transition: .3s ease;
          flex-wrap: wrap;
        }
        p {
          font-weight: bold;
        }
        .card:hover {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .body {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default Amazon;

