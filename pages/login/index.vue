<template>
    <div>
        <Auth />
    </div>
</template>

<script>
import Auth from "@/components/auth/login";
export default {
    layout:'login',
    components: {
        Auth,
    }
}
</script>