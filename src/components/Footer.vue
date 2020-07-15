<template>
    <div class="footer" ref="footer">
        <div>
            <f-a-i :icon="['fal','copyright']" />
            Yords
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';
.footer {
    height: 50px;
    width: auto;
    box-shadow: 0px -1px 1px 0px $dark;
    margin-top: 20px;
    display:flex;
    justify-content: center;
    align-items: center;
}

</style>

