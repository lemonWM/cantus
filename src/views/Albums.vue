<template>
    <div class="home flex-container flex-dir-column">
        <headerAlbums />
        <mainContent />
    </div>
</template>

<script>

import headerAlbums from '../components/page_albums/header'
import mainContent from '../components/page_albums/mainAlbums'

export default {
    name: 'albums',
    data() {
        return {
            
        }
    },
    components: {
        headerAlbums,
        mainContent 
    }
}
</script>