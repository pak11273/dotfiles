Vim�UnDo� �MrCG�����:?5+l�e��z��1V���e�n   .                 <       <   <   <    Yn\�    _�                     &        ����                                                                                                                                                                                                                                                                                                                                                             YnQ�     �   &   (   /       �   &   (   .    5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             YnQ�     �   &   (   /      app.get('/sendmail'5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             YnQ�    �      	   0       �      	   /    5�_�                    (       ����                                                                                                                                                                                                                                                                                                                                                             YnSE     �   '   )   0       app.get('/sendmail', nodemailer)5�_�                    (       ����                                                                                                                                                                                                                                                                                                                                                             YnSI     �   '   *   0      app.get('/sendmail', )5�_�                    )       ����                                                                                                                                                                                                                                                                                                                                                             YnSP     �   (   *   1      }})5�_�                    (       ����                                                                                                                                                                                                                                                                                                                                                             YnSQ     �   (   *   2       �   (   *   1    5�_�      	              (       ����                                                                                                                                                                                                                                                                                                                                                             YnSa     �   (   ?   2    �   (   )   2    5�_�      
           	   ?        ����                                                                                                                                                                                                                                                                                                                                                             YnSe     �   >   ?            jk5�_�   	              
   )        ����                                                                                                                                                                                                                                                                                                                                                             YnSh     �   F   H          module.exports = app�   E   G          	// export�   =   ?          })�   <   >            }�   ;   =          /    console.log('Email sent: ' + info.response)�   :   <          
  } else {�   9   ;              console.log(error)�   8   :            if (error) {�   7   9          Hexport default transporter.sendMail(mailOptions, function(error, info) {�   5   7          }�   4   6            text: 'That was easy!'�   3   5          )  subject: 'Sending Email using Node.js',�   2   4            to: 'pak11273@yahoo.com',�   1   3            from: 'youremail@gmail.com',�   0   2          const mailOptions = {�   .   0          })�   -   /            }�   ,   .              pass: pwd.gmail_password�   +   -              user: pwd.gmail_username,�   *   ,          	  auth: {�   )   +            service: 'gmail',�   (   *          0const transporter = nodemailer.createTransport({5�_�   
                 
        ����                                                                                                                                                                                                                                                                                                                                                             YnS�    �   
      H       �   
      G    5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      J  export default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      I  xport default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      H  port default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      G  ort default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      F  rt default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      E  t default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      D   default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      C  default transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      B  efault transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      A  fault transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      @  ault transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      ?  ult transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      >  lt transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      =  t transporter.sendMail(mailOptions, function(error, info) {5�_�                    9       ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   8   :   H      <   transporter.sendMail(mailOptions, function(error, info) {5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             YnS�    �               �                  �              H   $import config from './config/config'   import express from 'express'   3import middleware from './middleware/appMiddleware'   import api from './api'   "import logger from './util/logger'   &import error from './middleware/error'   #import auth from './auth/routes.js'   )import nodemailer from './util/mailer.js'   import mongoose from 'mongoose'   import bluebird from 'bluebird'   !import pwd from './config/pwd.js'   // import cors from 'cors';   mongoose.Promise = bluebird       mongoose.connect(config.db.url)   const app = express()       if (config.seed) {     require('./util/seed')   }       // middleware   middleware(app)       // cors preflight   // alternative cors code   %// app.use(function(req, res, next) {   8//       res.header("Access-Control-Allow-Origin", "*");   f//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");   //       next();   // });        // cors preflight using npm cors   // app.use(cors());   // app.options("*", cors());       // api   -// *if using cors, add as 1st middleware func   app.use('/api', api)   app.use('/auth', auth)   (app.get('/sendmail', function(req,res) {   2  const transporter = nodemailer.createTransport({       service: 'gmail',       auth: {         user: pwd.gmail_username,         pass: pwd.gmail_password       }     })         const mailOptions = {        from: 'youremail@gmail.com',       to: 'pak11273@yahoo.com',   +    subject: 'Sending Email using Node.js',       text: 'That was easy!'     }       ;  transporter.sendMail(mailOptions, function(error, info) {       if (error) {         console.log(error)       } else {   1      console.log('Email sent: ' + info.response)       }     })   })       // temporary url       // todo: global error handling   app.use(error())         // export     module.exports = app5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             YnS�     �   G   I          module.exports = app�   F   H          	// export�   ?   A          })�   >   @            })�   =   ?              }�   <   >          1      console.log('Email sent: ' + info.response)�   ;   =              } else {�   :   <                console.log(error)�   9   ;              if (error) {�   8   :          ;  transporter.sendMail(mailOptions, function(error, info) {�   6   8            }�   5   7              text: 'That was easy!'�   4   6          +    subject: 'Sending Email using Node.js',�   3   5              to: 'pak11273@yahoo.com',�   2   4               from: 'youremail@gmail.com',�   1   3            const mailOptions = {�   /   1            })�   .   0              }�   -   /                pass: pwd.gmail_password�   ,   .                user: pwd.gmail_username,�   +   -              auth: {�   *   ,              service: 'gmail',�   )   +          2  const transporter = nodemailer.createTransport({�   (   *          )app.get('/sendmail', function(req, res) {�   '   )          app.use('/auth', auth)�   &   (          app.use('/api', api)�   %   '          -// *if using cors, add as 1st middleware func�   $   &          // api�   "   $          // app.options("*", cors());�   !   #          // app.use(cors());�       "           // cors preflight using npm cors�                 // });�                //       next();�                f//       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");�                8//       res.header("Access-Control-Allow-Origin", "*");�                %// app.use(function(req, res, next) {�                // alternative cors code�                // cors preflight�                }�                  require('./util/seed')�                if (config.seed) {�                mongoose.connect(config.db.url)5�_�                    )       ����                                                                                                                                                                                                                                                                                                                                                             YnX<     �   (   *   H      +  app.get('/sendmail', function(req, res) {5�_�                    )       ����                                                                                                                                                                                                                                                                                                                                                             YnX<     �   (   *   H      *  app.et('/sendmail', function(req, res) {5�_�                     )       ����                                                                                                                                                                                                                                                                                                                                                             YnX<     �   (   *   H      )  app.t('/sendmail', function(req, res) {5�_�      !               )       ����                                                                                                                                                                                                                                                                                                                                                             YnX=     �   (   *   H      (  app.('/sendmail', function(req, res) {5�_�       "           !           ����                                                                                                                                                                                                                                                                                                                                                             YnX?    �               �                  �              H   $import config from './config/config'   import express from 'express'   3import middleware from './middleware/appMiddleware'   import api from './api'   "import logger from './util/logger'   &import error from './middleware/error'   #import auth from './auth/routes.js'   )import nodemailer from './util/mailer.js'   import mongoose from 'mongoose'   import bluebird from 'bluebird'   !import pwd from './config/pwd.js'   // import cors from 'cors';   mongoose.Promise = bluebird       !  mongoose.connect(config.db.url)   const app = express()         if (config.seed) {       require('./util/seed')     }       // middleware   middleware(app)         // cors preflight     // alternative cors code   '  // app.use(function(req, res, next) {   :  //       res.header("Access-Control-Allow-Origin", "*");   h  //       res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");     //       next();     // });       "  // cors preflight using npm cors     // app.use(cors());     // app.options("*", cors());         // api   /  // *if using cors, add as 1st middleware func     app.use('/api', api)     app.use('/auth', auth)   ,  app.post('/sendmail', function(req, res) {   4    const transporter = nodemailer.createTransport({         service: 'gmail',         auth: {   !        user: pwd.gmail_username,            pass: pwd.gmail_password         }       })           const mailOptions = {   "      from: 'youremail@gmail.com',         to: 'pak11273@yahoo.com',   -      subject: 'Sending Email using Node.js',         text: 'That was easy!'       }       =    transporter.sendMail(mailOptions, function(error, info) {         if (error) {           console.log(error)         } else {   3        console.log('Email sent: ' + info.response)         }       })     })       // temporary url       // todo: global error handling   app.use(error())         // export     module.exports = app5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      )import nodemailer from './util/mailer.js'5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      (import nodemailer from '/util/mailer.js'5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      'import nodemailer from 'util/mailer.js'5�_�   $   &           %          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      &import nodemailer from 'til/mailer.js'5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      %import nodemailer from 'il/mailer.js'5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      $import nodemailer from 'l/mailer.js'5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      #import nodemailer from '/mailer.js'5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      "import nodemailer from 'mailer.js'5�_�   )   +           *          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      !import nodemailer from 'ailer.js'5�_�   *   ,           +          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H       import nodemailer from 'iler.js'5�_�   +   -           ,          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from 'ler.js'5�_�   ,   .           -          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from 'er.js'5�_�   -   /           .          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from 'r.js'5�_�   .   0           /          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from '.js'5�_�   /   1           0          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from 'js'5�_�   0   2           1          ����                                                                                                                                                                                                                                                                                                                                                             YnX�     �      	   H      import nodemailer from 's'5�_�   1   3           2          ����                                                                                                                                                                                                                                                                                                                                                             YnX�    �      	   H      import nodemailer from ''5�_�   2   4           3   )        ����                                                                                                                                                                                                                                                                                                                                                             YnZ�    �   )   +   I        �   )   +   H    5�_�   3   5           4   )       ����                                                                                                                                                                                                                                                                                                                                                             Yn[
     �   (   *   I      *app.post('/sendmail', function(req, res) {5�_�   4   6           5   )       ����                                                                                                                                                                                                                                                                                                                                                             Yn[    �   (   *   I      &app.('/sendmail', function(req, res) {5�_�   5   7           6   )       ����                                                                                                                                                                                                                                                                                                                                                             Yn[H     �   (   *   I      )app.use('/sendmail', function(req, res) {5�_�   6   8           7   )       ����                                                                                                                                                                                                                                                                                                                                                             Yn[H   	 �   (   *   I      &app.('/sendmail', function(req, res) {5�_�   7   9           8   )   
    ����                                                                                                                                                                                                                                                                                                                                                             Yn[n   
 �   (   *   I      *app.post('/sendmail', function(req, res) {5�_�   8   :           9   )   
    ����                                                                                                                                                                                                                                                                                                                                                             Yn[�     �   (   *   I      )app.post('sendmail', function(req, res) {5�_�   9   ;           :           ����                                                                                                                                                                                                                                                                                                                            )   
       B           V   
    Yn\     �                #import nodemailer from 'nodemailer'5�_�   :   <           ;   (        ����                                                                                                                                                                                                                                                                                                                            (           @           V        Yn\�     �   '   (          *app.post('/sendmail', function(req, res) {     console.log('we made it')   2  const transporter = nodemailer.createTransport({       service: 'gmail',       auth: {         user: pwd.gmail_username,         pass: pwd.gmail_password       }     })         const mailOptions = {        from: 'youremail@gmail.com',       to: 'pak11273@yahoo.com',   +    subject: 'Sending Email using Node.js',       text: 'That was easy!'     }       ;  transporter.sendMail(mailOptions, function(error, info) {       if (error) {         console.log(error)       } else {   1      console.log('Email sent: ' + info.response)       }     })   })5�_�   ;               <   
        ����                                                                                                                                                                                                                                                                                                                            (           (           V        Yn\�    �   	   
          !import pwd from './config/pwd.js'5��