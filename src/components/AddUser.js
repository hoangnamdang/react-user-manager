import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name:"",
      tel: "",
      permission: ""
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]:value
    });
    // đóng gói thành một mảng
   /*  var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;

    console.log(item); */
  }
  kiemTraHienThiForm = () => {
    if (this.props.trangThaiForm === false) {
      return (
        /* reset form bằng input reset */
        <form method="post">
          <div className="form-group">
            <label>Tên</label>
            <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập tên" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label>SDT</label>
            <input type="number" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập SDT" aria-describedby="helpId" />
          </div>
          <div className="form-group">
            <label>Phân quyền</label>
            <select className="form-control" onChange={(event) => this.isChange(event)} name="permission">
              <option >Lựa chọn phân quyền</option>
              <option value={1}>Admin</option>
              <option value={2}>Modrator</option>
              <option value={3}>Normal</option>
            </select>
          </div>
          <input type="reset" onClick = {(name,tel,permission) =>  this.props.getNewDataUser(this.state.name,this.state.tel,this.state.permission)} className="btn btn-primary" value="Submit"/>
          
        </form>
      )
    }
  }
  render() {

    return (
      <div className="col-md-3">

        <hr />
        {this.kiemTraHienThiForm()}
      </div>
    );
  }
}

export default AddUser;