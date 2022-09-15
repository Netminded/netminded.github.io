import { isEmpty } from '../../utils/utils'

test('Field is Empty Fn', () => {
    expect(isEmpty("")).toBe(true);
})