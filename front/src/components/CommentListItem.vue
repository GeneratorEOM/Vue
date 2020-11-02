<template>
  <div>
    <div class="comment-list-item">
      <div class="comment-list-item-name">
        <div>{{name}}</div>
        <div>{{commentObj.created_at}}</div>
      </div>
      <template v-if="isUpdateComment">
        <b-form-textarea
        v-model="context"
        rows="5"
        max-rows="5"
      ></b-form-textarea>
      </template>
      <template v-else>
        <div class="comment-list-item-context">{{commentObj.context}}</div>
      </template>
      
      <div class="comment-list-item-button">
        <b-button variant="info" @click="isUpdateComment ? updateCommentData(): showCommentUpdateForm()">수정</b-button>
        <b-button variant="info" @click="isUpdateComment ? cancel(): deleteCommentData()">{{isUpdateComment ? '취소': '삭제'}}</b-button>
        <template v-if="!isUpdateComment">
          <b-button variant="info" @click="subCommentToggle">댓글</b-button>
        </template>
      </div>
    </div>
    <template v-if="subCommentCreateToggle">
      <CommentCreate
        :isSubComment="true"
        :commentId="commentObj.comment_id"
        :reloadSubComments="reloadSubComments"
        :subCommentToggle="subCommentToggle"
      />
    </template>
    <template v-if="subCommentList.length > 0">
      <div
        class="comment-list-item-subcomment-list"
        :key="item.subcomment_id"
        v-for="item in subCommentList"
      >
        <div class="comment-list-item-name">
          <div>{{item.user_name}}</div>
          <div>{{item.created_at}}</div>
        </div>
        <template v-if="isUpdateSubComment">
        <b-form-textarea
        v-model="subContext"
        rows="5"
        max-rows="5"
      ></b-form-textarea>
      </template>
      <template v-else>
        <div class="comment-list-item-context">{{item.context}}</div>
      </template>
        
        <div class="comment-list-item-button">
          <b-button variant="info" @click="isUpdateSubComment ? updateSubCommentData(item.subcomment_id): showSubCommentUpdateForm()">수정</b-button>
          <b-button variant="info" @click="isUpdateSubComment ? cancel2(): deleteSubCommentData()">{{isUpdateComment ? '취소': '삭제'}}</b-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import data from "@/data";
import CommentCreate from "./CommentCreate";
export default {
  name: "CommentListItem",
  props: {
    commentObj: Object,
    subCommentArray: Array,
    reloadComments: Function
  },
  components: {
    CommentCreate
  },
  data() {
    return {
      name: data.User.filter(
        item => item.user_id === this.commentObj.user_id
      )[0].name,
      subCommentList: data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name
      })),
      subCommentCreateToggle: false,
      isUpdateComment: false,
      isUpdateSubComment: false,
      context: this.commentObj.context,
      subContext:''
      };
  },
  methods: {
    subCommentToggle() {
      this.subCommentCreateToggle = !this.subCommentCreateToggle;
    },
    reloadSubComments() {
      this.subCommentList = data.SubComment.filter(
        item => item.comment_id === this.commentObj.comment_id
      ).map(subCommentItem => ({
        ...subCommentItem,
        user_name: data.User.filter(
          item => item.user_id === subCommentItem.user_id
        )[0].name 
      }));
    },
    deleteCommentData() {
      const comment_index = data.Comment.findIndex(item => item.comment_id === this.commentObj.comment_id);
      alert(comment_index)
      data.Comment.splice(comment_index, 1)
      this.reloadComments();
    },
    updateCommentData() {
      this.commentObj.context = this.context
      this.reloadComments();
      this.isUpdateComment = !this.isUpdateComment
    },
    showCommentUpdateForm() {
      this.isUpdateComment = !this.isUpdateComment
    },
    cancel() {
    this.isUpdateComment = !this.isUpdateComment

    },

    deleteSubCommentData() {
      const subComment_index = data.SubComment.findIndex(item => item.comment_id === this.commentObj.comment_id);
      alert(subComment_index)
      data.SubComment.splice(subComment_index, 1)
      this.reloadSubComments();
    },
    updateSubCommentData(subComment_id) {
      // 바인딩이 안돼~!!
      var subCommentIndex = this.subCommentList.findIndex(item => item.subcomment_id === subComment_id)
      alert(this.subCommentList[subCommentIndex].context)
      this.subCommentList[subCommentIndex].context = this.subContext
      this.reloadSubComments();
      this.isUpdateSubComment = !this.isUpdateSubComment
    },
    showSubCommentUpdateForm() {
      this.isUpdateSubComment = !this.isUpdateSubComment
    },
    cancel2() {
    this.isUpdateSubComment = !this.isUpdateSubComment

    },
    
  }
};
</script>
<style scoped>
.comment-list-item {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
}
.comment-list-item-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.comment-list-item-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45em;
  border: 0.5px solid black;
}
.comment-list-item-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.5px solid black;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
</style>
