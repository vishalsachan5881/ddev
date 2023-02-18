import React from "react";
import Card from "../../components/Card/Card";
import CardData from "../../components/Card/CardData";

const Utility = function Utility(params) {
    return(
    <>
    <div className="home-card"><Card details = {CardData}/></div>
    </>
    )
}
export default Utility;