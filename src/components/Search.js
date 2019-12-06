import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      /* biến tạm lưu giá trị input text search */
      textTemp : ''
    }
  }
  // hàm hiển thị nút. kiểm tra giá trị props hienThiForm được truyền qua từ component app.js
  hienThiNut = () => {
    if(this.props.hienThiForm === true){
      return  <button type="button" onClick = {() => this.props.trangThaiNut()} className="btn btn-lg btn-block btn-success">Them</button>
    }else {
      return <button type="button" onClick = {() => this.props.trangThaiNut()} className="btn btn-lg btn-block btn-danger ">Xóa</button>
    }
  }
  isChange = (event) => {
    this.state.textTemp = event.target.value;
    this.setState({
      textSearchState : this.state.textTemp
    });
    //Nếu muốn seach ngay khi nhập text vào input mà không nhấn nút submit thì gọi 
    this.props.getTextSearch(this.state.textSearchState);
  }
  getEditUserInfo = (dataEditInfo) => {
    this.props.getEditUserInfoApp(dataEditInfo);
  }
  isShowEditForm = () => {
    if(this.props.trangThaiFormEdit === true){
      return  <EditUser getEditUserInfo = {(dataEditInfo) => this.getEditUserInfo(dataEditInfo)} userEditDataObject ={this.props.userEditDataObject} clickShowOrCloseFormEdit ={() => this.props.clickShowOrCloseFormEdit()}></EditUser>
    }
  }
    render() {
     
        return (
         
            <div className="row">
              {this.isShowEditForm()}
            <div className="col-md-12">
              <div className="form-group">
                <div className="btn-group">
                  <input type="text" name="keySearch" className="form-control" onChange={(event) => this.isChange(event)
                  } placeholder="Nhap vao " aria-describedby="helpId" />
                  <input type="submit" onClick={(textSearch) => this.props.getTextSearch(this.state.textSearchState)} className="btn btn-success" defaultValue="Tìm kiếm" />
                </div>
              </div>
             {this.hienThiNut()}
              
            </div>
            <div className="com-md-12">
              <hr />
            </div>
          </div>
          
        );
    }
}

export default Search;