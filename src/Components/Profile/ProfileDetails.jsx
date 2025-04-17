import React, { useRef, useState } from "react";
import { FiCamera, FiMail, FiUser, FiEdit3, FiSave } from "react-icons/fi";
import { BsGenderAmbiguous, BsCalendar2Date } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/userSlice";
import { showNotification } from "../../util/notification";
import { setCurrentUser } from "../../redux/authSlice";

const ProfileDetails = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);
  const { currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(null); // File tạm thời
  const [formData, setFormData] = useState({
    name: user?.name || "",
    sex: user?.sex || "",
    birthday: user?.birthday
      ? new Date(user.birthday).toISOString().split("T")[0]
      : "",
    preview: user?.avatar?.url || "", // Hiển thị ảnh
  });
  //to show the birthday in the format dd/mm/yyyy
  const birthday = user?.birthday
    ? new Date(user.birthday).toLocaleDateString("vi-VN")
    : "";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedAvatar(file);
      setFormData({
        ...formData,
        preview: URL.createObjectURL(file), // Xem trước
      });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataForUpload = new FormData();
    formDataForUpload.append("name", formData.name);
    formDataForUpload.append("sex", formData.sex);
    formDataForUpload.append("birthday", formData.birthday);
    if (selectedAvatar) {
      formDataForUpload.append("avatar", selectedAvatar);
    }

    // Dispatch API update
    const updateUserPromise = dispatch(
      updateUser({ userId: user._id, formData: formDataForUpload })
    ).unwrap();

    showNotification.promise(updateUserPromise, {
      loading: "Đang cập nhật...",
      success: "Cập nhật thành công!",
      error: "Cập nhật thất bại!",
    });

    const updatedUser = await updateUserPromise;

    dispatch(setCurrentUser({ ...currentUser, avatar: updatedUser.avatar })); // Cập nhật lại Redux
    setIsEditing(false);
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      // Khi bấm huỷ, trả lại avatar cũ
      setFormData({
        ...formData,
        preview: user?.avatar || "",
      });
      setSelectedAvatar(null);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile Details</h2>
        <button
          onClick={handleToggleEdit}
          className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isEditing ? "bg-gray-100 text-gray-700" : "bg-blue-500 text-white"
          }`}
        >
          <FiEdit3 className="w-4 h-4 mr-2" />
          {isEditing ? "Huỷ" : "Sửa hồ sơ"}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0">
          <div className="relative w-32 h-32">
            {formData.preview ? (
              <img
                src={formData.preview}
                alt={user?.name}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-green-100 flex items-center justify-center rounded-full">
                <span className="text-green-600 font-medium text-sm">
                  {user?.name?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
            )}

            {isEditing && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
                >
                  <FiCamera className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="flex-grow space-y-4">
          {isEditing ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tên người dùng
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email (Không thể thay đổi)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user?.email || ""}
                    readOnly
                    className="bg-gray-100 w-full px-3 py-2 rounded-lg border border-gray-300 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Giới tính
                  </label>
                  <select
                    name="sex"
                    value={formData.sex || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ngày sinh
                  </label>
                  <input
                    type="date"
                    name="birthday"
                    value={formData.birthday || ""}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  <FiSave className="w-4 h-4 mr-2" />
                  Lưu thay đổi
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FiUser className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Tên người dùng</p>
                    <p className="font-medium">{user?.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FiMail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BsGenderAmbiguous className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Giới tính</p>
                    <p className="font-medium">
                      {user?.sex || "chưa có cập nhật"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BsCalendar2Date className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Ngày sinh</p>
                    <p className="font-medium">
                      {birthday || "chưa có cập nhật"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
