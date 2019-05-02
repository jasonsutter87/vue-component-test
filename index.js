Vue.component('list-component', {
  template: `
  <ul>
     <li v-for="item in list">{{ item }}</li>
   </ul>
`,
  data(){
    return{
      list: []
    }
  },
  props: {
      list: {
        type: Array,
        required: true
      }
    }
})



let app = new Vue({
  el: '#app',
  data() {
    return{
      list: [1,2,3,4]
    }
  }
})
