const changeRouter = (that, params, opts) => {
    that.$router.push({
        name: params,
        query: Object.assign({}, that.$route.query, opts)
    })
}

export default changeRouter
