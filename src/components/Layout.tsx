import {FC} from "react";

export const Layout: FC = ({ children }) => (
  <>
    {children}
    <style jsx global>{`
      body {
        font-family: Roboto, sans-serif;
        padding: 30px;
        color: #444;
      }
    `}</style>
  </>
);
