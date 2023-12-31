import {assert, expect} from 'chai';
import herokuappAPI from '$root/page/herokuapp.api';
import * as data from '$root/data/booking.data';
import { getParams } from '$root/helper/lib-api';


describe('Get booking', () => {
    it('Get booking by id successfully', async() => {
        const response = await herokuappAPI.booking_detail();

        assert.equal(response.status, 200);
        assert.equal(response.data.firstname, "Josh");
        assert.equal(response.data.lastname, "Allen")

    })

    it('Get list booking filtered by checkin & checkout successfully', async() => {
        const param = getParams(data.LIST_BOOKING_PARAM);
        const response = await herokuappAPI.list_booking(param);

        assert.equal(response.status, 200);

    })
})