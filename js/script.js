const { createApp } = Vue

  createApp({
    data() {
      return {
        emails: []
      }
    },
    mounted(){

        //ottengo 10 email che inserisco in array emails
        for(let i = 0; i<=10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {           
    
            this.emails.push(response.data.response)
    
        });
            
        }
       
    }
  }).mount('#app')