<template>
    <div class="home flex-container flex-dir-column">
        <headerMicrophones/>
        <mainContent />
    </div>
</template>

<script>

import headerMicrophones from '../components/page_microphones/header'
import mainContent from '../components/page_microphones/mainMicrophones'

export default {
    name: 'microphones',
    data() {
        return {
            
        }
    },
    components: {
        headerMicrophones,
        mainContent 
    }
}
</script>