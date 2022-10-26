import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/restaurants`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {})
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (restaurantData) => {
  try {
    const formattedData = {
      name: restaurantData.name,
      location:{
        latitude: restaurantData.latitude,
        longitude: restaurantData.longitude
      },
      website: restaurantData.website,
      cuisineType: restaurantData.cuisineType,
      tags: restaurantData.tags,
    }

    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formattedData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: { "Authorization": `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createRating = async (id, ratingData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ratingData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export{
  index,
  create,
  show,
  createRating,
}