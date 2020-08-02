import {FC} from "react";

export const Tag: FC = ({ children }) => {
  return (
    <>
      <a href={`/tags/${children}`}>
        {children}
      </a>
      <style jsx>{`
        a {
          height: 32px;
          line-height: 32px;
          position: relative;
          margin: 0 8px 8px 0;
          padding: 2px 10px 2px 12px;
          background: var(--dark-main-color);
          border-radius: 3px;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0, 0.2);
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition:background-color 1s ease 0s;
          text-decoration: none;
        }
        a:hover {
          background-color: var(--main-color)
        }
      `}</style>
    </>
  );
};
