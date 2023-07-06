import BaseAPI from '$root/page/base.api';

const herokuappAPI = {
    creating_booking: (data) => BaseAPI.post('/booking', data),
    booking_detail: () => BaseAPI.get('/booking/2'),
    list_booking: (param) => BaseAPI.get(`/booking?${param}`),
    update_booking: (data) => BaseAPI.put('/booking/2', data),
    delete_booking: () => BaseAPI.delete(`booking/${bookingId}`)
}

export default herokuappAPI;