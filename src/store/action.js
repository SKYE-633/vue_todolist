import axios from 'axios'

const baseUrl = '';
export const actions = {
    getList({ commit }) {
        axios.get(baseUrl).then(response => commit('reloadItems', response.data));
    },
    addItem(context, data) {
        axios.post(baseUrl, data).then(() => this.dispatch('getList'));
    },
    updateItem(context, data) {
        axios.put(`${baseUrl}/${data.id}`, data).then(() => this.dispatch('getList'));
    },
    deleteItem(context, data) {
        axios.delete(`${baseUrl}/${data.id}`, data).then(() => this.dispatch('getList'));
    },

}
