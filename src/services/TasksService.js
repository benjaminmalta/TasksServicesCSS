import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/benjaminmalta/MyJSONServerCSS',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks (perPage, page) {
    return apiClient.get('/tasks?_limit=' + perPage + '&_page=' + page)
  },
  getTask (id) {
    return apiClient.get('/tasks/' + id)
  }
}
