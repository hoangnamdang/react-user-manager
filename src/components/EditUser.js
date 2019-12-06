import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : this.props.userEditDataObject.id,
      name : this.props.userEditDataObject.name,
      tel : this.props.userEditDataObject.tel,
      permission : this.props.userEditDataObject.permission
    }
    
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    });
  }

  isSaveInfoForm = () => {
    this.props.clickShowOrCloseFormEdit();
    var dataEditInfo = {};
    dataEditInfo.id = this.state.id;
    dataEditInfo.name = this.state.name;
    dataEditInfo.tel = this.state.tel;
    dataEditInfo.permission = this.state.permission;
    this.props.getEditUserInfo(dataEditInfo);
  }
    render() {
        return (
            <div className="col-md-12">
                
        <form method="post">
       
       <div className="card text-white bg-warning mb-3 mt-2">
          
        <div className=" card-header">
        Sửa thông tin user
        </div>
        <div className=" card-body">
        <div className="form-group">
            <label>Tên</label>
            <input type="text" name="name" onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditDataObject.name}  className="form-control" placeholder="Nhập tên" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label>SDT</label>
            <input type="number" onChange = {(event) => this.isChange(event)} name="tel"defaultValue={this.props.userEditDataObject.tel}  className="form-control" placeholder="Nhập SDT" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label>Phân quyền</label>
            <select className="form-control" onChange = {(event) => this.isChange(event)} defaultValue={this.props.userEditDataObject.permission} name="permission">
              <option >Lựa chọn phân quyền</option>
              <option value={1}>Admin</option>
              <option value={2}>Modrator</option>
              <option value={3}>Normal</option>
            </select>
          </div>
         <div className="form-group">
         <input type="button" onClick = {() => this.isSaveInfoForm()} className="btn bg-block btn-danger" value="Lưu"/>
         </div>
          

        </div>
       </div>
        </form>
        <hr/>
            </div>
        );
    }
}

export default EditUser;