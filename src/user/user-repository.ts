import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

    async getUser() {
        return await this.find();
    }

    async postUser(payload) {
        return await this.save(payload);
    }

    async putUser(payload, id) {
        await this.findOneOrFail(id);
        await this.update(id, payload);
        return await this.findOne(id);
    }

    async deleteUser(id) {
        return await this.delete(id);
    }
}