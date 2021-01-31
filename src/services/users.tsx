import api from './api';

const uuid = 'effd6407-7382-4274-85b8-5996254119b4';

const get = async () => {
  const { data } = await api.get(`/users?key=${uuid}`);
  console.log(data)
  return data;
};

export {
  get
}
