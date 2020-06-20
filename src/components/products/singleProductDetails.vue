<template>
    <div class="flex-container flex-dir-column align-self-top">
        <p class="cell small-4">{{details}}</p>
    </div>
</template>

<script>
export default {
    name: 'single-product-details',
    props: ['details']
}
</script>