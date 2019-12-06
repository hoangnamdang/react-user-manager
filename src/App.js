import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TableData from './components/TableData';
import AddUser from './components/AddUser';
import DataUser from './components/Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    /*
    *trangThaiForm : biến trang thái form Add user
    *data: dữ liệu file Data.js
    * textSearch giá trị inputsearch
    * statusFormEdit là trạng thái form Edit user
    * userEditDataObject dữ liệu user
     */
    this.state = {
      trangThaiForm : true,
      data : [],
      textSearch: '',
      statusFormEdit : false,
      userEditDataObject : {}

    }
  }
  
  UNSAFE_componentWillMount(){
    //kiem tra localStorge 
    if(localStorage.getItem("dataUser") === null){
      //xét giá trị dataUser
      /* 
      *localStorage.setItem() xét giá trị dataUser bằng DataUser
      *JSON.stringify() là hàm chuyển đổi đối tượng thành string 
      */ 
      localStorage.setItem("dataUser",JSON.stringify(DataUser));
    }else {
      /*
      *localStorage.getItem() hàm lấy giá trị dataUser
       */
      var tempDataUser = JSON.parse(localStorage.getItem("dataUser",DataUser));
      this.setState({
        data:tempDataUser
      });
    }
  }

  // hàm ẩn hiện form truyền sang search.js để sử lý
  hideShowButton = () => {
    // gián giá trị trạng thái form rồi truyền qua addUser.js
      this.setState({
        trangThaiForm : !this.state.trangThaiForm
      });
  }
  // hàm lấy giá trị textSeach bên component search.js
  getTextSearch = (text) => {
    this.setState({
      textSearch: text
    });
  }
  // get giá trị data từ form điền thông tin bên AddUser.js
  getNewDataUser = (name,tel,permission) => {
    // đóng gói  giá trị vào object
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    // gián giá trị item vào items 
    var items = this.state.data;
    /* đâỷ item vào items(vào dữ liệu chính) */
    items.push(item);
    //cap nhat dữ liệu mới qua state
    this.setState({
      data : items
    });
     //xét giá trị temData vào localStorage
     localStorage.setItem("dataUser",JSON.stringify(items));
  }
  //hàm lấy thông tin user để sửa
  editUser = (user) => {
    this.setState({
      userEditDataObject:user
    });
    
    
  }
  //hàm cập nhât dữ liệu
  getEditUserInfoApp = (dataEditInfo) => {
    this.state.data.forEach((value,key) => {
      if(value.id === dataEditInfo.id){
        value.name = dataEditInfo.name;
        value.tel = dataEditInfo.tel;
        value.permission = dataEditInfo.permission;
      }
    })
     //xét giá trị temData vào localStorage
     localStorage.setItem("dataUser",JSON.stringify(this.state.data));
  }
  //hàm xóa dữ liệu 
  clickButtonDeleteUser = (idUser) => {
    // hàm filter là hàm kiểm tra phần tử trong  mảng và xóa phần tử trùng với idUser
    var tempData = this.state.data.filter(item => item.id !== idUser);
  
    this.setState({
      data: tempData
    });
    //xét giá trị temData vào localStorage
    localStorage.setItem("dataUser",JSON.stringify(tempData));
  }
  // hàm show form editUser.js
  clickShowOrCloseFormEdit = () => {
   
    this.setState({
      statusFormEdit: !this.state.statusFormEdit
    });
  }

  render() {
    var ketqua = [];
    /*
    *kiểm tra text search có trùng với data hay không 
    * dùng forEach vì forEach không return giá trị, map thì return giá trị
    * indexOf kiểm tra giá trị nếu == -1 thì không tìm thấy giá trị trong mảng
     */
    this.state.data.forEach((item) => {
      //kiểm tra text có trùng trong mảng data 
      if(item.name.indexOf(this.state.textSearch)!== -1){
      // kết quả nếu trùng thì push vào mảng kết quả dữ liệu thu được 
        ketqua.push(item);
      }
    })

   

    return (
      <div className="App">
        <Header></Header>
        <div className="table-user">
          <div className="container">
            <Search 
            getEditUserInfoApp = {(dataEditInfo) => this.getEditUserInfoApp(dataEditInfo)}
            userEditDataObject = {this.state.userEditDataObject}
            trangThaiFormEdit = {this.state.statusFormEdit}
             clickShowOrCloseFormEdit = {() => this.clickShowOrCloseFormEdit()}
              trangThaiNut = {() => this.hideShowButton()}
               hienThiForm = {this.state.trangThaiForm} 
               getTextSearch ={(text) => this.getTextSearch(text)} 
               ></Search>
            <div className="row">
            <TableData 
            clickButtonDeleteUser = {(idUser) => this.clickButtonDeleteUser(idUser)}
            clickShowOrCloseFormEdit = {() => this.clickShowOrCloseFormEdit()}
             editFunc = {(user) => this.editUser(user)}
              dataUserProp = {ketqua}
              ></TableData>
            <AddUser 
            trangThaiForm = {this.state.trangThaiForm} 
            getNewDataUser = {(name,tel,permission) => this.getNewDataUser(name,tel,permission)}></AddUser>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;