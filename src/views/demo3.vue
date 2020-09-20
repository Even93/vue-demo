<template>
    <div>
        <div v-for="(item,index) in arr" :key="index">
            <span>{{obj[item]}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:['label1','label2','label3','label4',],
            obj:{ //后台获取的数据
                label1:'aaa',
                label2:'bbb',
                label3:'ccc',
                label4:'ddd',
                label5:'eee',
            }
        };
    },
    created() {

    },
    mounted() {
        // this.deepCopy()
        // this.deepCopy2()
    },
    methods: {
        deepCopy(){ //无论赋值还是取值都可以参考
            var newObj={}
            for(let key in this.obj){
                newObj[key]=this.obj[key]
            }
            console.log(newObj,'新对象')
            newObj.label1='我改了'
            console.log(this.obj,'1')
            console.log(newObj,'2')
        },
        // deepCopy2(){ //深克隆
        //    var newObj=JSON.parse(JSON.stringify(this.obj))
        //     console.log(newObj,'新对象')
        //     newObj.label1='我改了'
        //     console.log(this.obj,'1')
        //     console.log(newObj,'2')
        // },
        msg(){
             if(arr.length>=1){
                var flag = this.arr.some((item)=>{item.code==this.form.code}) //如果存在则返回true，一直找到最后一个
                if(!flag){//代表没找到
                    this.arr.push(this.form)
                }
            }else{
                this.arr.push(this.form)
            }
        }
       
    }
};
</script>

<style scoped lang="less">

</style>
