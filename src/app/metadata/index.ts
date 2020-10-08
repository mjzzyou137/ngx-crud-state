import { Metadata, HttpRequestMethod } from 'ngx-crud-state';

const baseUrl = 'https://movie0706.cybersoft.edu.vn/api';

export const metadata: Metadata = {
  user: {
    entityName: 'user'
  },

  movie: {
    entityName: 'movie',
    primaryKey: 'maPhim',
    getItems: {
      url: `${baseUrl}/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`
    },
    getItem: {
      url: `${baseUrl}/QuanLyPhim/LayThongTinPhim?MaPhim={maPhim}`
    }
  },

  userLogin: {
    entityName: 'userLogin',
    loadState: {
      url: `${baseUrl}/QuanLyNguoiDung/DangNhap`,
      method: HttpRequestMethod.POST
    }
  }
};
