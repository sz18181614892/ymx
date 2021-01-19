import "./commodityType.css"
import HeaderCom from "../../components/HeaderCom/HeaderCom";
import CommodityCollect from "./module/Commodity-collect/Commodity-collect";
import CommodityBrowse from "./module/Commodity-browse/Commodity-browse";
import CommoditySelect from "./module/Commodity-select/Commodity-select";
import FooterCom from "../../components/FooterCom/FooterCom";
function commodity() {
    return (
        <div className="commodity-main">
            <HeaderCom/>
            <CommodityCollect/>
            <CommodityBrowse/>
            <CommoditySelect/>
            <FooterCom/>
        </div>
    )
}

export default commodity