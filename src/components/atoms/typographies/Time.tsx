import {FC} from "react";
import fnsFormat from "date-fns/format";

type Props = {
  date: Date;
  format?: string;
}

export const Time: FC<Props> = ({ date, format = 'yyyy-MM-dd' }) => (
  <>
    <time dateTime={date.toString()}>
      {fnsFormat(date, format)}
    </time>
    <style jsx>{`
        time {
          color: #999;
          font-size: 0.9rem;
        }
      `}</style>
  </>
);
