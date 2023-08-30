import moment from "moment";

function Price({electricityPrice}){
    const now = moment().startOf('hour').unix();
    const price = electricityPrice?.ee.map(item => item.timestamp === now? item.price:null);
    return(
        <>
        <h2>{price}</h2>
        <div>Sents/kw</div>
        </>
    )
}

export default Price;

