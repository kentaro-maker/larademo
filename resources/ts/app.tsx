import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import { useQuery } from "@apollo/client";
import { GET_ALL_TWEETS } from "./gql/crud";
import { useCreate } from "./hook/useCreate";
import { useUpdate } from "./hook/useUpdate";
import { useDelete } from "./hook/useDelete";


import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';

import { Album } from "./components/Album";

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql",
    cache: new InMemoryCache({}),
});
 
interface DATA {
    __typename: string;
    id: string;
    content: string;
}
interface ARRAY_DATA {
    tweets: Array<DATA>;
}

const App = () => {
    const { loading, error, data, refetch } = useQuery<ARRAY_DATA>(GET_ALL_TWEETS);
    const { createTweet } = useCreate();
    const { updateTweet } = useUpdate();
    const { deleteTweet } = useDelete();

    
    console.log(data);

    if (loading) return <>Tweet取得中です...</>;
    if (error) return <>Tweet取得に失敗しました...</>;

    //Create
    const clickCreateButton = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const tweet = document.querySelector("#tweet") as HTMLInputElement;
        createTweet({ variables: { input: tweet.value } });
        refetch();
        tweet.value = "";
    };

    //Update
    const clickUpdateButton = (id: string) => {
        const tweet = document.querySelector(`#tweet${id}`) as HTMLInputElement;
        updateTweet({ variables: { id, content: tweet.value } });
    };

     //Delete
    const clickDeleteButton = (id: string) => {
        deleteTweet({ variables: { id } });
        refetch();
    };
  

    return (
        <div className="App">
        <form name="submitTweetForm" onSubmit={(e) => clickCreateButton(e)}>
            <input type="text" id="tweet" />
            <button>Tweet!</button>
        </form>
        {data?.tweets.map((tweet) => (
            <div key={tweet.id}>
                <p>{tweet.id}</p>
                <textarea id={`tweet${tweet.id}`}>{tweet.content}</textarea>
                <br/>
                <button onClick={() => clickUpdateButton(tweet.id)}>update!!!</button>
                <button onClick={() => clickDeleteButton(tweet.id)}>delete!!!</button>

            </div>
        ))}
        </div>
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
            <Button variant="contained" color="success">Success</Button>
        </ApolloProvider>
    </React.StrictMode>
)