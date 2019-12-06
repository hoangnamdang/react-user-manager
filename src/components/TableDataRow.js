import React, { Component } from 'react';

class TableDataRow extends Component {
  permisstionShow = () => {
    if(this.props.userPermission === 1){
        return "Admin";
    }
    else if(this.props.userPermission === 2){
      return "Mornitor";
    }else {
      return "Normal user";
    }
  }
  editClick = () => {
    /* hàm lấy dữ liệu User */
   this.props.editClickFunc();
    /* hàm show form edit */
    this.props.clickShowOrCloseFormEdit();
  }
  clickButtonDeleteUser = (idUser) => {
    this.props.clickButtonDeleteUser(idUser);
  }
  render() {
    return (
      <tr>
        <td>{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.userTel}</td>
        <td>{this.permisstionShow()}</td>
        <td>
          <button type="button" onClick = {() => this.editClick()} className="btn btn-warning"><i className="fas fa-pencil-alt"></i>Sửa</button>
          <button type="button" onClick = {(idUser) => this.clickButtonDeleteUser(this.props.id)} className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;