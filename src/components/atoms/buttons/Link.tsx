import {FC} from "react";

type Props = {
  href: string;
}

export const LinkButton: FC<Props> = ({ href, children }) => (
  <>
    <a href={href} target="_blank">
      {children}
    </a>
    <style jsx>{`
        a {
          margin: 0 0.5rem 0.5rem 0;
          padding: 0.5rem;
          background: var(--secondary-color);
          border-radius: 3px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.22);
          transition: .3s ease;
        }
        a:hover {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15), 0 0 5px rgba(0, 0, 0, 0.1);
        }
      `}</style>
  </>
);
