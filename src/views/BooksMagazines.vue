<template>
    <div class="home flex-container flex-dir-column">
        <headerBooks />
        <mainContent />
    </div>
</template>

<script>

import headerBooks from '../components/page_booksMagazines/header'
import mainContent from '../components/page_booksMagazines/mainBooksMagazines'

export default {
    name: 'books-magazines',
    data() {
        return {
            
        }
    },
    components: {
        headerBooks,
        mainContent 
    }
}
</script>