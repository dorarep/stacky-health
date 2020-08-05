import {FC} from "react";

export const Main: FC = ({ children }) => (
  <>
    <main>
      {children}
    </main>
    <style jsx>{`
      main {
        width: 100vw;
        height: 100%;
        max-width: 900px;
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
  </>
);
