import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'anraku',
        password: 'password',
        mail: 'anraku@anraku.com',
        reset_url: 'https://anraku/reset',
        created_at: '2022-10-28 22:50:14.611',
        updated_at: '2022-10-28 22:50:14.611',
      },
      {
        id: 2,
        name: 'sasao',
        password: 'password',
        mail: 'sasao@sasao.com',
        reset_url: 'https://sasao/reset',
        created_at: '2022-10-28 22:50:14.611',
        updated_at: '2022-10-28 22:50:14.611',
      },
      {
        id: 3,
        name: 'murasato',
        password: 'password',
        mail: 'murasato@murasato.com',
        reset_url: 'https://murasato/reset',
        created_at: '2022-10-28 22:50:14.611',
        updated_at: '2022-10-28 22:50:14.611',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
