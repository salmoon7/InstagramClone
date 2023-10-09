import { SafeAreaView } from "react-native";
import React from "react";

import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
import NavigationBar from "../components/NavigationBar";

export default function Comment({ style, comments, onClose, onSubmitComment }) {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title={"comments"}
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
}
