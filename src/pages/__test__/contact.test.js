import { isEmpty, charactersOnly, validEmailFormat } from '../../utils/utils'

test('Field is empty: isEmpty Fn', () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty(" ")).toBe(true);
    expect(isEmpty("")).toBeTruthy();
    expect(isEmpty(" ")).toBeTruthy();
    expect(isEmpty("")).not.toBeFalsy();
    expect(isEmpty(" ")).not.toBeFalsy();
    expect(isEmpty("")).not.toBeUndefined();
    expect(isEmpty("")).not.toBeNull();
})

test('Field is null: isEmpty Fn', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(null)).not.toBeFalsy();
    expect(isEmpty(null)).not.toBeUndefined();
    expect(isEmpty(null)).not.toBeNull();
})

test('Field is not empty: isEmpty Fn', () => {
    expect(isEmpty("hello")).toBe(false);
    expect(isEmpty("Dana Scully")).toBe(false);
    expect(isEmpty("Ellen Ripley")).toBe(false);
    expect(isEmpty("dana.scully@fbi.com")).toBe(false);
    expect(isEmpty("ripley@nostromo.com")).toBe(false);
    expect(isEmpty("12345")).toBe(false);
    expect(isEmpty("true")).toBe(false);
    expect(isEmpty("false")).toBe(false);
    expect(isEmpty("Hello there, I'd like to enquire about partnering with you. We're a small ISP looking for a new router solution. Look forward to hearing from you!")).toBe(false);
    expect(isEmpty("Hello there, I'd like to enquire about partnering with you. We're a small ISP looking for a new router solution. Look forward to hearing from you!")).not.toBeTruthy();
    expect(isEmpty("Dana Scully")).toBeFalsy();
    expect(isEmpty("Ellen Ripley")).not.toBeUndefined();
    expect(isEmpty("Full Name")).not.toBeNull();
})

test('Field has characters: charactersOnly Fn', () => {
    expect(charactersOnly("hello")).toBe(true);
    expect(charactersOnly("Dana Scully")).toBe(true);
    expect(charactersOnly("Ellen Ripley")).toBe(true);
    expect(charactersOnly("Dr. Strange")).toBe(true);
    expect(charactersOnly("Bucky O'Hare")).toBe(true);
    expect(charactersOnly("Dr. Strange")).toBe(true);
    expect(charactersOnly("Helena Bonham-Carter")).toBeTruthy();
    expect(charactersOnly("Bucky O'Hare")).not.toBeFalsy();
    expect(charactersOnly("Dana Scully")).not.toBeUndefined();
    expect(charactersOnly("Ellen Ripley")).not.toBeNull();
    expect('Dana').toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Dana Scully').toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Dr. Strange').toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Bucky O\'Hare').toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Helena Bonham-Carter').toMatch(/^[a-zA-Z\s-'.]+$/);
})

test('Field has invalid characters: charactersOnly Fn', () => {
    expect(charactersOnly("hell0")).toBe(false);
    expect(charactersOnly("D4n4 5cu11y")).toBe(false);
    expect(charactersOnly("Ellen Rip!ey")).toBe(false);
    expect(charactersOnly("Dr, Strange")).toBe(false);
    expect(charactersOnly("Bucky O_Hare")).toBe(false);
    expect(charactersOnly("@Dr Strange")).toBe(false);
    expect(charactersOnly("123456")).not.toBeTruthy();
    expect(charactersOnly("!£$%^&*(_+)=")).toBeFalsy();
    expect(charactersOnly("[]{};:@#~|<>?/")).toBeFalsy();
    expect(charactersOnly("D4n4 5cu11y")).not.toBeUndefined();
    expect(charactersOnly("Ellen Ripley!")).not.toBeNull();
    expect('D4n4').not.toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('123456').not.toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Dr, Strange').not.toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Bucky O_Hare').not.toMatch(/^[a-zA-Z\s-'.]+$/);
    expect('Helena: Bonham__Carter').not.toMatch(/^[a-zA-Z\s-'.]+$/);
})

test('Field has email address format: validEmailFormat Fn', () => {
    expect(validEmailFormat("hello@hello.com")).toBe(true);
    expect(validEmailFormat("dana.scully@fbi.com")).toBe(true);
    expect(validEmailFormat("ellen_ripley@nostromo.com")).toBe(true);
    expect(validEmailFormat("bucky_O-Hare@space.co")).toBe(true);
    expect(validEmailFormat("dr_strange@avengers.world")).toBe(true);
    expect(validEmailFormat("doctor@who.co.uk")).toBe(true);
    expect(validEmailFormat("123456@email.org.co.uk")).toBeTruthy();
    expect(validEmailFormat("123456@123456.com")).not.toBeFalsy();
    expect(validEmailFormat("dana.scully@fbi.com")).not.toBeUndefined();
    expect(validEmailFormat("ellen_ripley@nostromo.com")).not.toBeNull();
    expect('hello@hello.com').toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('dana.scully@fbiagent.com').toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('123456@123456.com').toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('123456@email.org.co.uk').toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('ellen__ripley@nostromo.com').toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
})

test('Field has invalid email address format: validEmailFormat Fn', () => {
    expect(validEmailFormat("dr_strange@avengers")).toBe(false);
    expect(validEmailFormat("dana.scully@fbi")).toBe(false);
    expect(validEmailFormat("123456.org.co.uk")).not.toBeTruthy();
    expect(validEmailFormat("127.0.0.2.com")).toBeFalsy();
    expect(validEmailFormat("dana.scully@fbi")).not.toBeUndefined();
    expect(validEmailFormat("ellen_ripleynostromo.com")).not.toBeNull();
    expect('dr_strange@avengers').not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('dana.scully@fbi').not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('123456.org.co.uk').not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    expect('dana.scully@fbi').not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
})