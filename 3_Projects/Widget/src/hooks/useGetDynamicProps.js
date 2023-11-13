const useGetDynamicProps = props => {
    // console.info('useGetDynamicProps parameters', props);

    // Expression
    const {
        dynamicExpression: {
            status: dynamicExpressionStatus ,
            value: dynamicExpressionValue
        }
    } = props;

    // console.info(   'dynamicExpressionStatus', dynamicExpressionStatus);
    // console.info(   'dynamicExpressionValue', dynamicExpressionValue);
    let discountColor = '';
    if (dynamicExpressionStatus === "available"){
        discountColor = dynamicExpressionValue;
    }


    // Change Price
    const {changePrice} = props;
    const onChangePrice = () => {
        if (changePrice.canExecute){
            changePrice.execute();
        }
    }


    // Attribute
    const {dynamicProductName : {
        status: productStatus,
        value: productValue,
        setValue: setProductName,
        readOnly: ProductReadonly

    }} = props;
    let productName = '';
    if (productStatus === "available"){
        productName = productValue;
    }


    // Datasource
    const {
        dynamicProductList : {
            status: productListStatus,
            items: productList
        }
    } = props;

    const { dynamicProductNameFromList : listProductName } = props;

    let productListOfName = [];

    if (productListStatus === "available"){
        productList.forEach(element => {
            // debugger;
            const productName = listProductName.get(element).value;
            productListOfName.push(productName);
            
        });

    }

    return{
        discountColor,
        onChangePrice,
        productName,
        setProductName,
        ProductReadonly,
        productListOfName
    };

};

export default useGetDynamicProps;