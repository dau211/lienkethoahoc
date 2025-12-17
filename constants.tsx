import { 
  FileText, 
  Youtube, 
  Github, 
  Mail, 
  Facebook, 
  FlaskConical, 
  Atom, 
  BookOpen, 
  Microscope 
} from 'lucide-react';
import { LinkItem } from './types';

// ==========================================
// CẤU HÌNH BANNER (ẢNH BÌA & CHỮ)
// ==========================================
export const BANNER_CONFIG = {
  // Nhập tiêu đề lớn hiển thị trên Banner
  title: "MÔ PHỎNG 3D CÁC LIÊN KẾT",
    // Nhập dòng mô tả nhỏ bên dưới tiêu đề
  subtitle: "Khám phá kiến thức hóa học cùng 3D/VR và AI",
  
  // Đường dẫn ảnh nền Banner (Nên chọn ảnh tối hoặc đơn giản để nổi bật chữ)
  backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzTznJ6TmIkoBxK6oYsOwr7eJAlvNXGh0t6w&s" 
};

// ==========================================
// DANH SÁCH LIÊN KẾT
// ==========================================
// Hướng dẫn đổi màu: Thêm thuộc tính color: 'ten_mau'
// Các màu hỗ trợ: 'teal', 'blue', 'indigo', 'rose', 'amber', 'emerald', 'violet', 'sky'

export const LINKS: LinkItem[] = [
  { 
    id: '1', 
    label: 'Mô phỏng liên kết ion Na và Cl', 
    url: 'https://hoahocabc.github.io/mo_phong_tao_lien_ket_ion_NaCl/', 
    icon: FlaskConical,
    color: 'emerald' // Xanh lá cây
  },
  { 
    id: '2', 
    label: 'Mô phỏng liên kết ion Na và O', 
    url: 'https://hoahocabc.github.io/mo_phong_tao_lien_ket_ion_Na2O/', 
    icon: FlaskConical,
    color: 'rose' // Đỏ hồng (phù hợp Youtube)
  },
  { 
    id: '3', 
    label: 'Mô phỏng liên kết ion Mg và Cl', 
    url: 'https://hoahocabc.github.io/mo_phong_tao_lien_ket_ion_MgCl2/', 
    icon: FlaskConical,
    color: 'indigo' // Xanh tím đậm
  },
  { 
    id: '4', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử Cl₂', 
    url: 'https://hoahocabc.github.io/Mo_phong_tao_lien_ket_cong_hoa_tri_Cl2/', 
    icon: FlaskConical,
    color: 'blue' // Xanh dương (Facebook)
  },
  { 
    id: '5', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử HCl', 
    url: 'https://hoahocabc.github.io/Mo_phong_tao_lien_ket_cong_hoa_tri_HCl/', 
    icon: FlaskConical,
    color: 'amber' // Vàng cam
  },
  { 
    id: '6', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử NH3', 
    url: 'https://hoahocabc.github.io/mo_phong_tao_lien_ket_ion_NaCl/', 
    icon: FlaskConical,
    color: 'emerald' // Xanh lá cây
  },
  { 
    id: '7', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử O2', 
    url: 'https://hoahocabc.github.io/Mo_phong_tao_lien_ket_cong_hoa_tri_O2/', 
    icon: FlaskConical,
    color: 'rose' // Đỏ hồng (phù hợp Youtube)
  },
  { 
    id: '8', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử N2', 
    url: 'https://hoahocabc.github.io/Mo_phong_tao_lien_ket_cong_hoa_tri_N2/', 
    icon: FlaskConical,
    color: 'indigo' // Xanh tím đậm
  },
  { 
    id: '9', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử CO2', 
    url: 'https://hoahocabc.github.io/Mo_phong_tao_lien_ket_cong_hoa_tri_CO2/', 
    icon: FlaskConical,
    color: 'blue' // Xanh dương (Facebook)
  },
  { 
    id: '10', 
    label: 'Mô phỏng tạo liên kết cộng hoá trị trong phân tử H2O', 
    url: 'https://hoahocabc.github.io/mo_phong_tao_lien_ket_cong_hoa_tri_H2O/', 
    icon: FlaskConical,
    color: 'amber' // Vàng cam
  },
];