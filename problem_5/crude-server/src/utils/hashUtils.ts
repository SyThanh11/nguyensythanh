import bcrypt from "bcryptjs";

const saltRounds = 10;

/**
 * Mã hóa mật khẩu
 * @param password Chuỗi mật khẩu cần mã hóa
 * @returns Mật khẩu đã mã hóa
 */
export const hashPassword = (password: string): string => {
    return bcrypt.hashSync(password, saltRounds);
};

/**
 * Kiểm tra mật khẩu với hash
 * @param password Mật khẩu người dùng nhập
 * @param hash Mật khẩu đã mã hóa
 * @returns `true` nếu khớp, ngược lại `false`
 */
export const comparePassword = (password: string, hash: string): boolean => {
    return bcrypt.compareSync(password, hash);
};
