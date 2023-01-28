import { useMutation } from "@apollo/client";
import React from "react";
import { UPDATE_TWEET } from "../gql/crud";

export const useUpdate = () => {
  const [updateTweet, { data, loading, error }] = useMutation(UPDATE_TWEET, {
    onCompleted(completed) {
      console.log("成功しました");
    },
    onError(error) {
      console.log(error.graphQLErrors);
    },
  });
  return { updateTweet };
};