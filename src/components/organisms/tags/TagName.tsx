import {FC} from "react";
import {Tag} from "../../atoms/Tag";

type Props = {
  tag: string;
  similarTags: string[];
}

export const TagName: FC<Props> = ({ tag, similarTags }) => (
  <>
    <div>
      <h1>「{tag}」の記事一覧</h1>
      {similarTags.map(similarTag => <Tag key={similarTag}>{similarTag}</Tag>)}
    </div>
    <style jsx>{`
      div {
        margin-bottom: 2rem;
        background-color: white;
        border-top: 5px solid var(--main-color);
        padding: 1rem;
      }
      h1 {
        margin: 0;
        font-size: 1.5rem;
      }
    `}</style>
  </>
)
