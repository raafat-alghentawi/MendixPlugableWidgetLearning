import { createElement } from "react";

import "./ui/FirstWidget.css";
import StaticType from "./components/StaticType";
import useGetDynamicProps from "./hooks/useGetDynamicProps";
import DynamicType from "./components/DynamicType";

export function FirstWidget(props) {
    console.info("Props come from Mendix: ", props);
   const {discountColor, onChangePrice, productName, setProductName, ProductReadonly, productListOfName} = useGetDynamicProps(props);
   
//    console.info("discountColor", discountColor);
    const {sampleText, strInput, staticStrMultiline, staticBoolean, staticInteger}  = props;
    return (
        <div>
            <StaticType {... props}></StaticType>
            <DynamicType 
                discountColor={discountColor}
                onChangePrice={onChangePrice}
                productName={productName}
                setProductName={setProductName}
                ProductReadonly={ProductReadonly}
                productListOfName={productListOfName}
             ></DynamicType>
        </div>
        )
}
