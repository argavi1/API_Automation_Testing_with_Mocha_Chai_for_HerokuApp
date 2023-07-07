import {assert} from 'chai';
import herokuappAPI from '$root/page/herokuapp.api';
import * as data from '$root/data/booking.data';

describe('Deleting booking', () => {
    it('Delete booking successfully', async() => {
        // Creating booking first
        const responseCreate = await herokuappAPI.creating_booking(data.VALID_BOOKING);
        const bookingId = responseCreate.data.bookingid

        // Deleting booking
        const responseDel = await herokuappAPI.delete_booking(bookingId);

        assert.equal(responseDel.status, 201);
    }).timeout(5000)
})