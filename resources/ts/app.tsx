import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';

import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';

import { Album } from "./components/Album";
import { Abc } from './pages/Abc'

import AppBar from '@mui/material/AppBar';


const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache({}),
});
 
const App = () => {
    return (
        <Router>
            <AppBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/abc" element={<Abc />} />
                    <GuestRoute path="/register" element={<Auth key="register" />} />
                    <GuestRoute path="/login" element={<Auth key="login" />} />
                    <AuthRoute path="/settings" element={<Settings />} />
                    <AuthRoute path="/editor" element={<Editor />} />
                    <Route path="/editor/:slug" element={<Editor />} />
                    <Route path="/article/:slug" element={<Article />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <AuthRoute path="/@:username" element={<Profile />} />
                </Routes>
            </main>
            <Album />
            <CssBaseline />
            <Link to="/abc">To ABC Page</Link>
        </Router>
    );
}
 
const root = createRoot(
    document.getElementById('app') as HTMLElement
)
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            
            <Album />
            <CssBaseline />
        </ApolloProvider>
    </React.StrictMode>
)