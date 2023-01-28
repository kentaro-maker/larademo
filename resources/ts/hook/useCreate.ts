import { useMutation } from "@apollo/client";
import React from "react";
import { CREATE_TWEET } from "../gql/crud";

export const useCreate = () => {
  const [createTweet, { data, loading, error }] = useMutation(CREATE_TWEET, {
    onCompleted(completed) {
      console.log("成功しました");
    },
    onError(error) {
      console.log(error.graphQLErrors);
    },
  });
  return { createTweet };
};
