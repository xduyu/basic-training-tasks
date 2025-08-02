function swap_t_v_o_twv(var1, var2) {
    let temp = var1
    var1 = var2
    var2 = temp
    return [var1, var2]
}

console.log(swap_t_v_o_twv('123', '321'))