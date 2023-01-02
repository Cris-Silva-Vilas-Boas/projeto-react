
const orderName = (list : []) => {
    list.sort((a,b)=> a < b ? 1:-1);
};

export default orderName;
