import faker from 'faker';

import Payment from '../models/Payment';

const PAYMENTS_TOTAL = 10;

export default async () => {
    try {
        await Payment.remove();

        await Array.from({
            length: PAYMENTS_TOTAL
        }).forEach(async () => {
            await Payment.create({
                text: faker.lorem.paragraphs(1),
            })
        });
    } catch (error) {
        throw error;
    }
}