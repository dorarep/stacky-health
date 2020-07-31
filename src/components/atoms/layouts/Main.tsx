import {FC} from "react";

export const Main: FC = ({ children }) => (
  <>
    <main>
      {children}
    </main>
    <style jsx>{`
      main {
        max-width: 900px;
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
  </>
);
