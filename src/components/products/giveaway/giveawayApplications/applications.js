import React from 'react'
import './applications.css'

const applications = () => {
  return (
    <div>
      <table className="table">
              <tbody>
                <tr className="TableBodyTr">
                  <th className="tableheader">Name</th>
                  <th className="tableheader">Uploads</th>
                  <th className="tableheader">date</th>
                </tr> 
                
                <tr className="tableBodyTr">
                  <td className="tableText">Ajani Ayemo <span className='tableTextDetails'>see details</span></td>
                  <td className="tableText">#5,000</td>
                  <td className="tableText">12/9/2022</td>
                </tr> 
                
               </tbody>
            </table>
    </div>
  )
}

export default applications