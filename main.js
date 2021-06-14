const app = Vue.createApp({
    data() {
      return {
        showBooks: true,
        

        books: [
          { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true ,isnotFav:true},
          { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false,isnotFav:false },
          { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true},
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      toggleFav(book) {
        book.isFav = !book.isFav;
        book.isnotFav = !book.isnotFav;
        
        
        // if (book.isFav) {
        //   book.isFav = false;
        // } else {
        //   book.isFav = true;
        // }
      }
    }
  })
  
  app.mount('#app')