<template>
    <div class="home flex-container flex-dir-column">
        <headerEquipment />
        <mainContent />
    </div>
</template>

<script>

import headerEquipment from '../components/page_soundEquipments/header'
import mainContent from '../components/page_soundEquipments/mainEquipments'

export default {
    name: 'Sound-equipment',
    data() {
        return {
            
        }
    },
    components: {
        headerEquipment,
        mainContent
    }
}
</script>