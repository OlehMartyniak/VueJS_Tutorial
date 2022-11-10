const app = Vue.createApp({
    //data,functions
    // template: '<h2>Something</h2>'
    data() {
        return {
            showBooks: true,
            url: 'https://www.facebook.com',
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'img/img1.jpg', isFav: true},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'img/img2.jpg', isFav: false},
                { title: 'the final empire', author: 'brandon sanderson', img: 'img/img3.jpg', isFav: true},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove (e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(item) {
            item.isFav = !item.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')