import React, { Component } from 'react';
import TableDataRow from './TableDataRow';
class TableData extends Component {
  mappingDataUser = () => this.props.dataUserProp.map((value, key) => {
    return (
      <TableDataRow 
      clickButtonDeleteUser = {(idUser) => this.props.clickButtonDeleteUser(idUser)}
      clickShowOrCloseFormEdit = {() => this.props.clickShowOrCloseFormEdit()}
       editClickFunc = {(user) => this.props.editFunc(value)} 
       stt={key}
        userName={value.name}
         userTel={value.tel} 
         userPermission={value.permission}
          key={key} id ={value.id}></TableDataRow>
    )
  })
  
  render() {
   
    return (
      
      <div className="col-md-9">
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
             this.mappingDataUser() 
            }

          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;