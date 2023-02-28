import React from "react";
import './Overview.css';
const Overview = function Overview(params) {
    return(
        <>
    <div className="Into-Head" style={{margin:20}}>
    <div id="HZenith-RBSDataandAnalyticsPlatform"><h3 className="Head">Zenith - RBS Data and Analytics Platform</h3>
    </div>
    <div className="p-cluster">
        <br/>
    <p>Zenith is a self-service data and analytics platform launched in October 2020 to address RBS’s data and reporting requirements.</p>
    <p>Zenith’s mission is to provide teams in RBS with quick, easy and accurate solutions for their business reporting, analytics and decision making needs.<br/>Zenith enables customers to create reports in a self-service way without being dependent on Data engineering team through easy integration with new data sources , ensuring 100% data availability and providing optimization mechanisms for query runs on Redshift clusters.</p>
    <p>By 2024, RBS DE team will enable 100% zero touch reporting, dashboards and financial data for all RBS BUs to enable rapid business decisions for RBS teams, through Zenith a self-service data and analytics platform, which was launched in 2021 enabling RBS teams to create reports in a self-service manner through easy integration with data sources, visibility on job/cluster health and alarms for unhealthy queries.&nbsp;</p>
    </div>
   
        </div>
    </>
    );
}
export default Overview;
