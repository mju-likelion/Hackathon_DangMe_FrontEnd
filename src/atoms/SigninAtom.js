import {atom} from 'recoil';

export const userInfo=atom({
    key : 'userinfo',
    default:[
        {
            "user_name": null,
            "password" : null,
            "phone_num" : null,
            "email" : null,
            "pet_name" : null,
            "age" : null,
            "weight" : null,
            "dog_breed" : null,
            "note" : null
        }
    ]
})