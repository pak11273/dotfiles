Vim�UnDo� vb�����z�ʳ�h����a��Y���.�                                     Z���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             Z��y     �                �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Z�҂     �               import courses from 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Z�҂     �               import course from 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Z�҄     �               import courseRoutes  from 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Z�҅     �               import courseRoutes from 5�_�                       *    ����                                                                                                                                                                                                                                                                                                                                                             Z�Ҕ     �             �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Z�Җ     �               +router.use('/dictionary', dictionaryRoutes)5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             Z�җ     �               !router.use('/', dictionaryRoutes)5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             Z�ҙ     �               'router.use('/course', dictionaryRoutes)5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             Z�Қ     �               router.use('/course', )5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             Z�ң     �               #router.use('/course', courseRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Ҧ    �               �                 �                &router.use('/messages', messageRoutes)�                )// router.use('/comments', commentRoutes)�                 router.use('/rooms', roomRoutes)�                #// router.use('/zones', zoneRoutes)�                $router.use('/phrases', phraseRoutes)�                &router.use('/channels', channelRoutes)�                (router.use('/languages', languageRoutes)�                 router.use('/users', userRoutes)�                +router.use('/dictionary', dictionaryRoutes)�                $router.use('/courses', courseRoutes)�                 �                const router = express.Router()�   
             6import messageRoutes from './message/messageRoutes.js'�   	             9// import commentRoutes from './comment/commentRoutes.js'�      
          -import roomRoutes from './room/roomRoutes.js'�      	          -import zoneRoutes from './zone/zoneRoutes.js'�                4import phraseRoutes from './phrases/phraseRoutes.js'�                9import languageRoutes from './language/languageRoutes.js'�                4import courseRoutes from  './course/courseRoutes.js'�                6import channelRoutes from './channel/channelRoutes.js'�                -import userRoutes from './user/userRoutes.js'�                ?import dictionaryRoutes from './dictionary/dictionaryRoutes.js'�                 import express from 'express'�                module.exports = router5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ҩ     �                &router.use('/channels', channelRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ҫ     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ү     �                (router.use('/languages', languageRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ү     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Ұ     �                $router.use('/phrases', phraseRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ұ     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ҳ     �                #// router.use('/zones', zoneRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Ҵ     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ҵ     �                &router.use('/messages', messageRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Ҷ     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�ҹ     �                 router.use('/rooms', roomRoutes)5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Һ     �             �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Z�Ҽ     �                )// router.use('/comments', commentRoutes)5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             Z�ҿ    �             �             5��