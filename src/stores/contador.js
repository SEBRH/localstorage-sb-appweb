import {defineStore} from "pinia";

export const useContadorStore = defineStore({
    id: 'contador',
    state: () => (
        {count: 0, numberOfChanges: 0}),
    getters: {
        doubleCount: state => state.count * 2,
    },
    actions: {
        increment() {
            this.count++;
            this.numberOfChanges++;
            localStorage.setItem('count', this.count);
        },
        decrement() {
            this.count--;
            this.numberOfChanges++;
            localStorage.setItem('count', this.count);
        },
        reset() {
            this.count.value = 0;
            this.numberOfChanges++;
        },
    }
})