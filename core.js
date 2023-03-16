
let tasks =[ {
    "title": 'todo',
    },
    {
        "title":'gfddfg'
    },
    {
        "title":"fdsfdf"
    },
    {
        "title":"gdfgdfg"
    },
]


for(i in tasks){
    document.write(`
    <ul id="myUL">
    <li>${tasks[i].title}</li>
    </ul>`)
}