<template>
    <div class="user-panel-profile">
        <div v-if="user.orders">
            <div class="grid-container">
                <div>
                    <h2 class="title">User information</h2>
                </div>
                <div class="row information-wrapper">
                    <div class="columns medium-4">
                        <input type="text" :value="user.firstName" placeholder="FIRST NAME">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.lastName" placeholder="LAST NAME">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.email" placeholder="EMAIL">
                    </div>
                </div>
                <div class="row button-wrapper">
                    <button type="button" class="button" disabled title="edit profile in progress">SAVE</button>
                </div>        
            </div>
            <div class="grid-container" v-if="user.orders.length">
                <div>
                    <h2 class="title">Last shipping address</h2>
                </div>
                <div class="row information-wrapper address">
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.firstName" placeholder="FIRST NAME">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.lastName" placeholder="LAST NAME">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.street" placeholder="STREET">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.zip" placeholder="ZIP">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.state" placeholder="STATE">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.phone" placeholder="PHONE">
                    </div>
                    <div class="columns medium-4">
                        <input type="text" :value="user.orders[0].order.user.email" placeholder="EMAIL">
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h4>No profile information</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    props: ['user']
}
</script>