import {assert} from 'chai';
import herokuappAPI from '$root/page/herokuapp.api';
import * as data from '$root/data/booking.data';

describe('Updating booking', () => {
    it.only('Update booking using valid data successfully', async() => {
        const response = await herokuappAPI.update_booking(data.VALID_BOOKING);

        assert.equal(response.status, 200);
        assert.equal(response.data.firstname, "Argavi")
    })
})