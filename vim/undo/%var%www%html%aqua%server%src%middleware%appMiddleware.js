Vim�UnDo� 3��NM*�M`�f�G��W 9��W��pj���   
                                   Yng    _�                             ����                                                                                                                                                                                                                                                                                                                                                             Ynf     �         
       �         
    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Ynj     �         
       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Ynm     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Yno     �               5 pp.use(require('webpack-dev-middleware')(compiler, {5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             Ynr     �               6a pp.use(require('webpack-dev-middleware')(compiler, {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             Yns     �      	                               }));�                -               publicPath: config.output.path�                         noInfo: true,5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        Yny     �                5app.use(require('webpack-dev-middleware')(compiler, {     noInfo: true,      publicPath: config.output.path   }));5�_�      	              	        ����                                                                                                                                                                                                                                                                                                                                                  V        Ynz     �   	      
    �   	   
   
    5�_�      
           	   
        ����                                                                                                                                                                                                                                                                                                                            
                      v        Yn�     �   	            5app.use(require('webpack-dev-middleware')(compiler, {     noInfo: true,      publicPath: config.output.path   }));5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                            
                      v        Yn�    �               �                  �                 import morgan from 'morgan';   %import bodyParser from 'body-parser';   import cors from 'cors';       module.exports = (app) => {     app.use(cors());     app.use(morgan('dev'));   5  app.use(bodyParser.urlencoded({ extended: true }));     app.use(bodyParser.json());   7  app.use(require('webpack-dev-middleware')(compiler, {       noInfo: true,   "    publicPath: config.output.path     }));   };5�_�   
                  
        ����                                                                                                                                                                                                                                                                                                                            
                    V       Ynf    �   	   
          
  app.use(   1    require('webpack-dev-middleware')(compiler, {         noInfo: true,   $      publicPath: config.output.path       })     )5��