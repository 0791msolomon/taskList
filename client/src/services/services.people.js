import axios from "axios";
import { truncate } from "fs";
let baseUrl = "http://localhost:3001/api/";

export function addPerson(data) {
  let url = `${baseUrl}people`;
  const config = {
    url: url,
    method: "POST",
    withCredentials: true,
    data: data
  };
  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

export function getAll() {
  let url = `${baseUrl}people`;
  let config = {
    url: url,
    method: "GET",
    withCredentials: true
  };
  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}
export function findPerson(person) {
  let url = `${baseUrl}people/find/?name=${person}`;
  const config = {
    url: url,
    method: "GET",
    withCredentials: true
  };
  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}
export function createTask(id, task) {
  let url = `${baseUrl}/people/${id}`;
  const config = {
    url: url,
    data: task,
    method: "PUT",
    withCredentials: true
  };
  return axios(url, config)
    .then(responseSuccessHandler)
    .catch(responseErrorHandler);
}

const responseSuccessHandler = response => {
  return response.data;
};

const responseErrorHandler = error => {
  return Promise.reject(error);
};
