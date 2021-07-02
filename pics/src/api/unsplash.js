import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7ivPvPMOX0F950vwcjSlcZb_YmNFDqK_81_1yKhNG4o'
  }
})
