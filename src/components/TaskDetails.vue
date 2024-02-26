<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div >
            <a class="aa1">&#10060;</a>
            <a class="aa2">&#9829;</a>

        </div>

    </div>
</template>
<script >

export default {
    props:['task']
}

</script>

<style>
div{
    
    height:100px;
}
.aa1{
    width:40px;
    height:100px;
}
.aa2{
    width:40px;
    height:100px;
    margin:40px

}

</style>