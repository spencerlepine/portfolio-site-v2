/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/styles/global.css';
import 'prismjs/themes/prism-okaidia.css'; // for code styling in blog posts
import 'react-toggle/style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import React from 'react';
import ThemeContextProvider from './src/contexts/themeContext';

export const wrapRootElement = ({ element }) => <ThemeContextProvider>{element}</ThemeContextProvider>;