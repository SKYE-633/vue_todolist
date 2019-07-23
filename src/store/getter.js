export default {
    getters: {
        getDisplayItems: state => state.toDisplayItems,
        getAllItems: state => {
            state.toDisplayItems = state.items;
            state.toDisplayItems.splice(0, 0);
        },
        getActiveItems: state => {
            state.toDisplayItems = state.items.filter(item => !item.isCompleted);
            state.toDisplayItems.splice(0, 0);
        },
        getCompletedItems: state => {
            state.toDisplayItems = state.items.filter(item => item.isCompleted);
            state.toDisplayItems.splice(0, 0);
        }
    }
}