import {FC} from "react";

type Props = {
  tweetId: number;
}

export const TweetBlock: FC<Props> = ({ tweetId }) => (
  <amp-twitter
    width="375"
    height="472"
    layout="responsive"
    data-tweetid={tweetId}
  />
);
