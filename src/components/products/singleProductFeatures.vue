<template>
    <div class="flex-container flex-dir-column align-self-top detail-view">
        <h4>{{productName}} features:</h4>
        <ul class="flex-container flex-dir-column align-self-top details-list" >
            <li class="list-element" v-for="(feature, index) in features">{{feature}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'single-product-features',
    props:['features', 'productName']
}
</script>