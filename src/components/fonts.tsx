import { Global } from '@emotion/react';

const GOOGLE_FONT = `https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap`;

const Fonts = () => <Global styles={`@import url(${GOOGLE_FONT});`} />;

export default Fonts;
