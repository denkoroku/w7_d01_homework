import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      jobs: [
        {task: "hoovering", isDone: false, isHighPriority:false},
        {task: "water plants", isDone: true, isHighPriority:true},
        {task: "dusting", isDone: false, isHighPriority:false}
      ],
      newJob: "",
      priority:null,

    },
    methods: {
      saveNewJob: function(){
        this.jobs.push({
          task: this.newJob,
          isDone: false,
          isHighPriority:this.priority,
        });
        this.newJob = "";
      },

      jobDone: function(index){
        this.jobs[index].isDone = true;
      },

    }
  });
});
