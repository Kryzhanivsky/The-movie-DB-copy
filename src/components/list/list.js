import Card from "../card/card.js";

const List = (items) => {
    const list = document.createElement("div");
    list.className = "list";
    items.forEach((item) => list.append(Card(item)));
    return list;
};
export default List