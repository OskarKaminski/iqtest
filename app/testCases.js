export default [{
    number: 1,
    type: 'list',
    question: {
        ctx: '2, 4, 6, 8,',
        text: 'What is the next number?'
    },
    answers: [
        {label: 9},
        {label: 10},
        {label: 12},
        {label: 8}
    ]
},
    {
        number: 2,
        type: 'puzzle',
        question: {
            text: 'What number replaces the question mark?'
        },
        answers: {
            one: 3,
            two: 8,
            three: 19,
            four: 4
        }
    },
    {
        number: 3,
        question: {
            ctx: '2, 4, 6, 8,',
            text: 'What is the next number?'
        },
        answers: [
            {label: 9},
            {label: 10},
            {label: 12},
            {label: 8}
        ]
    },
    {
        number: 3,
        question: {
            ctx: '3, 5, 9, 17,',
            text: 'What is the next number?'
        },
        answers: [
            {label: 40},
            {label: 20},
            {label: 33},
            {label: 54}
        ]
    }]