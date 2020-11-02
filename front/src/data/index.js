export default {
	User: [
		{
			user_id: 1,
			name: '초아',
			created_at: '2020-10-11 11:12:13'
		},
		{
			user_id: 2,
			name: '아이린',
			created_at: '2020-10-21 11:12:13'
		},
		{
			user_id: 3,
			name: '조이',
			created_at: '2020-11-11 21:12:13'
		}
	],

	Content: [
		{
			content_id: 1,
			user_id: 1,
			title: '오우예1',
			context: '오우예압1',
			created_at: '2020-11-11 11:10:10',
			updated_at: null
		},
		{
			content_id: 2,
			user_id: 2,
			title: '오우예2',
			context: '오우예압2',
			created_at: '2020-11-11 11:10:10',
			updated_at: null
		},
		{
			content_id: 3,
			user_id: 3,
			title: '오우예3',
			context: '오우예압3',
			created_at: '2020-11-11 11:10:10',
			updated_at: null
		},

	],

	Comment: [
		{
			comment_id: 1,
			user_id: 1,
			content_id: 3,
			context: '댓글1',
			created_at: '2020-11-11 15:15:15',
			updated_at: null
		},
				{
			comment_id: 2,
			user_id: 3,
			content_id: 3,
			context: '댓글2',
			created_at: '2020-11-11 15:15:15',
			updated_at: null
		},
				{
			comment_id: 3,
			user_id: 2,
			content_id: 1,
			context: '댓글3',
			created_at: '2020-11-11 15:15:15',
			updated_at: null
		}
	],

	SubComment: [
		{
			subcomment_id: 1,
			comment_id: 3,
			user_id: 1,
			context: '서브댓글',
			created_at: '2020-01-11 11:10:10',
			updated_at: null
		}
	]

}
