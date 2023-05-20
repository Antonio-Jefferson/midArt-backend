import { userProps } from '../@types';
import prisma from '../configs/database.connection';

const createUser = async ({ name, email, password }: userProps) => {
  return await prisma.users.create({
    data: {
      username: name,
      email: email,
      password: password,
      profile_image: 'https://www.prosesc.org.br/files/depoimentos/1586969992913_perfilsemfoto.jpg',
      cover_image: 'https://optclean.com.br/wp-content/uploads/2016/11/capa-para-facebook99.jpg'
    }
  });
};

const findByUserEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email: email
    }
  });
};

export default {
  createUser,
  findByUserEmail
};
