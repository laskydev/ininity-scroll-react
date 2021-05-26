
export const fetchMoreData = (items, setItems) => {
    setTimeout(() => {
        setItems({
            items: items.items.concat(Array.from({ length: 10 })),
        });
    }, 50);
};
