const app = new Vue({
    el: "#app",
    created(){
       this.autoSkip();
    },
    data: {
        img:[
            'https://cdn.pixabay.com/photo/2015/03/26/09/40/keyboard-690066__340.jpg',
            'https://cdn.pixabay.com/photo/2014/03/25/23/04/technology-298256__340.jpg',
            'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
            'https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758__340.jpg',
            'https://cdn.pixabay.com/photo/2016/12/29/12/27/cyber-glasses-1938449__340.jpg',
            'https://cdn.pixabay.com/photo/2018/08/10/15/43/woman-3597095__340.jpg',
            'https://cdn.pixabay.com/photo/2018/06/17/09/19/cyber-security-3480163__340.jpg',
            'https://cdn.pixabay.com/photo/2020/04/24/20/27/computer-5088593__340.jpg',
        ],
        index: 0,
        skip: 0,
    },
    methods: {
        skipNext(){
            this.index ++;
            if(this.index > this.img.length -1){
                this.index = 0;
            }
        },
        skipPrev(){
            this.index --;
            if(this.index < 0){
                this.index = this.img.length -1;
            }
        },
        selector(i){
            this.index = i;
        },
        autoSkip(){
            this.skip = setInterval(()=>{
                this.skipNext();
            }, 3000)
            this.$refs.slider.blur();
        },
        breakAutoSkip(){
            clearInterval(this.skip)
            this.$refs.slider.focus();
        },
    },
// END VUE APP
})