import axios from 'axios';

const Token = () => {
  const csrfToken = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
}

export default Token

// const token = document.querySelector('[name="csrf-token"]') || {content: 'no-csrf-token'}
// const ax = axios.create({
//   headers: {
//     common: {
//       'X-CSRF-Token': token.content
//     }
//   }
// })

// export default ax