import axios from 'axios';
const API_ROOT = '/api/';

export const fetchProjects = (categoryId = null) => {
  const url = categoryId
    ? `${API_ROOT}projects/?categories=${categoryId}`
    : `${API_ROOT}projects/`;
  return axios.get(url);
};

export const fetchCategories = () => axios.get(`${API_ROOT}categories/`);
