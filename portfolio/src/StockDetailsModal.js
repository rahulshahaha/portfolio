import React from 'react';



class StockDetailsModal extends React.Component {


    render(){
        return (
            <div className="StockDetailsModal">
                <div id="modal-stockDetails" className="modal grey darken-3">
                    <div className="modal-content">
                    <h4 id="stockDetails-company" className="white-text">Company</h4>
                    <h4 id="stockDetails-price" className="white-text">Price</h4>
                    <h4 id="stockDetails-previousClose" className="white-text">Previous Close</h4>
                    <h4 id="stockDetails-pe" className="white-text">PE</h4>
                    <h4 id="stockDetails-exchange" className="white-text">Exchange</h4>
                    <h4 id="stockDetails-week52Low" className="white-text">52 Week Low</h4>
                    <h4 id="stockDetails-week52High" className="white-text">52 Week High</h4>
                    <h4 id="stockDetails-marketCap" className="white-text">Market Cap</h4>
                    <h4 id="stockDetails-ytdChange" className="white-text">YTD Change</h4>
                    </div>
                </div>
            </div>
        )
    }
}


export default StockDetailsModal;