import Mock from 'mockjs'

// let Random = Mock.Random
const data = Mock.mock({
    'lists|50': [{
        'id|+1': 1,
        'name': '@cname',
        'email': '@email',
        'birthday': '@date',
    }]
})

export default data