// 异步方法处理 
export default {
    changeCity(ctx, city) {
        ctx.commit('changeCity', city)
    }
}