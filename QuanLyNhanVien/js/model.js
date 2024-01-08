function NhanVien( tk, name, email, pass, date, luong, chucVu, gioLam) {
  this.tk = tk;
  this.name = name;
  this.email = email;
  this.pass = pass;
  this.date = date;
  this.luong = luong;
  this.chucVu = chucVu;
  this.gioLam = gioLam;
  this.tinhTongLuong = function () {
    return luong * chucVu;
  };
this.tinhXepLoai = function () {
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
    };
    this.xetChucVu = function () {
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
    };
}
