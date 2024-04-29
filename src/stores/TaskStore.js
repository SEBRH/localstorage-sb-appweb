import {defineStore} from "pinia";

export const useTaskStore = defineStore({id: 'taskStore',
    state: () => ({task:[], loading: false}),
    getters: {
        favs(){
            return this.task.filter(t => t.isFav);
        }
    },
    actions: {
        async fetchTasks(){
            this.loading = true;
            const response = await fetch('http://localhost:3000/tasks');
            const data = await response.json();
            this.task = data;
            this.loading = false;

        }}});