const app = Vue.createApp({
	data() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			gender: '',
			age: '',
			picture: ''
		}
	},
	methods: {
		async getRandomUser() {
			const res = await fetch('https://randomuser.me/api/')
			const { results } = await res.json()
			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.email = results[0].email;
			this.gender = results[0].gender;
			this.age = results[0].dob.age;
			this.picture = results[0].picture.large;
		}
	},
	mounted(){
		this.getRandomUser();
	}
})

app.mount('#app');