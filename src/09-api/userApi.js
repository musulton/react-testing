import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users';

export const getNameCollection = () => axios.get(url).then(({ data }) => data.map(user => user.name));
