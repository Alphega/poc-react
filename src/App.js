import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu, Colors, Theme, Welcome } from './components';
import FocusLock from 'react-focus-lock';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
            <>
                <React.Fragment>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/theme" component={Theme} />
                            <Route path="/colors" component={Colors} />
                        </Switch>
                    </Router>
                </React.Fragment>
                <GlobalStyles />
                <div ref={node}>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
            </>
        </ThemeProvider>
    );
};
