import {testCases} from './testCases';

describe('testCases', () => {

    it(`SET_ANSWER action adds an answer to a test case`, () => {
        const input = [
            {number: 1},
            {number: 2}]
        const output = [
            {number: 1},
            {number: 2, answer: 15}]
        const action = {
            type: 'SET_ANSWER',
            number: 2,
            answer: 15
        }
        expect(testCases(input, action)).toEqual(output);
    });

});