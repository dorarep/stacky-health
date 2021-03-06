import {FC} from "react";

type Props = {
  src: string;
  width: number;
  height: number;
  layout?: string;
  alt: string;
}

const Img: FC<Props> = ({ src, layout = 'responsive', ...props }) => (
  <>
    <amp-img
      src={`${src}?format=webp`}
      srcset={`${src}?w=320&format=webp 320w, ${src}?w=640&format=webp 640w, ${src}?w=960&format=webp 960w`}
      layout={layout}
      {...props}
    >
      <div fallback='fallback'>
        <amp-img
          src={src}
          srcset={`${src}?w=320 320w, ${src}?w=640 640w, ${src}?w=960 960w`}
          layout={layout}
          {...props}
        />
      </div>
    </amp-img>
  </>
);

export default Img;

