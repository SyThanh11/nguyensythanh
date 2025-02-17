import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class UserModel {
    async create(user) {
        return await prisma.user.create({
            data: user,
        });
    }
    async findById(id) {
        return await prisma.user.findUnique({ where: { id } });
    }
    async findAll() {
        return await prisma.user.findMany();
    }
    async update(id, data) {
        return await prisma.user.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        return await prisma.user.delete({ where: { id } });
    }
    async existsById(id) {
        const user = await prisma.user.findUnique({ where: { id } });
        return user !== null;
    }
    async existsByEmail(email) {
        const user = await prisma.user.findUnique({ where: { email } });
        return user !== null;
    }
}
export default UserModel;
