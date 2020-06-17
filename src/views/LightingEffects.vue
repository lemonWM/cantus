<template>
    <div class="home flex-container flex-dir-column">
        <headerLightning />
        <mainContent />
    </div>
</template>

<script>

import headerLightning from '../components/page_lightingEffects/header'
import mainContent from '../components/page_lightingEffects/mainLightningEffects'

export default {
    name: 'lightning-effects',
    data() {
        return {
            
        }
    },
    components: {
        headerLightning,
        mainContent 
    }
}
</script>