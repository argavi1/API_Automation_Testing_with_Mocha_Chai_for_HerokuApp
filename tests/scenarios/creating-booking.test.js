import {assert} from 'chai';
import herokuappAPI from '$root/page/herokuapp.api';
import * as data from '$root/data/booking.data';

describe('Creating booking', () => {
    it('Creating booking successfully with valid data', async() => {
        const response = await herokuappAPI.creating_booking(data.VALID_BOOKING);

        assert.equal(response.status, 200);
        assert.equal(response.data.booking.firstname, "Argavi")
    })
})