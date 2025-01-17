import { css } from 'styled-components';

const theme = {
    dark: css`
        background: rgba(13, 13, 13, 0.2);
        color: white;
        && > * {
            background-color: rgb(51 56 62);
        }
    `,
    wrapper: {
        element: css`
            margin: var(--element-margin);
            max-width: 350px;
        `,
        container: css`
            max-width: 1000px;
            margin: 1em auto;
        `,
    },
    hover: {
        light: '#f8f8f8',
        dark: 'var(--color-2)',
    },
};

export default theme;
