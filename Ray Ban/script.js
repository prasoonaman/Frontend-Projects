const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
Shery.imageEffect("#bgimgs", {
    style: 5, 
    config:{
        "a":{"value":0.92,"range":[0,30]},
        "b":{"value":-0.97,"range":[-1,1]},
        "zindex":{"value":-9996999,"range":[-9999999,9999999]},
        "aspect":{"value":1.7695037840802106},
        "ignoreShapeAspect":{"value":true},
        "shapePosition":{"value":{"x":0,"y":0}},
        "shapeScale":{"value":{"x":0.5,"y":0.5}},
        "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
        "shapeRadius":{"value":0,"range":[0,2]},
        "currentScroll":{"value":0},
        "scrollLerp":{"value":0.07},
        "gooey":{"value":true},
        "infiniteGooey":{"value":true},
        "growSize":{"value":3,"range":[1,15]},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1.5,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},
        "masker":{"value":true},
        "maskVal":{"value":1.03,"range":[1,5]},
        "scrollType":{"value":0},
        "geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":true},
        "onMouse":{"value":0},
        "noise_speed":{"value":0.53,"range":[0,10]},
        "metaball":{"value":0.12,"range":[0,2],"_gsap":{"id":3}},
        "discard_threshold":{"value":0.31,"range":[0,1]},
        "antialias_threshold":{"value":0.01,"range":[0,0.1]},
        "noise_height":{"value":0.31,"range":[0,2]},
        "noise_scale":{"value":23.66,"range":[0,100]}
    },
    gooey: true
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function(elem){


var i=0;
var animating = false;
var h1= elem.querySelectorAll("h1");
document.querySelector("#main").addEventListener("click",function(){
    if(!animating){
        animating = true;
        gsap.to(h1[i],{
            top:"-=100%",
            duration:1,
            delay:-0.2,
            ease:Expo.easeInOut,
            onComplete: function(){
            gsap.set(this._targets[0],{top:"100%"})
            animating = false;
            },
        })

        i === h1.length-1 ? (i=0) : i++;

        gsap.to(h1[i],{
            top:"-=100%",
            duration:1,
            ease:Expo.easeInOut,
        })
    }

})

})


