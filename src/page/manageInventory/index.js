import React from "react"
import "./manage-inventory.css"
import FooterCom from "../../components/FooterCom/FooterCom";
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import Superior from "./module/Superior/Superior";
import OrderForm from "./module/OrderForm/OrderForm";
import Paging from "./module/Paging/Paging";

function ManageInventory() {

    return (
        <div>
            {/* <HeaderCom></HeaderCom> */}
            <div className="manageInventory">
                <Superior></Superior>
                <OrderForm></OrderForm>
                <Paging></Paging>
            </div>
            <FooterCom></FooterCom>
        </div>
    )
}

export default ManageInventory