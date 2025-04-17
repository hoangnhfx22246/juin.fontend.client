import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.auth); // lấy thông tin người dùng từ redux store
  const location = useLocation(); // lấy thông tin đường dẫn hiện tại
  const navigate = useNavigate(); // dùng để điều hướng đến trang khác

  useEffect(() => {
    if (!currentUser) {
      // Nếu không có người dùng hiện tại (chưa đăng nhập)
      // điều hướng đến trang đăng nhập
      // và truyền thông tin đường dẫn hiện tại để quay lại sau khi đăng nhập
      navigate("/login", { state: { from: location }, replace: true });
    }
  }, [currentUser, location, navigate]);

  return currentUser ? <Outlet /> : null; // nếu có người dùng hiện tại thì hiển thị nội dung của Outlet (các route con), ngược lại trả về null (không hiển thị gì)
}
