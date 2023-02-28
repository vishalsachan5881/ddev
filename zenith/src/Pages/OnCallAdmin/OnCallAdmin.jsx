import React from 'react'
import Card from "../../components/Card/Card";
// import CardData from "../../components/Card/CardData";
import CardData_OnCallAdmin from '../../components/Card/CardData_OnCallAdmin';

function OnCallAdmin() {
  return (
    <>
    <div className="home-card"><Card details = {CardData_OnCallAdmin}/></div>
    </>
  )
}

export default OnCallAdmin
