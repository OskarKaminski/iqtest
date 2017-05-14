export default [{
    number: 1,
    type: 'list',
    question: {
        ctx: '2, 4, 6, 8,',
        text: 'What is the next number?'
    },
    options: [
        {label: 9},
        {label: 10},
        {label: 12},
        {label: 8}
    ],
    answer: 2
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
        question: {
            ctx: '2, 4, 6, 8,',
            text: 'What is the next number?'
        },
        options: [
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
        options: [
            {label: 40},
            {label: 20},
            {label: 33},
            {label: 54}
        ]
    }]