export default {
    addItem(state, item) {
        item.id = state.items.length + 1;
        state.items.push(item);
        state.toDisplayItems.push(item);
    },
    update(state, id) {
        let item = state.items.filter(item => item.id == id);
        item.isCompleted = !item.isCompleted;
    }
}