import {defineStore} from 'pinia'


export const useTaskStore = defineStore('taskStore',{

    state:()=>({

           tasks:[
            {id:1, title:"buy some milk",isFav:false},
            {id:2, title:"play the wloof",isFav:true},
            {id:3, title:"play JG RTKJ  JKthe wloof",isFav:true},

            {id:4, title:"EUFHLF  RJ FVB ",isFav:true},
            {id:5, title:"play NF VJ,IJRH FJBFB RJFEJHof",isFav:true},
           ]
          

    }),
    getters:{
        favs(){
            return this.tasks.filter(t=>t.isFav)
        },
        favCount(){
            return this.tasks.reduce((p,c)=>{
                return c.isFav? p+1 :p
            },0)
        },
        totalCount: (state)=>{
            return state.tasks.length
        }
    },
    actions:{
        addTask(task){
            this.tasks.push(task)
        }
    }

})