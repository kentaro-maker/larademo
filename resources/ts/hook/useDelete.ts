import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_TWEET } from "../gql/crud";

export const useDelete = () => {
  const [deleteTweet, { data, loading, error }] = useMutation(DELETE_TWEET, {
    onCompleted(completed) {
      console.log("成功しました");
    },
    onError(error) {
      console.log(error.graphQLErrors);
    },
  });
  return { deleteTweet };
};