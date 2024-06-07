import request from '@/utils/request'

export default {
    // 没有，默认为空
    newMember(userInfo = {}) {
        return request({
            url: `/makerservice/newMember/rigist`,
            method: 'post',
            data: userInfo
        })
    },
}