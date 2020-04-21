var app = new Vue({
    el: '#vue',
    data: {
      questions: []
    },
  methods: {
    getQuestion(){
        (async () => {
            let json = await(await fetch('pandemics.json')).json();
            console.log(json);
            this.questions = json;
        })();
    }
  }
})
  