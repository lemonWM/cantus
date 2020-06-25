<template>
    <div>  
        <div>
            <h2>Where would you like this order delivered?</h2>
        </div> 
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <input type="text" placeholder="FIRST NAME">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="LAST NAME">
                    </div>
                     <div class="medium-12 cell">
                        <input type="text" placeholder="STREET ADDRESS">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="ZIP">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="CITY">
                    </div>
                    <div class="medium-4 cell">
                        <input type="text" placeholder="STATE">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="DELIVERY PHONE">
                    </div>
                    <div class="medium-6 cell">
                        <input type="text" placeholder="EMAIL ADDRESS">
                    </div>
                </div>
            </div>
        </form>
        <div>
            <div>
                <h3>Select a shipping speed</h3>
            </div>
            <div>
                <form>
                    <label for="standard">
                        <input type="radio" value="standard" id="standard" v-model="shippingSpeed">
                        Standard - within 5 Business Days (after shipping): $0.00
                    </label>
                     <label for="business">
                        <input type="radio" value="business" id="business" v-model="shippingSpeed">
                        Business - within 5 Business Days (after shipping): $50.00
                    </label>
                     <label for="premium">
                        <input type="radio" value="premium" id="premium" v-model="shippingSpeed">
                        Premium - next Business Day (after shipping): $70.00
                    </label>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'order-delivery',
    data() {
        return {
            shippingSpeed: ''
        }
    }
}
</script>