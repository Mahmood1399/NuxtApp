export default (context) => {
    if (!context.store.getters.isAuthenticated) {
        context.router.push('/login')
    }
}


