import { Message } from 'element-ui';
import router from '@/router/index.js'

export function correct_code_parse(code) {
    switch (code) {
        case 401:
            Message({
                message: '未登录或登录失效',
                type: 'error'
            })
            router.push({path: '/login'});
        break;
    }
}