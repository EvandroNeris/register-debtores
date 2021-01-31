import api from './api';

const uuid = 'effd6407-7382-4274-85b8-5996254119b4';

const getUser = async (): Promise<any> => {
  const { data } = await api.get(`/users?key=${uuid}`);
  return data;
};

const deleteUser = async (id: number): Promise<any> => {
  return await api.delete(`/users/${id}?key=${uuid}`);
}

export {
  getUser,
  deleteUser
}
