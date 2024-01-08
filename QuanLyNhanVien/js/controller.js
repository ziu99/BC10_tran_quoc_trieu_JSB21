function renderNv() {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var data = dsnv[i];
    var trString = `<tr>
        <td>${data.tk}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.date}</td>
        <td>${data.xetChucVu()}</td>
        <td>${data.tinhTongLuong().toFixed()}</td>
        <td>${data.tinhXepLoai()}</td>
        <td>
        <button
            onclick="xoaNv('${data.tk}')"
            class='btn btn-danger'        
        >xoá</button>
        <button
        onclick="suaNv('${data.tk}')"
        class='btn btn-info'        
    >sửa</button>
        </td> 
        </tr>`;
    contentHTML = contentHTML + trString;
  }

  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

function layForm() {
  // ? lấy data từ form
  var tk = document.getElementById("tknv").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var date = document.getElementById("datepicker").value;
  var luong = document.getElementById("luongCB").value * 1;
  var chucVu = document.getElementById("chucVu").value * 1;
  var gioLam = document.getElementById("gioLam").value * 1;
  // ? tạo object
  var nv = {
    tk: tk,
    name: name,
    email: email,
    pass: pass,
    date: date,
    luong: luong,
    chucVu: chucVu,
    gioLam: gioLam,

    tinhTongLuong: function () {
      return luong * chucVu;
    },

    tinhXepLoai: function () {
      if (chucVu==1 && gioLam < 160) {
        return "NV Trung Bình";
      }
      else if (chucVu==1 && 160 <= gioLam && gioLam < 176) {
        return "NV Khá";
      }
      else if (chucVu==1 && 176 <= gioLam && gioLam < 192) {
        return "NV Giỏi";
      }
      else if (chucVu==1 && gioLam >= 192) {
        return "NV Xuât Sắc";
      }
      else{
        return " ";
      }
    },

    xetChucVu: function () {
      switch (chucVu) {
        case 3:
          return "Sếp";
        case 2:
          return "Trưởng phòng";
        case 1:
          return "Nhân viên";
        case 0:
          return " Chưa chọn chức vụ ";
      }
    },
  };

  return nv;
}


