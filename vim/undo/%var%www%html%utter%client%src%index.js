Vim�UnDo� �f�Q;�L�����E��<�����Y���Y                                      YYxy    _�                             ����                                                                                                                                                                                                                                                                                                                                                             YYw�     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             YYw�     �                  5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             YYx_     �                �             5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             YYxx    �               �                  �                 &import React, {Component} from 'react'   'import {Switch} from 'react-router-dom'   0import Navbar from './containers/Navbars/Navbar'   6import Wrapper from './containers/Wrappers/Wrapper.js'   import App from './App.js'       class App extends Component {     render() {       return (         <Wrapper>   6        <Navbar list={['home', 'about', 'contact']} />           {this.props.children}         </Wrapper>       )     }   }5��