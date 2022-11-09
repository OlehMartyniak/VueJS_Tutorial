const app = Vue.createApp({
    //data,functions
    // template: '<h2>Something</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'John Doe',
            age: 55
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Elder Rings'
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')