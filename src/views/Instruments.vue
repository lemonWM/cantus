<template>
    <div class="home flex-container flex-dir-column">
        <headerInstruments />
        <mainContent />
    </div>
</template>

<script>

import headerInstruments from '../components/page_instruments/header'
import mainContent from '../components/page_instruments/mainInstruments'

export default {
    name: 'Instruments',
    data() {
        return {
            
        }
    },
    components: {
        headerInstruments,
        mainContent // get all products for category 'instruments'
    }
}
</script>