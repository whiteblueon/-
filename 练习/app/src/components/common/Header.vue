<template>
    <div>
        <div class="header display-1" :style="{'background':bg}">
            <span class="header-index">
                首页
            </span>
            <span class="header-title">
                {{title}}
            </span>
            <span class="header-space"></span>
        </div>
    </div>
</template>

<script>
    export default {
    props: ["title","bg"]
    };
</script>

<style scoped>
    .display-1{
        display: flex;   
    }
    .header {
        height: 1rem;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .header-index {
        font-size: 0.3rem;
        line-height: 1rem;
        width: 1rem;
        text-indent: .2rem;
    }
    .header-title {
        font-size: 0.5rem;
        flex-grow: 1;
        text-align: center;
        font-weight: 700;
        line-height: 1rem;
    }
    .header-space{
        width: 1rem;
    }
</style>