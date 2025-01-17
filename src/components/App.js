import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Reset } from 'styled-reset';

import { store } from '../store';
import theme from '../styles/theme';
import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';
import GlobalStyles from '../styles/Global';
import GlobalFonts from '../fonts';

const App = () => {
    return (
        <div style={{ padding: '1em' }}>
            <Provider store={store}>
                <Reset />
                <GlobalFonts />
                <GlobalStyles />
                <ThemeProvider theme={theme}>
                    <Task01 />
                    {/* <Task02 /> */}
                    <Task03 />
                    <Task04 />
                    {/* <Task05 /> */}
                </ThemeProvider>
            </Provider>
        </div>
    );
};

export default App;
