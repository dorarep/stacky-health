import {FC} from "react";

export const AmpAnalytics: FC = () => (
  <>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js" />
    <amp-analytics type="gtag" data-credentials="include">
      <script type="application/json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          vars: {
            gtag_id: 'UA-110092791-3',
            config: {
              'UA-110092791-3': { groups: "default" }
            }
          }
        })
      }}>
      </script>
    </amp-analytics>
  </>
);
