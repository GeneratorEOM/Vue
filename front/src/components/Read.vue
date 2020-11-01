<template>
  <div>
	<table>
		<tr>
			<td>글쓴이</td>
			<td>제목</td>
			<td>내용</td>
		</tr>
		<tr v-for="value in data" >
			<td>글쓴이</td>
			<td>제목</td>
			<td>내용</td>
		</tr>
	</table>
  </div>
</template>

<script>
export default {
	import data from "@/data";
	name: 'Read',
	data() {

	},
	
}
</script>

<style>

</style>