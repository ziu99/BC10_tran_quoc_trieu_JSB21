// ? tạo array dsnv
var dsnv = [];

//? lấy data từ localStrorage =>render lên layout
var dataJson = localStorage.getItem("dsnv");
var arrayNV = JSON.parse(dataJson);

// ? tạo class NhanVien
// ? duyệt mảng => convert object => object từ class

for (var i = 0; i < arrayNV.length; i++) {
  var data = arrayNV[i];
  var nv = new NhanVien(
    arrayNV[i].tk,
    arrayNV[i].name,
    arrayNV[i].email,
    arrayNV[i].pass,
    arrayNV[i].date,
    arrayNV[i].luong,
    arrayNV[i].chucVu,
    arrayNV[i].gioLam
  );
  dsnv.push(nv);
}
renderNv();

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

// ! SỬA NV
function suaNv(id) {
  // ? tìm vị trí
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if ((dsnv[i].tk = id)) {
      index = i;
    }
  }
  // ? từ index => lấy ra ds đc click
  var nv = dsnv[index];
  console.log(nv);

  // ? show thông tin lên form
  document.getElementById("tknv").value = nv.tk;
  document.getElementById("name").value = nv.name;
  document.getElementById("email").value = nm.email;
  document.getElementById("password").value = nv.pass;
  document.getElementById("datepicker").value = nv.date;
  document.getElementById("luongCB").value = nv.luong;
  document.getElementById("chucVu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLam;
}

// ! CẬP NHẬT NV
document.getElementById("btnCapNhat").onclick=function() {
  var nv = layForm();
  // ? tìm vị trí
  var index;
  for (var i = 0; i < dsnv.length; i++) {
    if ((dsnv[i].tk = nv.tk)) {
      index = i;
    }
  }
  // ? cập nhật data tại vị trí index
  dsnv[index] = nv;
  renderNv();
}


