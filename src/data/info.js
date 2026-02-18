let proc = 1.1;
const createPrice = (basicPrice) => {
   return Number(Number(basicPrice) * proc).toFixed(2)
}
export default createPrice;