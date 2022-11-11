import { useSelector, Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';
import { SnackbarProvider } from 'notistack';
// import { Slide } from '@material-ui/core';

// project imports
import NavigationScroll from 'layout/navigationScroll';
import { store } from './store';
import { socket, SocketContext } from './network/SocketContext';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <SnackbarProvider
                maxSnack={3}
                hideIconVariant
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                preventDuplicate
            // TransitionComponent={Slide}
            >
                <Provider store={store}>
                    <SocketContext.Provider value={socket}>
                        <ThemeProvider theme={themes(customization)}>
                            <CssBaseline />
                            <NavigationScroll>
                                <Routes />
                            </NavigationScroll>
                        </ThemeProvider>
                    </SocketContext.Provider>
                </Provider>
            </SnackbarProvider>
        </StyledEngineProvider>
    );
};

export default App;
