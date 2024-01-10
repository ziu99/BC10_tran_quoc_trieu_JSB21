// ? tạo array dsnv
var dsnv = [];

//? lấy data từ localStrorage =>render lên layout
var dataJson = localStorage.getItem("dsnv");
var arrayNV = JSON.parse(dataJson);

// ! THÊM NV
document.getElementById("btnThemNV").onclick = function () {
  var nv = layForm();
  dsnv.push(nv);
  console.log({ dsnv });
  // ? giữ lại data khi user load trang
  var dataJson = JSON.stringify(dsnv);
  localStorage.setItem("dsnv", dataJson);

  // ? render lại layout khi thêm thành công
  renderNv();
};

// ! XOÁ NV
function xoaNv(id) {
  // ? splice (vị trí cần xoá , ố lượng cần xoá )
  // ? từ id tìm ra index

  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if ((dsnv[i].tk = id)) {
      index = i;
    }
  }
  console.log({ index });
  // ? xoá phần tử tại vị trí index trong array dssv
  dsnv.splice(index, 1);

  // ? render lại layout khi xoá thành công
  renderNv();
}

// ...

// ! SỬA NV
function suaNv(id) {
  // Tìm vị trí của nhân viên cần sửa
  var index = dsnv.findIndex(function (nv) {
    return nv.tk == id;
  });

  // Kiểm tra xem có tồn tại nhân viên không
  if (index != -1) {
    var nv = dsnv[index];

    // Hiển thị thông tin nhân viên lên form
    document.getElementById("tknv").value = nv.tk;
    document.getElementById("name").value = nv.name;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.pass;
    document.getElementById("datepicker").value = nv.date;
    document.getElementById("luongCB").value = nv.luong;
    document.getElementById("chucVu").value = nv.chucVu;
    document.getElementById("gioLam").value = nv.gioLam;

  
  } else {
    alert("Không tìm thấy nhân viên có tài khoản : " + id);
  }
}

// ! CẬP NHẬT NV
document.getElementById("btnCapNhat").onclick = function () {
  var nv = layForm();

  // Tìm vị trí của nhân viên cần cập nhật
  var index = dsnv.findIndex(function (item) {
    return item.tk == nv.tk;
  });

  // Kiểm tra xem có tồn tại nhân viên không
  if (index != -1) {
    // Cập nhật thông tin nhân viên
    dsnv[index] = nv;

    // Render lại danh sách nhân viên
    renderNv();

    // Đặt lại giá trị của các trường input trong form  về trạng thái ban đầu
    resetForm();
  } else {
    alert("Không tìm thấy nhân viên có tài khoản : " + nv.tk);
  }
};

// ...
