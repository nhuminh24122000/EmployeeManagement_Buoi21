const listEmp = new ListEmp();
const validation = new Validation();

function getELE(id) {
  return document.getElementById(id);
}

function displayTable(arr) {
  var content = "";
  arr.map(function (emp) {
    var trELE = `<tr>
            <td>${emp.acc}</td>
            <td>${emp.name}</td>
            <td>${emp.email}</td>
            <td>${emp.workDay}</td>
            <td>${emp.position}</td>
            <td>${emp.totalSalary}</td>
            <td>${emp.type}</td>
            <td>
                <button onclick="deleteEmployee('${emp.acc}')" class="btn btn-danger">Xóa</button>
                <button data-toggle="modal" data-target="#myModal" onclick="viewDetail('${emp.acc}')" class="btn btn-info">Xem</button>
            </td>
        </tr>`
    content += trELE;
  })
  getELE("tableDanhSach").innerHTML = content;
}


function setLocalStorage(arr) {
  localStorage.setItem("ListEmp", JSON.stringify(arr));
}

function getLocalStorage() {
  if (localStorage.getItem("ListEmp") != null) {
    listEmp.arrEmp = JSON.parse(localStorage.getItem("ListEmp"));
    displayTable(listEmp.arrEmp);
  }
}
getLocalStorage();


function addEmployee() {
  var acc = getELE("tknv").value;
  var name = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var workDay = getELE("datepicker").value;
  var salary = getELE("luongCB").value;
  var position = getELE("chucvu").value;
  var workTime = getELE("gioLam").value;

  var isValid = true;

  isValid &= validation.checkEmpty(acc, "tbTKNV", "Account không để trống!") && validation.checkAcc(acc, "tbTKNV", "Account tối đa 4-6 ký số") && validation.accExist(acc, "tbTKNV", "Account không được trùng", listEmp.arrEmp);

  isValid &= validation.checkEmpty(name, "tbTen", "Tên không để trống!") && validation.checkName(name, "tbTen", "Tên chưa đúng định dạng!");

  isValid &= validation.checkEmpty(email, "tbEmail", "Email không để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!");

  isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu chưa đúng định dạng!");

  isValid &= validation.checkEmpty(workDay, "tbNgay", "Ngày làm không để trống!") && validation.checkDay(workDay, "tbNgay", "Ngày làm chưa đúng định dạng!");

  isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương cơ bản không để trống!") && validation.checkSalary(salary, "tbLuongCB", "Lương cơ bản chưa hợp lệ!");

  isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ!");

  isValid &= validation.checkEmpty(workTime, "tbGiolam", "Số giờ làm không để trống!") && validation.checkTime(workTime, "tbGiolam", "Số giờ làm chưa hợp lệ!");

  if (isValid) {
    var emp = new Employee(acc, name, email, pass, workDay, Number(salary), position, Number(workTime));
    emp.calSalary();
    emp.typeEmp();

    listEmp.addEmp(emp);
    displayTable(listEmp.arrEmp);
    setLocalStorage(listEmp.arrEmp);
  }
}


function deleteEmployee(id) {
  listEmp.deleteEmp(id);

  setLocalStorage(listEmp.arrEmp);
  getLocalStorage()
}

function viewDetail(id) {
  var index = listEmp.findIndexEmp(id);

  if (index != -1) {
    getELE("tknv").value = listEmp.arrEmp[index].acc;
    getELE("tknv").disabled = true;
    getELE("name").value = listEmp.arrEmp[index].name;
    getELE("email").value = listEmp.arrEmp[index].email;
    getELE("password").value = listEmp.arrEmp[index].pass;
    getELE("datepicker").value = listEmp.arrEmp[index].workDay;
    getELE("luongCB").value = listEmp.arrEmp[index].salary;
    getELE("chucvu").value = listEmp.arrEmp[index].position;
    getELE("gioLam").value = listEmp.arrEmp[index].workTime;
  }
}

function updateEmployee() {
  var acc = getELE("tknv").value;
  var name = getELE("name").value;
  var email = getELE("email").value;
  var pass = getELE("password").value;
  var workDay = getELE("datepicker").value;
  var salary = getELE("luongCB").value;
  var position = getELE("chucvu").value;
  var workTime = getELE("gioLam").value;

  var isValid = true;

  isValid &= validation.checkEmpty(name, "tbTen", "Tên không để trống!") && validation.checkName(name, "tbTen", "Tên chưa đúng định dạng!");

  isValid &= validation.checkEmpty(email, "tbEmail", "Email không để trống!") && validation.checkEmail(email, "tbEmail", "Email chưa đúng định dạng!");

  isValid &= validation.checkEmpty(pass, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(pass, "tbMatKhau", "Mật khẩu chưa đúng định dạng!");

  isValid &= validation.checkEmpty(workDay, "tbNgay", "Ngày làm không để trống!") && validation.checkDay(workDay, "tbNgay", "Ngày làm chưa đúng định dạng!");

  isValid &= validation.checkEmpty(salary, "tbLuongCB", "Lương cơ bản không để trống!") && validation.checkSalary(salary, "tbLuongCB", "Lương cơ bản chưa hợp lệ!");

  isValid &= validation.checkSelect("chucvu", "tbChucVu", "Chức vụ chưa hợp lệ!");

  isValid &= validation.checkEmpty(workTime, "tbGiolam", "Số giờ làm không để trống!") && validation.checkTime(workTime, "tbGiolam", "Số giờ làm chưa hợp lệ!");

  if (isValid) {
    var emp = new Employee(acc, name, email, pass, workDay, Number(salary), position, Number(workTime));
    emp.calSalary();
    emp.typeEmp();

    listEmp.updateEmp(emp);
    setLocalStorage(listEmp.arrEmp);
    getLocalStorage();
  }
}

getELE("btnCapNhat").onclick = updateEmployee;


// function search() {
//   var keyword = getELE("searchTypeEmp").value;
//   var arrRs = listEmp.searchType(keyword);

//   displayTable(arrRs);
// }

// getELE("btnTimNV").onclick = search;

getELE("searchTypeEmp").onkeyup = function () {
  var keyword = getELE("searchTypeEmp").value;
  var result = listEmp.searchType(keyword);

  displayTable(result);
}

var clear = function() {
  if (getELE("tknv").disabled = true) {
      getELE("tknv").disabled = false;
      getELE("tknv").value = "";
  }
  getELE("name").value = "";
  getELE("email").value = "";
  getELE("password").value = "";
  getELE("luongCB").value = "";
  getELE("chucvu").value = "Chọn chức vụ";
  getELE("gioLam").value = "";
}

getELE("btnDong").onclick = clear;