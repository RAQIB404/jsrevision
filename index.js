var student ={
    name:'raqib',
    age:'20',
    mobile:9353029559,
    address:{
        city:'chikmaglur',
        state:'KA',
        pin:577548
    }
}

console.log(student.name)
console.log(student['name'])

console.log(student.address.state)
console.log(student['address']['state'])


var vedio={
    name:'tutorials',
    play:function(){
        console.log('vedio played')
    },
    timer:[0,40,80]
}

console.log(vedio.name)
console.log(vedio.play())
console.log(video.timer)