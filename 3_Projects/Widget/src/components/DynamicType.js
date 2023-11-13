import React from "react";
import { createElement } from "react";

const DynamicType = ({ discountColor, onChangePrice, productName, setProductName, ProductReadonly, productListOfName}) => {
    

    const onChangeProductName = () => {
        // debugger;
        // productListOfName.forEach(element => {
        //     debugger;
            // if (element === 'Product for test'){
            //     setProductName('this product must test before use')
            // }
        // });

        for (let i = 0; i < productListOfName.length; i++) {
            if (productListOfName[i] === 'Product for test'){
                setProductName('this product must test before use');
                break;
            }
            
        }


        
        
        // if (ProductReadonly === false){
        //     setProductName('TEST')
        // } else {
        //     alert("You can't channge the valyue becase the dataview is not editable");
        // }        
    }

    return (
        <div>
            <div style={{ background: discountColor }}>
                <h5> First Product Discount</h5>
            </div>

            <button className={"btn btn-primary btn-sm"}
            onClick={onChangePrice}
            >
                Change Price
            </button>

            <div>
                <h5><b> Product Name: </b> {productName}</h5>
            </div>

            <button className={"btn btn-primary btn-sm"}
            onClick={onChangeProductName}
            >
                Change Product Name from WIDGET
            </button>
        </div>
    );
};

export default DynamicType;
