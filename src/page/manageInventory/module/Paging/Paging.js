import React from "react"
import "./Paging.css"

function Paging() {
    return (
        <div className="Paging">
            <div className="Paging-left">
                页面<input placeholder={1}/>共13页<button>前往</button>
            </div>
            <div className="Paging-center">
                <button>←上一页</button>
                <button className="Paging-center-button">1</button>
                <button className="Paging-center-button">2</button>
                <button className="Paging-center-button">3</button>
                <button className="Paging-center-button">4</button>
                <div className="Paging-center-btn">...</div>
                <button className="Paging-center-button">13</button>
                <button>下一页→</button>
            </div>
            <div className="Paging-right">
                <div></div>
                <select>
                    <option value="...">每页10个搜索结果</option>
                </select>
            </div>
        </div>
    )
}

export default Paging