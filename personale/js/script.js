const { createApp } = Vue

  createApp({
    data() {
      return {
        monsters: [],
        search:"",
        filtered: []
      }
    },
    methods: {
      toSearch(){

        this.filtered = []
        // console.log(this.monsters[1].name)
        this.search = this.search.trim()

        this.monsters.forEach(monster=>{

          const string = monster.name.toLowerCase()
          const toFilter = this.search.toLowerCase()

          if (this.search != "" && string.includes(`${toFilter}`) ){
            this.filtered.push(monster.name)
            

          } 

          
        })
        
        this.search = ""

      }

    },
    mounted(){
      axios.get('https://www.dnd5eapi.co/api/monsters')
      .then(response => {
        // console.log(response.data.results)
        response.data.results.forEach((monster)=>{
          this.monsters.push({...monster})
          
        })
          
      });
      
  
    }

    
  }).mount('#app')

