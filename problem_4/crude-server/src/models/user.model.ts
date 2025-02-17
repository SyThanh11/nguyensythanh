import { PrismaClient } from "@prisma/client";
import { IUser } from "../interface/user.interface.js";

const prisma = new PrismaClient();

class UserModel {
    async create(user: Omit<IUser, "id" | "createdAt" | "updatedAt">): Promise<IUser> {
        return await prisma.user.create({
          data: user,
        });
    }

    async findById(id: number): Promise<IUser | null> {
        return await prisma.user.findUnique({ where: { id } });
    }

    async findAll(): Promise<IUser[]> {
        return await prisma.user.findMany();
    }

    async update(id: number, data: Partial<IUser>): Promise<IUser> {
        return await prisma.user.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<IUser> {
        return await prisma.user.delete({ where: { id } });
    }

    async existsById(id: number): Promise<boolean> {
        const user = await prisma.user.findUnique({ where: { id } });
        return user !== null;
    }

    async existsByEmail(email: string): Promise<boolean> {
        const user = await prisma.user.findUnique({ where: { email } });
        return user!== null;
    }
}

export default UserModel;