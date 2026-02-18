const createOrderNumber = () => {
    const date = new Date();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const randomNumber = Math.floor(101 + Math.random() * 899);

    return `${month}${day}-${randomNumber}`;

}
export default createOrderNumber;