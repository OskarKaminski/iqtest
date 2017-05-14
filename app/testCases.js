export default [{
    number: 1,
    type: 'list',
    question: {
        ctx: '2, 4, 6, 8,',
        text: 'What is the next number?'
    },
    options: [9, 10, 12, 8],
    answer: 9
},
    {
        number: 2,
        type: 'puzzle',
        question: {
            text: 'What number replaces the question mark?'
        },
        options: {
            top: 39,
            left: 13,
            right: 2,
            bottom: 6
        }
    },
    {
        number: 3,
        type: 'list',
        question: {
            ctx: '3, 5, 9, 17,',
            text: 'What is the next number?'
        },
        options: [21, 27, 33, 40]
    }]