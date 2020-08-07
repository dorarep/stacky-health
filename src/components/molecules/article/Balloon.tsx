import {FC} from "react";

type Props = {
  img: string;
  direction: 'left' | 'right';
}

const Balloon: FC<Props> = ({ img, direction = 'left', children }) => {
  return (
    <>
      <div className={`chat ${direction}`}>
        <div className="face">
          <amp-img width='90' height='90' layout='fixed' src={`/faces/${img}.png`} />
        </div>
        <div className="balloon">
          <div className="says">
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .chat {
          display: grid;
          width: 100%;
          margin: 1rem 0;
        }
        .right {
          grid-template-columns: 1fr 90px;
          grid-template-areas: "balloon face";
        }
        .left {
          grid-template-columns: 90px 1fr;
          grid-template-areas: "face balloon";
        }
        .face {
          grid-area: face;
          margin: auto;
        }
        .balloon {
          grid-area: balloon;
          position: relative;
          width: calc(100% - 36px);
          border-radius: 12px;
          border: solid 3px var(--gray);
          padding: 1rem;
          background-color: var(--light-main-color);
        }
        .left .balloon:after {
          content: "";
          position: absolute;
          top: calc(50% - 12px); 
          left: -24px;
          border: 12px solid transparent;
          border-right: 12px solid var(--light-main-color);
          z-index: 1;
        }
        .left .balloon:before {
          content: "";
          position: absolute;
          top: calc(50% - 16px); 
          left: -32px;
          border: 16px solid transparent;
          border-right: 16px solid var(--gray);
          z-index: 1;
        }
        .right .balloon:after {
          content: "";
          position: absolute;
          top: calc(50% - 12px); 
          right: -24px;
          border: 12px solid transparent;
          border-left: 12px solid var(--light-main-color);
          z-index: 1;
        }
        .right .balloon:before {
          content: "";
          position: absolute;
          top: calc(50% - 16px); 
          right: -32px;
          border: 16px solid transparent;
          border-left: 16px solid var(--gray);
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default Balloon;
