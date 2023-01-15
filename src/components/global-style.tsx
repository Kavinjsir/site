import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      .post-item-thumbnail {
        border-radius: 12px;
      }
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
