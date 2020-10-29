import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository'


@Injectable()
export class UserService {
    constructor(
        private readonly repository: UserRepository
    ) { }

    async getUser() {
        return await this.repository.getUser()
    }

    async postUser(payload) {
        return await this.repository.postUser(payload)
    }

    async putUser(payload, id: number) {
        return await this.repository.putUser(payload, id)
    }

    async deleteUser(id: number) {
        return await this.repository.deleteUser(id)
    }
}