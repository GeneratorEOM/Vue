<template>
  <div>
	  <b-input v-model="subject" placeholder="제목을 입력해주세요" ></b-input>
	  <b-textarea v-model="context" placeholder="내용을 입력해주세요" row="3" max-row="6"></b-textarea>
	  <b-button @click="updateMode ? updateContent() : uploadContent()">{{updateMode ? '글 수정 ' : '글 작성' }}</b-button>
	  <b-button @click="cancel">취소</b-button>
  </div>
</template>

<script>
import data from '@/data'
export default {
	
	name: 'Create',
	data() {
		return {
			subject: '',
			context: '',
			user_id: 1,
			created_at: '2020-11-11 10:10:10',
			updated_at: null,
			updateObject: null,
			updateMode: this.$route.params.contentId !== undefined ? true : false
		}
	},
	created() {
		if(this.$route.params.contentId !== undefined) {
			const contentId = Number(this.$route.params.contentId)
			this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
			this.subject = this.updateObject.title
			this.context = this.updateObject.context
		}
	},
	methods: {
		uploadContent() {
			let items = data.Content.sort((a, b)  => {return b.content_id - a.content_id});
			const contentId = items[0].content_id + 1

			data.Content.push({
				content_id: contentId,
				user_id: this.user_id,
				title: this.subject,
				context: this.context,
				created_at: this.created_at,
				updated_at: null
			})
			this.$router.push({
				path: '/board/free'
			})
		},
		cancel() {
			this.$router.push({
				path: '/board/free'
			})
		},
		updateContent() {
			this.updateObject.title = this.subject
			this.updateObject.context = this.context
			this.$router.push({
				path: '/board/free'
			})
		}
	}


}
</script>

<style>

</style>