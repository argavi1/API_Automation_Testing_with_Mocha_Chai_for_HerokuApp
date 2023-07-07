import BaseAPI from '$root/page/base.api';
import BaseAPIAuth from '$root/page/base.api.auth';
import BaseAPICookie from '$root/page/base.api.cookie';


const herokuappAPI = {
    creating_booking: (data) => BaseAPI.post('/booking', data),
    booking_detail: () => BaseAPI.get('/booking/58'),
    list_booking: (param) => BaseAPI.get(`/booking?${param}`),
    update_booking: (data) => BaseAPIAuth.put('/booking/2', data),
    delete_booking: (bookingId) => BaseAPICookie.delete(`/booking/${bookingId}`)
}

export default herokuappAPI;