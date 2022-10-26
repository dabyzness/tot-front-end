import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getProfile(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function follow(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}


export { 
  getAllProfiles,
  getProfile,
  follow
}
