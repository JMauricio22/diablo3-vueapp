import axios from 'axios'

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

export function getToken () {
  const form = new FormData()
  form.append('grant_type', 'client_credentials')
  const config = {
    headers: {
      'Content-type': 'multipart/form-data'
    },
    auth: {
      username: clientId,
      password: clientSecret
    }
  }

  return axios.post(API_URL, form, config)
}
