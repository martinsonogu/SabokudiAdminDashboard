import React from 'react'
import"./salesranking.css"
import SalesRepImg from "../../assets/images/salesmanagerimg.png"

const WidgetLg = () => {
  return (
    <div className='widgetLg'>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh"></th>
          <th className="widgetLgTh">Manager name</th>
          <th className="widgetLgTh">Rep name</th>
          <th className="widgetLgTh">Registered user</th>
          <th className="widgetLgTh">Revenue</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
             src={SalesRepImg} 
             alt="" 
             className="widgetLgTrImg" 
             />
          </td>
          <td className="widgetLgName">Nancy Amina</td>
          <td className="widgetLgName">Musa Hassan</td>
          <td className="widgetLgName">50,000.00</td>
          <td className="widgetLgName">#50,000.00</td>
        </tr> 
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
             src={SalesRepImg} 
             alt="" 
             className="widgetLgTrImg" 
             />
          </td>
          <td className="widgetLgName">Ebi Tom</td>
          <td className="widgetLgName">Faith Anaja</td>
          <td className="widgetLgName">250,000.00</td>
          <td className="widgetLgName">#70,000.00</td>
        </tr>   
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLg;
