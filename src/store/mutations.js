export const mutations = {
    reloadItems: (state, newItems) => {
        state.items = newItems;
        state.toDisplayItems = newItems;
    },
    updateDisplayItems: (state, flag) => {
        if (flag == "All") {
            state.toDisplayItems = state.items;
        } else if (flag == "Actived") {
            state.toDisplayItems = state.items.filter(item => !item.isCompleted);
        } else {
            state.toDisplayItems = state.items.filter(item => item.isCompleted);
        }
    }
}