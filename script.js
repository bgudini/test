var app = new Vue({
    el: '#vue',
    data: {
      question: 'In which case is a pandemic declared?'
    },
  methods: {
    getQuestion(){
        (async () => {
            let json = await(await fetch('pandemic.json')).json();
         
            console.log(json);
        })();
    }
  }
})
  