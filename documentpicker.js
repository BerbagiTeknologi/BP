// import React , {Component}from 'react'
// import ButtonIcon from './src/components/ButtonIcon';
// import {View, SafeAreaView, Text, TextInput, Modal, StyleSheet, ToastAndroid, RefreshControl, BackHandler, Alert,
//     ImageBackground,ActivityIndicator, Image, TouchableOpacity, PermissionsAndroid, FlatList, Linking, ScrollView, Vibration, TouchableWithoutFeedback  } from 'react-native'
//     import {BackgroundHome, Calendar, TimeMerah, TimeHijau, MasukHijau, PulangMerah, RequestKuning, ReqCircleRed, ReqCircle,ReqCircleDark, 
//         IconRumahAktif, IconHomePurple,
//         IconLaporan, Profile, Bgbg,Bgbg1, Salary, Core, Report, WarningChanges, ReportBaw, Penilaian, BgLaundry} from './src/assets'
// import {ChevRight, Presensi, Close, JamGreen, JamRed, UserKar, ChevBot, ChevTop, Help, ChevRightGrey, ChevRightGreyDark, ListTema} from './src/assets/icons';
// import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { connect } from 'react-redux';
// import moment from 'moment'
// import 'moment/locale/id'

// class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             file: {
//                 name: '',
//                 type: '',
//                 uri: '',
//                 size: '',
//               },
//           riwayat: [],
//           presnowid: [],
//           lapnowid: [],
//           reqnowid: [],
//           reqnowjab: [],
//           reqreq:[],
//           feedbackNow: [],

//           getacc:[],
//           getreq:[],
          
//           notiffeed:[],
//           filacc:[],

//           laporan: [],
//           rekap : [],
//           text2: '',
//           deskripsi: '',
//           cek_in: '',
//           cek_out: '',
//           jm: '',
//           ji: '',
//           jo: '',
//           jp: '',
//           st: '',
//           kt: '',
//           fm: '',
//           fo: '',
//           id_req: '',
//           collapse:false,
//           collapseBaw:false,
//           status1:'',
//           jumlah1:'',
//           status2:'',
//           jumlah2:'',
//           status3:'',
//           jumlah3:'',
//           status4:'',
//           jumlah4:'',
//           status5:'',
//           jumlah5:'',
//           status6:'',
//           jumlah6:'',
//           status7:'',
//           jumlah7:'',
//         //   fh: '',
//           modalSebelumPulang: false,
//           modalPresensi: false,
//           modalSetelahPulang: false,
//           modalhelp:false,
//           refreshing: true,
//           jam_cek_in:'',
//           jam_cek_out:'',
//           jam_break_out:'',
//           jam_break_in:'',
//           expanded : false,
//           content: {},
//           modalLaporan: false,
//           modalPesan: false,
//           date_api:'',
//           belumLap:[],
//           belumFeed:[],
//           pesan:'',
//           id_kar:'',
//           nama:'',
//           nohp:'',
//           index:0,
//           modalImg:false,
//           imgSee:'',
//           getLapBaw:[],
//           perubahan:[],
//           pressStat:[],
//           hadirbaw:'',
//           sakitbaw:'',
//           bolosbaw:'',
//           terlambatbaw:'',
//           perdinbaw:'',
//           cutibaw:'',
//           cutipentingbaw:'',
//           modalTema:false,

//           tema : '',
//           mode : '',
//           color : '',

//           tambah:[],
//           kurang:[],
//           getget:[],
//           satu:0,
//           dua:0,
//           tiga:0,
//           empat:0,
//           lima:0,
//           enam:0,

//           text_card_pres : this.props.user.tema === 0 ? '#4F4D4D' : '#fafafa',
//         }
//     }
//     getProfile(token) {
//         console.log('mulai getProfile...');
//         setTimeout(() => {
//             this.setState({ loading: true });
//         }, 500);
//         const endpoint = 'https://kilauindonesia.org/datakilau/api/getprofilekar';
//         fetch(endpoint, {
//             headers: {
//             Authorization: `Bearer ${token}`,
//             },
//         })
//             .then((res) => res.json())
//             .then((resjson) => {
//             console.log('ini resjson getprofile', resjson);
//             if (resjson.data) {
//                 this.updateState(resjson.data);
//             }
//             })
//             .catch((err) => {
//             console.log('error dari splash profile', err);
//             });
//         }
//         async updateState(data) {
//             this.props.changeUser(data);
//             this.Update();
//             console.log('ini email', this.props.user.email);
//         }
        
    
//         async tokenCheck() {
//             AsyncStorage.getItem('token').then((res) => {
//                 console.log('ini token ', res);
//                 if (res) {
//                 this.getProfile(res);
//                 }
//             });
//         }
    
//     state = {
//         curHours: null,
//         curMinutes: null,
//         curSecound: null,
        
//     };
    
//      toggleModalSebelumPulang(visible) {
//         this.setState({ modalSebelumPulang: visible });
//      }
//      toggleModalSetelahPulang(visible) {
//         this.setState({ modalSetelahPulang: visible });
//      }
//     getRiwayat() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/presmonthnow/' + this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('ini resjson getsaa', resJson);
//                 const length = resJson.data.length;
//                 this.setState({
//                     lima : 2
//                 });
//                 if (length > 0) {
//                 this.setState({
//                     text2: 'Belum Ada Presensi Bulan ini',
//                     riwayat: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     text2: 'Belum Ada Presensi Bulan ini',
//                     riwayat: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }

//     getPerubahan() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/getwar_naik', {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('ini resjson getsaa', resJson);
//                 const length = resJson.data.length;
//                 this.setState({
//                     enam : 2
//                 });
//                 if (length > 0) {
//                 this.setState({
//                     text2: 'Belum Ada Presensi Bulan ini',
//                     perubahan: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     text2: 'Belum Ada Presensi Bulan ini',
//                     perubahan: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }

//     getPresnowid() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/presnowid/' + this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 this.setState({
//                     dua : 2
//                 });
//                 if (length > 0) {
//                 this.setState({
//                     presnowid: resJson.data,
//                     cek_in: resJson.data[0].cek_in,
//                     cek_out: resJson.data[0].cek_out,
//                 });
//                 } else {
//                 this.setState({
//                     presnowid: resJson.data,
//                     cek_in: resJson.data[0].cek_in,
//                     cek_out: resJson.data[0].cek_out,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }

//     getReqnowid() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/reqnowid/' + this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('oke');
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     reqnowid: resJson.data,
//                 });
//                 } else {
//                 this.setState({
//                     reqnowid: resJson.data,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }

//     getLapnowid() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/lapnowid/' + this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     lapnowid: resJson.data,
                   
//                 });
//                 } else {
//                 this.setState({
//                     lapnowid: resJson.data,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }

//     getReqnowjab() {
//         const api = this.props.user.presensi === 'kacab' ? 'reqnowkan/' : this.props.user.presensi === 'admin' ? 'reqnowall' : 'reqnowjab/'
//         const id = this.props.user.presensi === 'kacab' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' ? '' : this.props.user.id_jabatan
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/' + api + id, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 this.setState({
//                     empat : 2
//                 });
//                 if (length > 0) {
//                 this.setState({
//                     reqnowjab: resJson.data,
//                     reqreq: resJson.data.filter(i => i.acc.includes('0') | i.acc.includes('2')),
//                 });
//                 } else {
//                 this.setState({
//                     reqnowjab: resJson.data,
//                     reqreq: resJson.data.filter(i => i.acc.includes('0') | i.acc.includes('2')),
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }
//     requestCameraPermission = async () => {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//               title: "Izin Kamera Untuk Aplikasi",
//               message:
//                 "Aplikasi membutuhkan akses ke kamera Anda" ,
//               buttonNeutral: "Ask Me Later",
//               buttonNegative: "Cancel",
//               buttonPositive: "OK"
//             }
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             console.log("You can use the camera");
//           } else {
//             console.log("Camera permission denied");
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       };
//       getFeedNow() {
//         AsyncStorage.getItem('token').then((token) => {
    
//             fetch('https://kilauindonesia.org/datakilau/api/listfeedbackid/'+ this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('ini resjson getsaa', resJson);
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     feedbackNow: resJson.data,
//                     refreshing: false,
                    
//                 });
//                 } else {
//                 this.setState({
//                     feedbackNow: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }
//     getnotifeed() {
//         AsyncStorage.getItem('token').then((token) => {
    
//             fetch('https://kilauindonesia.org/datakilau/api/feedin', {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('FEED COY', resJson.data);
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                     // const pattern = [1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000];
//                     // PushNotification.configure({
//                     //     // (optional) Called when Token is generated (iOS and Android)
//                     //     onRegister: function (token) {
//                     //       console.log("TOKEN:", token);
//                     //     },
                      
//                     //     // (required) Called when a remote is received or opened, or local notification is opened
//                     //     onNotification: function (notification) {
//                     //       console.log("NOTIFICATION:", notification);
                      
//                     //       // process the notification
                      
//                     //       // (required) Called when a remote is received or opened, or local notification is opened
//                     //       notification.finish(PushNotificationIOS.FetchResult.NoData);
//                     //     },
                      
//                     //     // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//                     //     onAction: function (notification) {
//                     //       console.log("ACTION:", notification.action);
//                     //       console.log("NOTIFICATION:", notification);
                      
//                     //       // process the action
//                     //     },
                      
//                     //     // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//                     //     onRegistrationError: function(err) {
//                     //       console.error(err.message, err);
//                     //     },
                      
//                     //     // IOS ONLY (optional): default: all - Permissions to register.
//                     //     permissions: {
//                     //       alert: true,
//                     //       badge: true,
//                     //       sound: true,
//                     //     },
                      
//                     //     // Should the initial notification be popped automatically
//                     //     // default: true
//                     //     popInitialNotification: true,
                      
//                     //     /**
//                     //      * (optional) default: true
//                     //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
//                     //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
//                     //      * - if you are not using remote notification or do not have Firebase installed, use this:
//                     //      *     requestPermissions: Platform.OS === 'ios'
//                     //      */
//                     //     requestPermissions: true,
//                     //     requestPermissions: Platform.OS === 'ios'
//                     //   });
//                     //   PushNotification.createChannel(
//                     //     {
//                     //       channelId: "1", // (required)
//                     //       channelName: "My channel", // (required)
//                     //       channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//                     //       playSound: true, // (optional) default: true
//                     //       soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//                     //       vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//                     //     },
//                     //     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//                     //   );
//                     //   resJson.data.map(item =>
//                     //     PushNotification.localNotification({
//                     //         channelId: "1",
//                     //         title: item.nama_atasan,
//                     //         message : item.feedback,
//                     //         background: true,
//                     //         vibration: Vibration.vibrate(pattern),
                
//                     //     })
//                     // )
//                 this.setState({
//                     notiffeed: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     notiffeed: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }
      
//       getLaporan() {
//         AsyncStorage.getItem('token').then((token) => {
//           const api = this.props.user.presensi === 'kacab' ? 'lapnowkan/' : this.props.user.presensi === 'admin' ? 'lapnowall' : 'lapnowjab/'
//           const id = this.props.user.presensi === 'kacab' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' ? '' : this.props.user.id_jabatan
  
//             fetch('https://kilauindonesia.org/datakilau/api/' + 'lapnowjab/' + this.props.user.id_jabatan, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('ini resjson getsaa', resJson);
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     laporan: resJson.data,
//                     refreshing: false,
                   
//                 });
//                 } else {
//                 this.setState({
//                     laporan: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }
//     getget() {
//         AsyncStorage.getItem('token').then((token) => {
//           const api = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? 'presatasankacab/' : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' ? 'presatasanadm' : 'presatasan/'
//           const id = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' ? '' : this.props.user.id_jabatan
        
//             fetch('https://kilauindonesia.org/datakilau/api/' + api + id, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     getget: resJson.data.filter(i => i.kondisi == 0 ),
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     getget: resJson.data.filter(i => i.kondisi == 0 ),
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }
//       getkonkon() {
//         AsyncStorage.getItem('token').then((token) => {
//           const api = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? 'listreqgajicab/' : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' | this.props.user.presensi === 'hrd' ? 'listreqgaji' : 'hihi/'
//           const id = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' | this.props.user.presensi === 'hrd' ? '' : this.props.user.id_jabatan
        
//             fetch('https://kilauindonesia.org/datakilau/api/' + api + id, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     getreq: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     getreq: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }
//       getkon() {
//         AsyncStorage.getItem('token').then((token) => {
//           const api = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? 'listaccgajicab/' : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' | this.props.user.presensi === 'hrd' ? 'listaccgaji' : 'hihi/'
//           const id = this.props.user.presensi === 'kacab' | this.props.user.presensi === 'keuangan cabang' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' | this.props.user.presensi === 'hrd' ? '' : this.props.user.id_jabatan
        
//             fetch('https://kilauindonesia.org/datakilau/api/' + api + id, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     getacc: resJson.data.filter(i => i.status === 'acc'),
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     getacc: resJson.data.filter(i => i.status === 'acc'),
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }
//     componentDidMount() {
//         Firebase.initializeApp(this);
//         PushNotification.configure({
//             // (optional) Called when Token is generated (iOS and Android)
//             onRegister: function (token) {
//               console.log("TOKEN:", token);
//             },
          
//             // (required) Called when a remote is received or opened, or local notification is opened
//             onNotification: function (notification) {
//               console.log("NOTIFICATION:", notification);
          
//               // process the notification
          
//               // (required) Called when a remote is received or opened, or local notification is opened
//               notification.finish(PushNotificationIOS.FetchResult.NoData);
//             },
          
//             // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//             onAction: function (notification) {
//               console.log("ACTION:", notification.action);
//               console.log("NOTIFICATION:", notification);
          
//               // process the action
//             },
          
//             // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//             onRegistrationError: function(err) {
//               console.error(err.message, err);
//             },
          
//             // IOS ONLY (optional): default: all - Permissions to register.
//             permissions: {
//               alert: true,
//               badge: true,
//               sound: true,
//             },
          
//             // Should the initial notification be popped automatically
//             // default: true
//             popInitialNotification: true,
          
//             /**
//              * (optional) default: true
//              * - Specified if permissions (ios) and token (android and ios) will requested or not,
//              * - if not, you must call PushNotificationsHandler.requestPermissions() later
//              * - if you are not using remote notification or do not have Firebase installed, use this:
//              *     requestPermissions: Platform.OS === 'ios'
//              */
//             requestPermissions: true,
//             requestPermissions: Platform.OS === 'ios'
//           });
//         this.requestCameraPermission();
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
//         this.tokenCheck();
        
//         // if(this.state.notiffeed.length > 0){


//         var now = new Date();
//         var date = ((now.getDate() < 10) ? '0' : '') + now.getDate(); //Current Date
//         var month = (((now.getMonth() + 1) < 10) ? '0' : '') + (now.getMonth() + 1);  //Current Month
//         var year = new Date().getFullYear(); //Current Year
//         this.setState({
//           date_api:
//             date + '-' + month + '-' + year,
//         });
        
//         setInterval(() => {
//           this.setState({
//             curHours : new Date().getHours(),
//             curMinutes : new Date().getMinutes(),
//             curSecound : new Date().getSeconds(),
//           })
//         }, 1000)
       
//     }
//       async docPicker() {
//         // Pick a single file
//         try {
//           const res = await DocumentPicker.pick({
//              type: [DocumentPicker.types.allFiles],
//           });
//           const source = {
//             uri: res[0].uri,
//             type: res[0].type,
//             name: res[0].name,
//             size: res[0].size,
//           };
//           this.setState({
//             file: source,
//           });
//           console.log('ini file', this.state.file);//here you can call your API and send the data to that API
//         } catch (err) {
//           if (DocumentPicker.isCancel(err)) {
//             console.log("error -----", err);
//           } else {
//             throw err;
//           }
//         }
//       }
      
//       componentWillUnmount() {
//         this.mounted = false;
//         BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
//       }
    
//       handleBackButton = () => {
//         if (this.props.navigation.isFocused()) {
//           Alert.alert(
//             'Keluar',
//             'Anda yakin akan keluar ?', [{
//               text: 'TIDAK',
//               onPress: () => ToastAndroid.show("Batal Keluar", ToastAndroid.SHORT)
//             }, {
//               text: 'YA',
//               onPress: () => BackHandler.exitApp()
//             },], {
//             cancelable: true
//           }
//           )
//           return true;
//         } else {
//           return this.state.canBeClosed = false;
//         }
//       };

//     onRefresh(){
//         this.tokenCheck();
//     }
//     getJamker() {
//         const date= new Date();
//         const days = moment(date).format("dddd");
//         console.log("HARI : " + days);
//         AsyncStorage.getItem('token').then((token) => {
    
//             fetch('https://kilauindonesia.org/datakilau/api/getjamker/' + days, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 // 'Accept': 'application/json',
//                 // 'Content-Type': 'application/json'
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 console.log('ini resjson getsaa', resJson);
//                 const length = resJson.data.length;
//                 this.setState({
//                     satu : 2
//                 });
//                 if (length > 0) {
//                 this.setState({
//                     jam_cek_in: resJson.data[0].cek_in,
//                     jam_cek_out: resJson.data[0].cek_out,
//                     jam_break_out: resJson.data[0].break_out,
//                     jam_break_in: resJson.data[0].break_in,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     jam_cek_in: resJson.data[0].cek_in,
//                     jam_cek_out: resJson.data[0].cek_out,
//                     jam_break_out: resJson.data[0].break_out,
//                     jam_break_in: resJson.data[0].break_in,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//     }
//     getLapBaw() {
//         AsyncStorage.getItem('token').then((token) => {
//           const api = this.props.user.presensi === 'kacab' ? 'presatasankacab/' : this.props.user.presensi === 'admin' ? 'presatasanadm' : 'presatasan/'
//           const id = this.props.user.presensi === 'kacab' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' ? '' : this.props.user.id_jabatan
        
//             fetch('https://kilauindonesia.org/datakilau/api/' + api + id, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     getLapBaw: resJson.data,
//                     enam:2
//                 });
//                 } else {
//                 this.setState({
//                     getLapBaw: resJson.data,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }
//     getRekap() {
//         const api = this.props.user.presensi === 'kacab' ? 'kacab/' : this.props.user.presensi === 'admin' ? 'admin/' : 'karyawan/'
//         const id = this.props.user.presensi === 'kacab' ? this.props.user.id_kantor : this.props.user.presensi === 'admin' ? 1 : this.props.user.id_jabatan
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/stat/' + api + id +'/'+ this.state.date_api +'/'+ this.state.date_api, {
//           headers: {
//               Authorization: 'Bearer ' + token,
//               // 'Accept': 'application/json',
//               // 'Content-Type': 'application/json'
//           },
//           })
//           .then((res) => res.json())
//           .then((resJson) => {
//               console.log('ini resjson getsaa', resJson);
//               const length = resJson.data.length;
//               this.setState({
//                 tiga : 2
//               });
//               if (length > 0) {
//               this.setState({
//                   rekap: resJson.data,
//                   status1: resJson.data[0].status,
//                   jumlah1 : resJson.data[0].jumlah,
//                   status2: resJson.data[1].status,
//                   jumlah2 : resJson.data[1].jumlah,
//                   status3: resJson.data[2].status,
//                   jumlah3 : resJson.data[2].jumlah,
//                   status4: resJson.data[3].status,
//                   jumlah4 : resJson.data[3].jumlah,
//                   status5: resJson.data[4].status,
//                   jumlah5 : resJson.data[4].jumlah,
//                   status6: resJson.data[5].status,
//                   jumlah6 : resJson.data[5].jumlah,
//                   status7: resJson.data[6].status,
//                   jumlah7 : resJson.data[6].jumlah,
//                   refreshing: false,
//               }),
//               this.getPerson();
//               } else {
//               this.setState({
//                   rekap: resJson.data,
//                   status1: resJson.data[0].status,
//                   jumlah1 : resJson.data[0].jumlah,
//                   status2: resJson.data[1].status,
//                   jumlah2 : resJson.data[1].jumlah,
//                   status3: resJson.data[2].status,
//                   jumlah3 : resJson.data[2].jumlah,
//                   status4: resJson.data[3].status,
//                   jumlah4 : resJson.data[3].jumlah,
//                   status5: resJson.data[4].status,
//                   jumlah5 : resJson.data[4].jumlah,
//                   status6: resJson.data[5].status,
//                   jumlah6 : resJson.data[5].jumlah,
//                   status7: resJson.data[6].status,
//                   jumlah7 : resJson.data[6].jumlah,
//                   refreshing: false,
//               }),
//               this.getPerson();
//               }
//           })
//           .catch((err) => console.log('error catch home', err));
//       });
//       }

//       getBelumLaporan() {
//         // + this.props.user.id_jabatan
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/belap/' + this.props.user.id_jabatan  , {
//           headers: {
//               Authorization: 'Bearer ' + token,
//               // 'Accept': 'application/json',
//               // 'Content-Type': 'application/json'
//           },
//           })
//           .then((res) => res.json())
//           .then((resJson) => {
//               console.log('ini resjson getsaa', resJson);
//               const length = resJson.data.length;
//               if (length > 0) {
                
//               this.setState({
//                   belumLap: resJson.data,
//                   refreshing: false,
                  
//               }),
//               this.getPerson();
//               } else {
//               this.setState({
//                 belumLap: resJson.data,
//                 refreshing: false,
//               }),
//               this.getPerson();
//               }
//           })
//           .catch((err) => console.log('error catch home', err));
//       });
//       }
      

//       getBelumFeed() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/belfeed/' + this.props.user.id_karyawan +'/'+ this.props.user.id_jabatan , {
//           headers: {
//               Authorization: 'Bearer ' + token,
//               // 'Accept': 'application/json',
//               // 'Content-Type': 'application/json'
//           },
//           })
//           .then((res) => res.json())
//           .then((resJson) => {
//               console.log('ini resjson getsaa', resJson);
//               const length = resJson.data.length;
//               if (length > 0) {
//               this.setState({
//                   belumFeed: resJson.data,
//                   refreshing: false,
//               }),
//               this.getPerson();
//               } else {
//               this.setState({
//                 belumFeed: resJson.data,
//                 refreshing: false,
//               }),
//               this.getPerson();
//               }
//           })
//           .catch((err) => console.log('error catch home', err));
//       });
//       }

//       statPress() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/statpresid/' + this.props.user.id_karyawan , {
//           headers: {
//               Authorization: 'Bearer ' + token,
//               // 'Accept': 'application/json',
//               // 'Content-Type': 'application/json'
//           },
//           })
//           .then((res) => res.json())
//           .then((resJson) => {
//               console.log('ini resjson getsaa', resJson);
//               const length = resJson.data.length;
//               if (length > 0) {
//               this.setState({
//                   pressStat: resJson.data,
//                   hadirbaw: resJson.data[0].Hadir,
//                   terlambatbaw: resJson.data[0].Terlambat,
//                   bolosbaw: resJson.data[0].Bolos,
//                   sakitbaw: resJson.data[0].Sakit,
//                   perdinbaw: resJson.data[0].Perdin,
//                   cutibaw: resJson.data[0].Cuti,
//                   cutipentingbaw: resJson.data[0].Cuti_Penting,
//                   refreshing: false,
//               }),
//               this.getPerson();
//               } else {
//               this.setState({
//                 pressStat: resJson.data,
//                   hadirbaw: resJson.data[0].Hadir,
//                   terlambatbaw: resJson.data[0].Terlambat,
//                   bolosbaw: resJson.data[0].Bolos,
//                   sakitbaw: resJson.data[0].Sakit,
//                   perdinbaw: resJson.data[0].Perdin,
//                   cutibaw: resJson.data[0].Cuti,
//                   cutipentingbaw: resJson.data[0].Cuti_Penting,
//                 refreshing: false,
//               }),
//               this.getPerson();
//               }
//           })
//           .catch((err) => console.log('error catch home', err));
//       });
//       }
//       daftaraccreq() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/daftareq/' + this.props.user.id_karyawan, {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//               console.log(resJson);
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     filacc: resJson.data.filter(i => i.acc.includes('0') | i.acc.includes('2')),
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     filacc: resJson.data.filter(i => i.acc.includes('0') | i.acc.includes('2')),
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }

//       gettambah() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/listbayarupgaji/tambah', {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     tambah: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     tambah: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }
//       getkurang() {
//         AsyncStorage.getItem('token').then((token) => {
//             fetch('https://kilauindonesia.org/datakilau/api/listbayarupgaji/kurang', {
//             headers: {
//                 Authorization: 'Bearer ' + token
//             },
//             })
//             .then((res) => res.json())
//             .then((resJson) => {
//                 const length = resJson.data.length;
//                 if (length > 0) {
//                 this.setState({
//                     kurang: resJson.data,
//                     refreshing: false,
//                 });
//                 } else {
//                 this.setState({
//                     kurang: resJson.data,
//                     refreshing: false,
//                 });
//                 }
//             })
//             .catch((err) => console.log('error catch home', err));
//         });
//       }

//     Update(){
//             this.getReqnowid();
//             this.getPresnowid();
//             this.getLapnowid();
//             this.getReqnowjab();
//             this.getRiwayat();
//             this.getLaporan();
//             this.getFeedNow();
//             this.getJamker();
//             this.getRekap();
//             this.getBelumLaporan();
//             this.getBelumFeed();
//             this.getLapBaw();
//             this.getPerubahan();
//             this.statPress();
//             this.getnotifeed();
//             this.daftaraccreq();
//             this.gettambah();
//             this.getkurang();
//             this.getget();
//             this.getkon();
//             this.getkonkon();
//     }
    
//     renderBreakOut() {
//         return this.state.presnowid.map((map, index) => {
//             // const { id_karyawan, nama } = map
//             const date= new Date();
//             const { jamker } = this.state;
//             const presnowid = this.state.presnowid.filter(item => item.break_in != 'null')
//             const { modalSebelumPulang, modalSetelahPulang, deskripsi, reqnowid, reqnowjab } = this.state;
//             var hms = moment().format('HH:mm:ss');    // your input string
//             var a = hms.split(':'); // split it at the colons
//             // minutes are worth 60 seconds. Hours are worth 60 minutes.
//             var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
//             //if you want hours
//             var minutes = (seconds)/60;

//             //kondisi dari database untuk break out
//             var hh = moment().format(this.state.jam_break_out);
//             var as = hh.split(':'); 
//             var ss = (+as[0]) * 60 * 60 + (+as[1]) * 60 + (+as[2]); 
//             var break_out_min = (ss)/60;

//             //kondisi dari database untuk break in
//             var hhi = moment().format(this.state.jam_break_in);
//             var asa = hhi.split(':'); 
//             var ssa = (+asa[0]) * 60 * 60 + (+asa[1]) * 60 + (+asa[2]); 
//             var break_in_min = (ssa)/60;

//             //kondisi dari database untuk cekin
//             var hhis = moment().format(this.state.jam_cek_in);
//             var asas = hhis.split(':'); 
//             var ssas = (+asas[0]) * 60 * 60 + (+asas[1]) * 60 + (+asas[2]); 
//             var cek_in_min = (ssas)/60;

            

            
//             return (
//                 <TouchableOpacity onPress={() => minutes > cek_in_min && minutes <= break_out_min ? alert(`Belum waktunya istirahat `) : minutes > break_out_min && minutes <= break_in_min ? this.props.navigation.navigate('BreakOut', {kar: map, status: 'breakout'}) : alert(`Tidak bisa `) }>
//                     <ButtonIcon style={{backgroundColor: 'white'}} title="Istirahat" type="layanan" tema={this.props.user.tema} />
//                 </TouchableOpacity>
//             )
//         })
//     }

//     renderBreakIn() {
//         var hms = moment().format('HH:mm:ss');    // your input string
//             var a = hms.split(':'); // split it at the colons
//             // minutes are worth 60 seconds. Hours are worth 60 minutes.
//             var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
//             //if you want hours
//             var minutes = (seconds)/60;

//             //kondisi dari database untuk break out
//             var hh = moment().format(this.state.jam_break_out);
//             var as = hh.split(':'); 
//             var ss = (+as[0]) * 60 * 60 + (+as[1]) * 60 + (+as[2]); 
//             var break_out_min = (ss)/60;

//             //kondisi dari database untuk break in
//             var hhi = moment().format(this.state.jam_break_in);
//             var asa = hhi.split(':'); 
//             var ssa = (+asa[0]) * 60 * 60 + (+asa[1]) * 60 + (+asa[2]); 
//             var break_in_min = (ssa)/60;

//             //kondisi dari database untuk cekin
//             var hhis = moment().format(this.state.jam_cek_in);
//             var asas = hhis.split(':'); 
//             var ssas = (+asas[0]) * 60 * 60 + (+asas[1]) * 60 + (+asas[2]); 
//             var cek_in_min = (ssas)/60;
//         return this.state.presnowid.map((map) => {
//             const presnowidIs = this.state.presnowid.filter(item => item.break_out != null)
//             return (
//                 <TouchableOpacity onPress={() => 
//                     presnowidIs.length > 0  ? 
//                         ( 
//                         minutes > break_out_min && minutes <= break_in_min 
//                         ? 
//                         this.props.navigation.navigate('BreakOut', {kar: map, status: 'breakin'}) 
//                         : 
//                         alert(`Tidak bisa istirahat masuk`)
//                         ) 
//                     : 
//                     alert('Absensi Istirahat Terlebih Dahulu!')}>
//                     <ButtonIcon style={{backgroundColor: 'white'}} title="Masuk" type="layanan" tema={this.props.user.tema} />
//                 </TouchableOpacity>
//             )
//         })
//     }

//     renderReqNow() {
//         return this.state.reqnowid.map((map) => {
//             return (
//                 <TouchableOpacity onPress={() => 
//                 this.props.navigation.navigate('EditRequest', {
//                     item: map, 
//                     stat: map.status === 'Dinas Luar' | map.status === 'Pulang Awal' ? 'presnow' : 'izin'
//                 })
//                 }>
//                     <ButtonIcon title="Update" type="layanan" tema={this.props.user.tema} />
//                 </TouchableOpacity>
//             )
//         })
//     }
//     renderReqPresNow() {
//         return this.state.presnowid.map((map) => {
//             return (
//                 <TouchableOpacity onPress={() => this.props.navigation.navigate('Request', {
//                     stat : 'presnow', idpresnow : map.id_presensi
//                     })}>
//                     <ButtonIcon title="Request" type="layanan" tema={this.props.user.tema}/>
//                 </TouchableOpacity>
//             )
//         })
//     }

//     renderPulang() {
//         return this.state.presnowid.map((map) => {
//             var hms = moment().format('HH:mm:ss');    // your input string
//             var a = hms.split(':'); // split it at the colons
//             // minutes are worth 60 seconds. Hours are worth 60 minutes.
//             var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
//             //if you want hours
//             var minutes = (seconds)/60;

//             //kondisi dari database untuk break in
//             var hhi = moment().format(this.state.jam_cek_out);
//             var asa = hhi.split(':'); 
//             var ssa = (+asa[0]) * 60 * 60 + (+asa[1]) * 60 + (+asa[2]); 
//             var cekout = (ssa)/60;
//             // 960
//             return (
//                 <TouchableOpacity onPress = {() => {
//                     this.state.lapnowid.length <= 0 ? this.props.navigation.navigate('Laporan', alert('Anda belum membuat laporan'))
//                     : minutes <= cekout ? alert('Belum waktunya pulang!') 
//                     : this.state.belumLap.length > 0 & this.state.belumFeed.length > 0 ? this.setState({modalLaporan:true}) :  this.props.navigation.navigate('MapOut', {
//                             idpresnow : map.id_presensi
//                         })
//                     }}>
//                     <ButtonIcon title="Pulang" type="layanan" tema={this.props.user.tema}/>
//                 </TouchableOpacity>
//             )
//         })
//     }

//     openWhatsApp = () => {
//         let msg = "Assalamualaikum Developer App timKita, ";
//             let url =
//               "whatsapp://send?text=" +
//               msg +
//               "&phone=6282218738025"
//               ;
//             Linking.openURL(url)
//               .then(data => {
//                 console.log("WhatsApp Opened successfully " + data);
//               })
//               .catch(() => {
//                 alert("Make sure WhatsApp installed on your device");
//               });
          
       
//       };
//       openWhatsAppBawahan = (namas, nohp, msg) => {
//         // let msg = "Assalamualaikum " + namas;
//             let url =
//               "whatsapp://send?text=" +
//               msg +
//               "&phone=62" + nohp
//               ;
//             Linking.openURL(url)
//               .then(data => {
//                 console.log("WhatsApp Opened successfully " + data);
//               })
//               .catch(() => {
//                 alert("Make sure WhatsApp installed on your device");
//               });
          
       
//       };
//       sendPesan() {
//         // console.log('Mulai send Data');
    
//         AsyncStorage.getItem('token').then((token) => {
//           let dataToSend = {
//             id_karyawan: this.state.id_kar,
//             pesan: this.state.pesan,
//           };
//           let data = new FormData();
    
//           for (let key in dataToSend) {
//             data.append(key, dataToSend[key]);
//           }
//           console.log('Presensi masuk: ',data);
//           fetch('https://kilauindonesia.org/datakilau/api/posthub', {
//             method: 'POST',
//             headers: {
//               Authorization: `Bearer ${token}`,
//               Accept: 'application/json',
//               'Content-Type': 'multipart/form-data'
//             },
//             body: data,
//           })
//             .then((res) => res.json())
//             .then((resJson) => {
//               console.log(resJson);
//               if (resJson.status === 'sukses') {
//                 this.openWhatsAppBawahan(this.state.nama, this.state.nohp, this.state.pesan);
//               } else {
//                 alert(`Data Pesan gagal disimpan !!!`);
//               }
//             })
//             .catch((err) => console.log('dari catch send Data ===', err));
//         });
//       }

//       sendTema() {
//         // console.log('Mulai send Data');
    
//         AsyncStorage.getItem('token').then((token) => {
//           let dataToSend = [];
//           if(this.state.mode === 'mode') {
//           dataToSend = {
//             tema: this.state.tema,
//             mode: this.state.mode 
//           };
//         }else{
//             dataToSend = {
//                 color: this.state.color,
//                 mode: this.state.mode 
//               };

//         }
          
//           let data = new FormData();
    
//           for (let key in dataToSend) {
//             data.append(key, dataToSend[key]);
//           }
//           console.log('Presensi masuk: ',data);
//           fetch('https://kilauindonesia.org/datakilau/api/uptema/' + this.props.user.id, {
//             method: 'POST',
//             headers: {
//               Authorization: `Bearer ${token}`,
//               Accept: 'application/json',
//               'Content-Type': 'multipart/form-data'
//             },
//             body: data,
//           })
//             .then((res) => res.json())
//             .then((resJson) => {
//               console.log(resJson);
//               if (resJson.status === 'sukses') {
//                 this.props.navigation.replace('Home');
//               } else {
//                 alert(`Data tema gagal disimpan !!!`);
//               }
//             })
//             .catch((err) => console.log('dari catch send Data ===', err));
//         });
//       }
//     handleNotification (){
//             const pattern = [1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000, 1000, 2000];
//             PushNotification.configure({
//                 // (optional) Called when Token is generated (iOS and Android)
//                 onRegister: function (token) {
//                   console.log("TOKEN:", token);
//                 },
              
//                 // (required) Called when a remote is received or opened, or local notification is opened
//                 onNotification: function (notification) {
//                   console.log("NOTIFICATION:", notification);
              
//                   // process the notification
              
//                   // (required) Called when a remote is received or opened, or local notification is opened
//                   notification.finish(PushNotificationIOS.FetchResult.NoData);
//                 },
              
//                 // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
//                 onAction: function (notification) {
//                   console.log("ACTION:", notification.action);
//                   console.log("NOTIFICATION:", notification);
              
//                   // process the action
//                 },
              
//                 // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
//                 onRegistrationError: function(err) {
//                   console.error(err.message, err);
//                 },
              
//                 // IOS ONLY (optional): default: all - Permissions to register.
//                 permissions: {
//                   alert: true,
//                   badge: true,
//                   sound: true,
//                 },
              
//                 // Should the initial notification be popped automatically
//                 // default: true
//                 popInitialNotification: true,
              
//                 /**
//                  * (optional) default: true
//                  * - Specified if permissions (ios) and token (android and ios) will requested or not,
//                  * - if not, you must call PushNotificationsHandler.requestPermissions() later
//                  * - if you are not using remote notification or do not have Firebase installed, use this:
//                  *     requestPermissions: Platform.OS === 'ios'
//                  */
//                 requestPermissions: true,
//                 requestPermissions: Platform.OS === 'ios'
//               });
//               PushNotification.createChannel(
//                 {
//                   channelId: "1", // (required)
//                   channelName: "My channel", // (required)
//                   channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
//                   playSound: true, // (optional) default: true
//                   soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
//                   vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
//                 },
//                 (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//               );
//               this.state.notiffeed.map(item =>
//                 PushNotification.localNotification({
//                     channelId: "1",
//                     title: "Pemberitahuan!",
//                     message : item.nama_atasan,
//                     background: true,
//                     vibration: Vibration.vibrate(pattern),
        
//                 })
//             )
                
//             //   PushNotification.localNotification({
//             //     channelId: "1",
//             //     title: "Pemberitahuan!",
//             //     message : "listkih",
//             //     background: true
    
//             // })
            
//     }

    

//     render(){
//         const date= new Date()
//         const presnowid = this.state.presnowid.filter(item => item.break_in === null)
//         const reqnowidacc = this.state.reqnowid.filter(item => item.acc === '1')
//         const reqnow = this.state.reqnowjab.filter(item => item.acc === '0')
//         const { modalSebelumPulang, modalSetelahPulang, deskripsi, reqnowid, reqnowjab } = this.state;

//         var ca = moment().format('HH:mm:ss');
//         var c = ca.split(':');
//         var secondss = (+c[0]) * 60 * 60 + (+c[1]) * 60 + (+c[2]); 
//         var sekarang = (secondss)/60;

//         var ab = moment().format(this.state.jam_cek_out); 
//         var a = ab.split(':');
//         var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
//         var cekcek = (seconds)/60;

//         var ba = moment().format('00:15:00'); 
//         var b = ba.split(':');
//         var second = (+b[0]) * 60 * 60 + (+b[1]) * 60 + (+b[2]); 
//         var pul = (second)/60;

//         var kondisipulang = cekcek + pul;

//         const tamkur = this.state.tambah.length + this.state.kurang.length;

//         const jumjum = this.state.getget.length + this.state.getacc.length + this.state.getreq.length;
//         const range =  this.state.dua + this.state.empat + this.state.lima + this.state.satu + this.state.tiga;
//         const jj = range + this.state.enam;
//         return(
//             <View style={{ 
//             width: '100%',
//             height: '100%',
//             backgroundColor: this.props.user.tema === 1 ? '#111111' : '#fefefe'}}>
            
//             <View style={style.container}>
//                 <View style={{flexDirection:'row', position:'absolute', top:20, right:20,}}>
//                 <TouchableOpacity onPress={() => this.setState({modalhelp:true})} style={{ padding:8, paddingLeft:13, paddingRight:13, borderRadius:25, borderWidth:1, borderColor:this.props.user.tema === 0 ? '#f2f2f2' : '#111111', backgroundColor:this.props.user.tema === 0 ? '#fdfdfd' : '#1b1e23'}}>
//                     <Help/>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.setState({modalTema:true})} style={{ padding:8, paddingLeft:13, paddingRight:0, marginLeft:5 }}>
//                     <ListTema/>
//                 </TouchableOpacity>
//                 </View>
//                 {/* <View style={{position:'absolute',top:30, right:20, width:15, height:15, borderRadius:15, borderWidth:1, borderColor:WARNA_UTAMA, justifyContent:'center', alignItems:'center'}}>
//                     <View style={{width:10, height:10, borderRadius:10, backgroundColor:WARNA_UTAMA}} />
//                 </View> */}
                
//                 <Modal 
//                     animationType = {"fade"} 
//                     transparent = {true}
//                     visible = {jj < 12 ?  true : false}>
//                          <View style={style.ModalCont233}>
//                              <View style={{width:'80%', justifyContent:'center', alignItems:'center', padding:20, backgroundColor:'#fff', borderRadius:5}}>
//                                 <View style={{width:'80%', height:10, borderColor:'#51C9C2', borderWidth:1, borderRadius:10, justifyContent:'center'}}>
//                                     <View style={{height:10, backgroundColor:'#51C9C2', width:range*10+'%', borderRadius:10}}></View>
//                                 </View>
//                                 <Text style={{marginTop:10, fontSize:12, color:'#777'}}>{range < 10 ? 'Sedang memuat data...' : 'Mohon tunggu...' }({range*10}%)</Text>

//                              </View>
//                          </View>
//                 </Modal>
//                 <Modal 
//                     animationType = {"slide"} 
//                     transparent = {true}
//                     visible = {this.state.modalhelp}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
//                     <TouchableOpacity activeOpacity={1.0} onPress={()=> this.setState({modalhelp:false})} style={style.ModalCont2}>
//                         <View style={{position:'absolute',
//                         bottom:0,
//                         left:0, 
//                         right:0,
//                         backgroundColor: this.props.user.tema === 0 ? '#ffffff' : '#1b1e23',
//                         // flexDirection: 'row',
//                         borderTopLeftRadius:30,
//                         borderTopRightRadius:30,
//                         height: '40%',
//                         shadowColor: "#333",
//                         shadowOffset: {
//                         width: 1,
//                         height: 1,
//                         },
//                         shadowOpacity: 0.3,
//                         shadowRadius: 2,
                    
//                         elevation: 3,
//                         alignItems:'center'}}>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.setState({ modalhelp: false }))} 
//                         style={{justifyContent:'center', alignItems:'center'}}>
//                             <View style={{height: 1, width:15, backgroundColor: '#aaaaaa', marginTop:20}} />
//                             <View style={{height: 1, width:30, backgroundColor: '#aaaaaa', marginTop:5}} />
//                         </TouchableOpacity>
//                         <View style={{height: 1, backgroundColor: '#f4f4f4', marginTop:10}} />
//                         <View style={{width:'100%'}}>
//                         <Text style={{fontSize:15, marginLeft:25, marginTop:10, fontWeight:'bold', color:this.props.user.tema === 0 ? '#000000' : '#e7e7e7'}}>Kami akan membantu kamu!</Text>
//                         </View>
//                         <Text style={{fontSize:13, marginLeft:20, marginTop:10, marginRight:20, color:this.props.user.tema === 0 ? '#000000' : '#e7e7e7'}}>Kamu dapat chat dengan kami secara langsung, atau mengunjungi
//                         Pusat Bantuan kami untuk mempelajari lebih banyak tentang timKita.</Text>
//                         <TouchableOpacity onPress={() => this.openWhatsApp()} style={{width:'85%',marginTop:15, backgroundColor:this.props.user.tema === 0 ? '#51C9C2' : '#029088', height:40, justifyContent:'center', alignItems:'center'}}>
//                             <Text style={{fontWeight:'bold', color:this.props.user.tema === 0 ? '#ffffff' : '#000000'}}>Chat Dengan Developer</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('PusatBantuan')} style={{width:'85%',marginTop:15, 
//                         borderColor:'#51C9C2', borderWidth:1, backgroundColor:this.props.user.tema === 0 ? '#ffffff' : '#aeaeae', height:40, justifyContent:'center', alignItems:'center'}}>
//                             <Text style={{fontWeight:'bold', color:this.props.user.tema === 0 ? '#51C9C2' : '#029088'}}>Pusat Bantuan</Text>
//                         </TouchableOpacity>

//                         </View>
//                     </TouchableOpacity>
//                 </Modal>
//                 <Modal 
//                     animationType = {"fade"} 
//                     transparent = {true}
//                     visible = {this.state.modalTema}
//                     onRequestClose = {() => {console.log("Modal has been closed.") } }>
                    
//                     <TouchableOpacity activeOpacity={1.0} onPress={()=> this.setState({modalTema:false})} style={style.ModalCont21}>
//                         <View style={{position:'absolute',
//                         top:10,
//                         right:10, 
//                         backgroundColor: this.props.user.tema === 0 ? '#ffffff' : '#1b1e23',
//                         // flexDirection: 'row',
//                         height: 200,
//                         width:160,
//                         shadowColor: "#333",
//                         shadowOffset: {
//                         width: 1,
//                         height: 1,
//                         },
//                         shadowOpacity: 0.3,
//                         shadowRadius: 2,
                    
//                         elevation: 3,}}>
                        
//                         <View style={{flexDirection:'column', height:'100%', justifyContent:'center'}}>
//                             <Text style={{marginLeft:15, marginTop:10}}>Light/Dark</Text>
//                             <TouchableOpacity onPress={() => {this.sendTema(), this.setState({ tema: 0, mode:'mode' })}} style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, marginTop:5}}>
//                                 <View style={{marginRight:5,height:15, width:15, borderRadius:15, backgroundColor:'#ffffff', borderColor:this.props.user.tema === 0 ? '#000000' : '#ffffff', borderWidth:1}}></View>
//                                 <Text style={{color:this.props.user.tema === 0 ? '#000000' : '#ffffff'}}>Light Mode</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => {this.sendTema(), this.setState({ tema: 1, mode:'mode' })}}  style={{flexDirection:'row', alignItems:'center', marginTop:10, marginLeft:15, marginRight:15}}>
//                                 <View style={{marginRight:5,height:15, width:15, borderRadius:15, backgroundColor:'#000000', borderColor: this.props.user.tema === 0 ? '#000000' : '#ffffff', borderWidth:1}}></View>
//                                 <Text style={{color:this.props.user.tema === 0 ? '#000000' : '#ffffff'}}>Dark Mode</Text>
//                             </TouchableOpacity>
//                             <Text style={{marginLeft:15, marginTop:10}}>Colors</Text>
//                             <TouchableOpacity onPress={() => {this.sendTema(), this.setState({ color: 1, mode:'color' })}} style={{flexDirection:'row', alignItems:'center', marginLeft:15, marginRight:15, marginTop:5}}>
//                                 <View style={{marginRight:5,height:15, width:15, borderRadius:15, backgroundColor:'#604B9A', borderColor:this.props.user.tema === 0 ? '#000000' : '#ffffff', borderWidth:1}}></View>
//                                 <Text style={{color:this.props.user.tema === 0 ? '#000000' : '#ffffff'}}>Purple</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity onPress={() => {this.sendTema(), this.setState({ color: 0, mode:'color' })}}  style={{flexDirection:'row', alignItems:'center', marginTop:10, marginLeft:15, marginRight:15}}>
//                                 <View style={{marginRight:5,height:15, width:15, borderRadius:15, backgroundColor:'#51C9C2', borderColor: this.props.user.tema === 0 ? '#000000' : '#ffffff', borderWidth:1}}></View>
//                                 <Text style={{color:this.props.user.tema === 0 ? '#000000' : '#ffffff'}}>Green</Text>
//                             </TouchableOpacity>
//                         </View>
//                         </View>
//                     </TouchableOpacity>
//                 </Modal>
//                 <Modal 
//                     animationType = {"slide"} 
//                     transparent = {true}
//                     visible = {this.state.modalLaporan}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
//                     <View style={style.ModalCont2}>
//                         <View style={{
//                             position:'absolute',
//                             bottom:0,
//                             left:0, 
//                             right:0,
//                             backgroundColor: this.props.user.tema === 0 ? '#ffffff' : '#1b1e23',
//                             height: '100%',
//                             alignItems:'center'
//                         }}>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.setState({ modalLaporan: false }))} 
//                         style={{position:'absolute', right:20, top:20}}>
//                             <Close />
//                         </TouchableOpacity>
//                         <Text style={{position:'absolute', left:20, top:25, color:'#4F4D4D', fontSize:16, fontWeight:'bold'}}>Laporan Bawahan</Text>
//                         <View style={{height:5, backgroundColor:'#fafafa', width:'100%', marginTop:70}} />
//                         <View style={{width:'100%'}}>
//                         <Text style={{marginLeft:20, marginTop:15, color:'#4F4D4D', fontSize:14}}>Belum memberikan laporan</Text>
//                         </View>
//                         <FlatList style={{marginBottom:0, marginTop:10}}
//                                 refreshControl={
//                                 <RefreshControl
//                                     refreshing={this.state.refreshing}
//                                     onRefresh={() => this.onRefresh()}
//                                 />
//                                 }
//                                 data={this.state.belumLap}
//                                 renderItem={
//                                 ({item})=>
//                                 <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:5,}}>
//                                 <TouchableOpacity onPress={() => {sekarang < kondisipulang ? alert('Tunggu 15 menit dari waktu pulang kerja!') : this.setState({modalPesan:true, nama: item.nama, nohp: item.no_hp, id_kar:item.id_karyawan}), this.getBelumLaporan()}} 
//                                 style={style.cardtopLap}>
//                                 <View style={style.backList}>
//                                     <UserKar style={{marginTop:16}}/>
//                                     <Text style={{fontWeight:'bold', fontSize:12, marginLeft:10, width:'90%', height:50, textAlignVertical:'center', color : '#000000' }}>{item.nama} <Text style={{color: '#d4d4d4',fontSize:12 }}>({item.jabatan})</Text>  </Text> 
                                    
//                                 </View>
//                                 </TouchableOpacity>
//                                 </View>
//                                 }
//                                 keyExtractor={
//                                 (item, index) => index.toString()}
//                                 showsVerticalScrollIndicator={false}
//                                 ListEmptyComponent={() =>
//                                 <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '50%' }}>
//                                 <Text style={{ fontSize: 14, color: '#7E7E7E' }}>Belum Ada Laporan</Text>
//                                 </View>
//                                 }
//                             />
//                         <View style={{height:5, backgroundColor:'#fafafa', width:'100%', marginTop:10}} />
//                         <View style={{width:'100%'}}>
//                         <Text style={{marginLeft:20, marginTop:15, color:'#4F4D4D', fontSize:14}}>Belum diberikan feedback</Text>
//                         </View>
//                         <FlatList style={{marginBottom:0, marginTop:10}}
//                                 refreshControl={
//                                 <RefreshControl
//                                     refreshing={this.state.refreshing}
//                                     onRefresh={() => this.onRefresh()}
//                                 />
//                                 }
//                                 data={this.state.belumFeed}
//                                 renderItem={
//                                 ({item})=>
//                                 <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:5,}}>
//                                 <TouchableOpacity onPress={() => this.props.navigation.navigate('LapDetailFeed', {link_lap:item.link_lap, sec_vn:item.sec_vn, vn:item.vn, id_laporan: item.id_laporan, nama: item.nama, lampiran: item.lampiran, ket : item.ket, tgl : item.created_at, target:item.target, capaian:item.capaian})} 
//                                 style={style.cardtopLap}>
//                                 <View style={style.backList}>
//                                     <UserKar style={{marginTop:16}}/>
//                                     <Text style={{fontWeight:'bold', fontSize:12, marginLeft:10, width:'90%', height:50, textAlignVertical:'center', color : '#000000' }}>{item.nama} <Text style={{color: '#d4d4d4',fontSize:12 }}>({item.jabatan})</Text>  </Text> 
                                    
//                                 </View>
//                                 </TouchableOpacity>
//                                 </View>
//                                 }
//                                 keyExtractor={
//                                 (item, index) => index.toString()}
//                                 showsVerticalScrollIndicator={false}
//                                 ListEmptyComponent={() =>
//                                 <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '50%' }}>
//                                 <Text style={{ fontSize: 14, color: '#7E7E7E' }}>Belum Ada Laporan</Text>
//                                 </View>
//                                 }
//                             />
//                         </View>
//                     </View>
//                 </Modal>
//                 <View style={style.grouptop}>
//                     <Text style={style.texttop}>Hello,</Text>
//                     <Text style={{fontSize:18,
//                     fontWeight: 'bold',
//                     color: this.props.user.tema === 0 ? '#777777' : '#ffffff',
//                     width:'75%',
//                     marginTop:-5}}>{this.props.user.name}</Text>
//                 </View>
//                 <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginTop:10}} />
//                 {/* <View style={{backgroundColor:WARNA_UTAMA, height:20, width:'50%', position:'absolute', top:0, right:0, borderBottomLeftRadius:50}}></View> */}
//                 <ScrollView style={{marginBottom:20}}
//                 vertical={true}
//                  refreshControl={
//                     <RefreshControl
//                         refreshing={this.state.refreshing}
//                         onRefresh={() => this.onRefresh()}
//                     />
//                     }
//                 > 
//                 <View style={{justifyContent: 'center',alignItems: 'center',marginTop:20}}>
//                     <View style={style.cardtop}>
//                     <ImageBackground source={this.props.user.color === 0 ? this.props.user.tema === 0 ? Bgbg1 : Bgbg : BgLaundry} style={style.cardtop2}>
//                     <View style={style.groupdatetime}>
//                         <Image source={Calendar}/>
//                         <View style={{marginLeft:10}}>
//                             <Text style={style.texttime}>{('0' + this.state.curHours).slice(-2)}:{('0' + this.state.curMinutes).slice(-2)}:{('0' + this.state.curSecound).slice(-2)}</Text>
//                             { this.state.curHours === 14 ?
                               
//                                 // Vibration.vibrate(1 * 1000)
//                                 <View></View>

//                             :
//                                 <View></View>
//                             }
//                             <Text style={style.textdate}>{moment(date).format("dddd, DD MMMM YYYY")}</Text>
//                         </View>
//                     </View>
                    
//                     <View style={style.iconLay}>
//                                 <View >
//                                     <View style={{flexDirection:'row', flexWrap:'wrap' }}>
//                                         <JamGreen/>
//                                         <View style={{marginLeft:10}}>
//                                             <Text style={style.textInOut}>Masuk</Text>
//                                             <Text style={style.timeInOut}>{this.state.cek_in}</Text>
//                                         </View>                    
//                                     </View>
//                                 </View>
//                                 <View >
//                                     <View style={{flexDirection:'row', flexWrap:'wrap' }}>
//                                         <JamRed/>
//                                         <View style={{marginLeft:10}}>
//                                             <Text style={style.textInOut}>Pulang</Text>
//                                             <Text style={style.timeInOut}>{this.state.cek_out}</Text>
//                                         </View>
//                                     </View>
//                                 </View>
//                         </View>
//                     </ImageBackground> 
//                     </View>
//                 </View>
//                 <View style={style.pesananAktif}>
//                     <View style={style.iconLayanan}>
//                         {presnowid.length > 0 && this.props.user.jenis === 'staf' && reqnowidacc.length === 0 ?
//                             <View>
//                             {this.renderBreakOut()}
//                             </View>
//                         :
//                             <TouchableOpacity onPress={() => this.props.navigation.navigate('Maps')}>
//                                 <ButtonIcon style={{backgroundColor: 'white'}} title="Masuk" type="layanan" tema={this.props.user.tema} />
//                             </TouchableOpacity>
//                         }
                                                
//                         {presnowid.length > 0 && this.props.user.jenis === 'staf' && reqnowidacc.length === 0 ?
//                             <View>
//                             {this.renderBreakIn()}
//                             </View>
//                         : this.state.presnowid.length > 0 ?
//                             <View>
//                             {this.renderPulang()}
//                             </View>
//                         :
//                             <TouchableOpacity onPress = {() => alert('Anda belum melakukan presensi masuk !') }>
//                                 <ButtonIcon title="Pulang" type="layanan" tema={this.props.user.tema} />
//                             </TouchableOpacity>
//                         }
                        
//                         {/* {reqnowid.length > 0 ?
//                             <View>
//                             {this.renderReqNow()}
//                             </View>
//                         : this.state.presnowid.length > 0 ?
//                             <View>
//                             {this.renderReqPresNow()}
//                             </View>
//                         :
//                             <TouchableOpacity  onPress={() => this.props.navigation.navigate('Request', {stat : 'izin'})}>
//                                 <ButtonIcon title="Request" type="layanan" tema={this.props.user.tema} />
//                             </TouchableOpacity>
//                         } */}
//                             <TouchableOpacity  onPress={() => this.props.navigation.navigate('ListRequest')}>
//                                 <ButtonIcon title="Request" type="layanan" tema={this.props.user.tema} acc={this.state.filacc.length} />
//                             </TouchableOpacity>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Riwayat')}>
//                                 <ButtonIcon title="Presensi" type="layanan" tema={this.props.user.tema} />
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//                 <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginLeft:0, marginRight:0}} />
//                 {/* <View style={{padding:10, marginBottom:0}}>
//                     <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', marginLeft:20, marginRight:20, marginTop:10}}>
//                         <Text style={{fontSize:14,width:'50%'}}>Presensi Karyawan</Text>
//                         <TouchableOpacity style={{width:'50%'}} 
//                         onPress={() => this.props.navigation.navigate('Riwayat')}>
//                             <View style={{flexDirection:'row', flexWrap:'wrap', position:'absolute', right:0, alignItems:'center'}}>
//                                 <Text style={{color:WARNA_UTAMA, fontWeight:'bold', fontSize:14}}>Riwayat Presensi </Text><ChevRight/>
//                             </View>
                        
//                         </TouchableOpacity>
//                     </View>
//                 </View> */}
//                 {this.props.user.presensi === 'admin' | this.props.user.presensi === 'keuangan pusat' ?
//                  <ScrollView horizontal={true} style={{width:'100%'}}>
//                      <View style={{flexDirection:'row'}}>
//                 {
//                  this.state.perubahan.length != 0 | tamkur != 0 ?
//                     <View style={{width:300, alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:10}}>
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Pembayaran')} style={{borderColor:'#FFB63E', borderWidth:0.5, backgroundColor:this.props.user.tema === 0 ? '#FF6B6B' : '#FF3737', width:'85%', height:60, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                             <Image source={WarningChanges} style={{width:30, height:30, marginLeft:10}}/>
//                             <View style={{padding:10}}>
//                                 <Text style={{color: '#ffffff',fontSize:12, fontWeight:'bold'}}>Anda perlu melakukan pembayaran!</Text>
//                                 <View style={{flexDirection:'row', alignItems:'center', marginTop:0}}>
//                                         <Text style={{color:'#ffffff',fontSize:9}}> {tamkur}</Text>
//                                         <Text style={{fontSize:10, color:'#ffffff'}}> Karyawan</Text>
//                                 </View>
//                             </View>
//                     </TouchableOpacity>
//                     </View>
//                     :
//                     <View/>
//                 }
//                 {
//                  this.state.perubahan.length != 0 | tamkur != 0 ?
//                     <View style={{marginLeft:-35, width:300, alignItems:'center', justifyContent:'center', marginTop:10, marginBottom:10}}>
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Jabatan')} style={{borderColor:'#FFB63E', borderWidth:0.5, backgroundColor:this.props.user.tema === 0 ? '#FF6B6B' : '#FF3737', width:'85%', height:60, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                             <Image source={WarningChanges} style={{width:30, height:30, marginLeft:10}}/>
//                             <View style={{padding:10}}>
//                                 <Text style={{color: '#ffffff',fontSize:12, fontWeight:'bold'}}>Anda perlu melakukan perubahan!</Text>
//                                 <View style={{flexDirection:'row', alignItems:'center', marginTop:0}}>
//                                         {/* <View style={{height:6, width:6, backgroundColor:'#EE1414', borderRadius:6}}/> */}
//                                         <Text style={{color:'#ffffff',fontSize:9}}> {this.state.perubahan.length}</Text>
//                                         <Text style={{fontSize:10, color:'#ffffff'}}> Karyawan</Text>
//                                 </View>
//                             </View>
//                     </TouchableOpacity>
//                     </View>
//                     :
//                     <View/>
//                 }
//                 </View>
//                 </ScrollView>
//                 :
//                 <View/>
//                 }
//                 {this.props.user.presensi === 'admin' ?
//                  this.state.perubahan.length != 0 ?
//                 <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginLeft:0, marginRight:0}} />
//                 :
//                 <View/>
//                 :
//                 <View/>
//                 }
//                 <Collapse
//                     style={{maxHeight:200}} 
//                     isExpanded={this.state.collapse} 
//                     onToggle={(isExpanded)=>this.setState({collapse: isExpanded})}
//                     >
//                     <CollapseHeader >
//                         <View style={{flexDirection:'column', marginTop:10}}>
//                         <Text style={{position:'absolute', top:0, left:30, color:this.props.user.tema === 0 ? '#777777' : '#ffffff'}}>Presensi Saya</Text>
//                         <View style={{position:'absolute', top:10, right:30}}>
//                         {this.state.collapse == false ?
//                             <ChevBot/>
//                         :
//                             <ChevTop/>
//                         }
//                         </View>
//                         <View style={{marginTop:25,marginLeft:20, marginRight:20, padding:10, flexDirection:'row',justifyContent:'space-between'}}>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#51C95D', fontWeight:'bold'}}>{this.state.hadirbaw}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> Hadir</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#FFB63E', fontWeight:'bold'}}>{this.state.terlambatbaw}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> Terlambat</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#FF845D', fontWeight:'bold'}}>{this.state.bolosbaw}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> Bolos</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#777777', fontWeight:'bold'}}>{this.state.sakitbaw}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> Sakit</Text>
//                             </View>
                            
//                         </View>
//                         </View>
//                     </CollapseHeader>
//                     <CollapseBody>
//                     <AccordionList
//                         horizontal={true}
//                         key={this.state.list}
//                         list={this.state.list}
//                         header={this._head}
//                         body={this._body}
//                         keyExtractor={item => item.key}
//                     />
//                     <View style={{marginTop:-10,marginLeft:20, marginRight:20, padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                            
//                             <View style={{flexDirection:'row'}}>
//                             <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
//                                 <View style={{borderColor:'#9BD093', borderRadius:35, padding:10, borderWidth:1, height:60, width:60, justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#7E7E7E', fontSize:12, fontWeight:'bold'}}>{this.state.perdinbaw}</Text>
//                                 <Text style={{color:'#7E7E7E', fontSize:10}}>Perdin</Text>
//                                 </View>
//                             </View>
//                             <View style={{flexDirection:'column', justifyContent:'center'}}>
//                             <View style={{flexDirection:'row', alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#1EB6DE'}}/>
//                                     <Text style={{color:'#7E7E7E',fontSize:11}}> {this.state.cutipentingbaw}</Text>
//                                     <Text style={{fontSize:11, color:'#777777'}}> Cuti Penting</Text>
//                                 </View>
//                                 <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#FF845D'}}/>
//                                     <Text style={{color:'#7E7E7E',fontSize:11}}> {this.state.cutibaw}</Text>
//                                     <Text style={{fontSize:11, color:'#777777'}}> Cuti</Text>
//                                 </View>
//                                 </View>
//                             </View>
//                             <View style={{flexDirection:'column', justifyContent:'center'}}>
                                
//                                 <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
//                                     <TouchableOpacity style={{height:25, width:80, 
//                                         backgroundColor:'#51C9C2', borderColor:'#51C9C2', 
//                                         borderWidth:1, borderRadius:5, justifyContent:'center', alignItems:'center'}}
//                                         onPress={() => this.props.navigation.navigate('Riwayat')}>
//                                             <Text style={{fontSize:11, color:'#ffffff'}}>Semua</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                         <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginLeft:0, marginRight:0}} />
//                         {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:30, marginRight:30, marginBottom:5, marginTop:5}}>
//                             <Text style={{color:'#7E7E7E', fontSize:12, fontWeight:'bold'}}>Tanggal</Text>
//                             <Text style={{fontSize:12, color:'#7E7E7E', fontWeight:'bold'}}>Jam</Text>
//                             <Text style={{fontSize:12, color:'#7E7E7E', fontWeight:'bold'}}>Status</Text>
//                         </View> */}
//                     </CollapseBody>
//                 </Collapse>
                
//                 <ScrollView style={{marginLeft:25, marginRight:25, paddingBottom:10, paddingTop:5, marginTop:5, marginBottom:0}} horizontal={true} >
//                     {this.state.getLapBaw.length === 0 ?
//                     <View/>
//                     :
//                     <TouchableOpacity onPress={() => {this.setState({modalLaporan:true})}} style={{backgroundColor: this.props.user.color === 0 ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : '#604B9A', width:250, height:70, marginRight:10, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                         <Image source={ReportBaw} style={{width:50, height:50, marginLeft:10}}/>
//                         <View style={{padding:10}}>
//                             <Text style={{color: 'white',fontSize:14, fontWeight:'bold', marginLeft:5, marginTop:-3}}>Laporan Bawahan</Text>
//                                 <View style={{flexDirection:'row', alignItems:'center', marginTop:3}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#EE1414'}}/>
//                                     <Text style={{color:'#ffffff',fontSize:11}}> {this.state.belumLap.length}</Text>
//                                     <Text style={{fontSize:11, color:'#ffffff'}}> Belum Laporan</Text>
//                                 </View>
//                                 <View style={{flexDirection:'row', marginTop:0, alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#FFB63E'}}/>
//                                     <Text style={{color:'#ffffff',fontSize:11}}> {this.state.belumFeed.length}</Text>
//                                     <Text style={{fontSize:11, color:'#ffffff'}}> Belum diberikan feedback</Text>
//                                 </View>
//                                 {/* <View style={{flexDirection:'row', marginTop:0, alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#61CDE9' }}/>
//                                     <Text style={{color:'#ffffff',fontSize:11}}> {this.state.belumFeed.length}</Text>
//                                     <Text style={{fontSize:11, color:'#ffffff'}}> Sudah Dihubungi</Text>
//                                 </View> */}
//                         </View>
//                     </TouchableOpacity>
//                     }
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun', {modal:false})} style={{backgroundColor:this.props.user.color === 0 ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : '#604B9A', width:250, height:70, marginRight:10, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                         <Image source={Penilaian} style={{width:50, height:50, marginLeft:10}}/>
//                         <View style={{padding:10}}>
//                             <Text style={{color: 'white',fontSize:14, fontWeight:'bold', marginLeft:5}}>Berikan penilaian kamu!</Text>
//                             <Text style={{color: 'white',fontSize:10, marginLeft:5, marginRight:5, width:'90%'}}>Kritik dan saran untuk aplikasi timKita</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Gaji')} style={{backgroundColor:this.props.user.color === 0 ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : '#604B9A', width:250, height:70, marginRight:10, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                         <Image source={Salary} style={{width:50, height:50, marginLeft:10}}/>
//                         <View style={{padding:10}}>
//                             <Text style={{color: 'white',fontSize:14, fontWeight:'bold', marginLeft:5}}>Gaji Saya</Text>
//                             <Text style={{color: 'white',fontSize:10, marginLeft:5, marginRight:5, width:'90%'}}>Kamu bisa melihat riwayat gaji kamu disini</Text>
//                         </View>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Laporan')} style={{backgroundColor:this.props.user.color === 0 ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : '#604B9A', width:250, height:70, marginRight:10, borderRadius:5, flexDirection:'row', alignItems:'center'}}>
//                         <Image source={Report} style={{width:50, height:50, marginLeft:10}}/>
//                         <View style={{padding:10}}>
//                             <Text style={{color: 'white',fontSize:14, fontWeight:'bold', marginLeft:5}}>Laporan Pekerjaan</Text>
//                             <Text style={{color: 'white',fontSize:10, marginLeft:5, marginRight:5, width:'90%'}}>Buat Laporan Pekerjaanmu sebelum pulang!</Text>
//                         </View>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => this.setState({modalhelp:true})} style={{backgroundColor:this.props.user.color === 0 ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : '#604B9A', width:250, height:70, borderRadius:5, marginRight:10, flexDirection:'row', alignItems:'center'}}>
//                         <Image source={Core} style={{width:50, height:50, marginLeft:10}}/>
//                         <View style={{padding:10}}>
//                             <Text style={{color: 'white',fontSize:14, fontWeight:'bold', marginLeft:5}}>Pusat Bantuan</Text>
//                             <Text style={{color: 'white',fontSize:10, marginLeft:5, marginRight:5, width:'90%'}}>Panduan untuk menggunakan Aplikasi timKita</Text>
//                         </View>
//                     </TouchableOpacity>
//                 </ScrollView>
//                 {this.state.getLapBaw.length === 0 ?
//                     <View/>
//                 :
//                 <Collapse
//                     style={{maxHeight:200}} 
//                     isExpanded={this.state.collapseBaw} 
//                     onToggle={(isExpanded)=>this.setState({collapseBaw: isExpanded})}
//                     >
//                     <CollapseHeader >
//                         <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginLeft:0, marginRight:0}} />
//                         <View style={{flexDirection:'column', marginTop:10}}>
//                         <Text style={{position:'absolute', top:0, left:30, color:this.props.user.tema === 0 ? '#777777' : '#ffffff'}}>Presensi Karyawan</Text>
//                         <View style={{position:'absolute', top:10, right:30}}>
//                         {this.state.collapseBaw == false ?
//                             <ChevBot/>
//                         :
//                             <ChevTop/>
//                         }
//                         </View>
//                         <View style={{marginTop:25,marginLeft:20, marginRight:20, padding:10, flexDirection:'row',justifyContent:'space-between'}}>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#51C95D', fontWeight:'bold'}}>{this.state.jumlah4}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> {this.state.status4}</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#FFB63E', fontWeight:'bold'}}>{this.state.jumlah7}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> {this.state.status7}</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#FF845D', fontWeight:'bold'}}>{this.state.jumlah1}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> {this.state.status1}</Text>
//                             </View>
//                             <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#777777', fontWeight:'bold'}}>{this.state.jumlah6}</Text>
//                                 <Text style={{fontSize:11, color:'#777777'}}> {this.state.status6}</Text>
//                             </View>
                            
//                         </View>
//                         </View>
//                     </CollapseHeader>
//                     <CollapseBody>
//                     <AccordionList
//                         horizontal={true}
//                         key={this.state.list}
//                         list={this.state.list}
//                         header={this._head}
//                         body={this._body}
//                         keyExtractor={item => item.key}
//                     />
//                     <View style={{marginTop:-10,marginLeft:20, marginRight:20, padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                            
//                             <View style={{flexDirection:'row'}}>
//                             <View style={{flexDirection:'row', alignItems:'center', marginRight:20}}>
//                                 <View style={{borderColor:'#9BD093', borderRadius:35, padding:10, borderWidth:1, height:60, width:60, justifyContent:'center', alignItems:'center'}}>
//                                 <Text style={{color:'#7E7E7E', fontSize:12, fontWeight:'bold'}}>{this.state.jumlah5}</Text>
//                                 <Text style={{color:'#7E7E7E', fontSize:10}}>{this.state.status5}</Text>
//                                 </View>
//                             </View>
//                             <View style={{flexDirection:'column', justifyContent:'center'}}>
//                             <View style={{flexDirection:'row', alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#1EB6DE'}}/>
//                                     <Text style={{color:'#7E7E7E',fontSize:11}}> {this.state.jumlah3}</Text>
//                                     <Text style={{fontSize:11, color:'#777777'}}> {this.state.status3}</Text>
//                                 </View>
//                                 <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
//                                     <View style={{height:8, width:8, backgroundColor:'#FF845D'}}/>
//                                     <Text style={{color:'#7E7E7E',fontSize:11}}> {this.state.jumlah2}</Text>
//                                     <Text style={{fontSize:11, color:'#777777'}}> {this.state.status2}</Text>
//                             </View>
//                             </View>
//                             </View>
//                             <View style={{flexDirection:'column', justifyContent:'center'}}>
                                
//                                 <View style={{flexDirection:'row', marginTop:5, alignItems:'center'}}>
//                                     <TouchableOpacity style={{height:25, width:80, 
//                                         backgroundColor:'#51C9C2', borderColor:'#51C9C2', 
//                                         borderWidth:1, borderRadius:5, justifyContent:'center', alignItems:'center'}}
//                                         onPress={() => this.props.navigation.navigate('RiwayatAtasan')}>
//                                             <Text style={{fontSize:11, color:'#ffffff'}}>Semua</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </View>
//                         {/* <View style={{height: 7, backgroundColor: '#f4f4f4', marginLeft:0, marginRight:0}} /> */}
//                         {/* <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:30, marginRight:30, marginBottom:5, marginTop:5}}>
//                             <Text style={{color:'#7E7E7E', fontSize:12, fontWeight:'bold'}}>Tanggal</Text>
//                             <Text style={{fontSize:12, color:'#7E7E7E', fontWeight:'bold'}}>Jam</Text>
//                             <Text style={{fontSize:12, color:'#7E7E7E', fontWeight:'bold'}}>Status</Text>
//                         </View> */}
//                     </CollapseBody>
//                 </Collapse>
//                 }
//                 <View style={{height: 7, backgroundColor: this.props.user.tema === 0 ? '#f4f4f4' : '#1b1e23', marginLeft:0, marginRight:0}} />
                
//                 <Text style={{marginLeft:30, marginTop:15, marginBottom:5, color:this.props.user.tema === 0 ? '#777777' : '#ffffff'}}>Presensi Bulan Ini</Text>
//                 <FlatList style={{marginLeft:25, marginRight:25, maxHeight:'30%', marginBottom:15}}
//                     horizontal={true}
//                     data={this.state.riwayat}
//                     renderItem={({item})=>
//                     // this.setState({ modalPresensi: true, id_req: item.id_request,jm: item.cek_in, ji: item.break_in, jo: item.break_out, jp: item.cek_out, st: item.status, kt:item.ket, fm: item.foto, fo: item.foto_out})
//                         <TouchableOpacity style={{justifyContent:'center', alignItems:'center'}} onPress={() => this.setState({ modalPresensi: true, id_req: item.id_request,jm: item.cek_in, ji: item.break_in, jo: item.break_out, jp: item.cek_out, st: item.status, kt:item.ket, fm: item.foto, fo: item.foto_out})  }>
//                             <View style={this.props.user.tema === 0 ? style.borderAbsensiUn : style.borderAbsensiUnDark}>
//                                 {item.acc === '0' ?
//                                 <View style={{width:'35%',marginLeft:7, marginTop:3, marginBottom:-5, height:3, backgroundColor: this.props.user.tema === 0 ? '#FFB63E' : '#F6A116', borderRadius:10}} />
//                                 :
//                                 <View></View>
//                                 }
//                                 <View style={{flexDirection:'row', justifyContent:'space-between'}}>
//                                     <Text style={{color:this.props.user.tema === 0 ? '#4F4D4D' : '#fafafa',marginLeft:10, marginTop:5, fontSize:16, fontWeight:'bold'}}>{moment(item.created).format("DD")}</Text>
//                                     {this.props.user.tema === 0 ?
//                                     <ChevRightGrey style={{marginRight:10, marginTop:10,}}/>
//                                     :
//                                     <ChevRightGreyDark style={{marginRight:10, marginTop:10,}}/>
//                                     }
//                                 </View>
//                                 <Text style={{fontSize:10,marginLeft:10, marginTop:-2, color:this.props.user.tema === 0 ? '#4F4D4D' : '#fafafa',fontWeight:'bold' }}>{moment(item.created).format("dddd")}</Text>
                                
//                                 <Text style={{fontSize:10, marginLeft:10, color:this.props.user.tema === 0 ? '#4F4D4D' : '#fafafa'}}>{item.status}</Text>
//                                 <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
//                                 <View style={{width:'85%', height:3, backgroundColor:item.status=== 'Hadir' ? this.props.user.tema === 0 ? '#51C9C2' : '#029088' : item.status === 'Perdin' ? '#F5564A' : item.status === 'Cuti' | item.status === 'Sakit' ? '#FFA415' : '#F5564A', borderRadius:10}} />
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     }
//                     keyExtractor={(item, index) => index.toString()}
//                     showsVerticalScrollIndicator={false}
//                     ListEmptyComponent={() =>
//                         <View style={{ width:300, justifyContent:'center', alignItems:'center'}}>
//                             <Presensi/>
//                             <Text style={{ fontSize: 12, color: this.props.user.tema === 0 ? '#7E7E7E' : '#ffffff', justifyContent:'center', alignItems:'center'}}>{this.state.text2}</Text>
//                         </View>
//                     }
//                     />
//                     <View style={{backgroundColor: '#f4f4f4', marginLeft:0, marginRight:0, marginBottom:70}} />
//                 {/* <FlatList style={{maxHeight:'30%', marginBottom:80}}
//                         refreshControl={
//                         <RefreshControl
//                             refreshing={this.state.refreshing}
//                             onRefresh={() => this.onRefresh()}
//                         />
//                         }
//                         data={this.state.riwayat}
//                         renderItem={({item})=>
//                             <TouchableOpacity onPress={() =>  this.setState({ modalPresensi: true, id_req: item.id_request,jm: item.cek_in, ji: item.break_in, jo: item.break_out, jp: item.cek_out, st: item.status, kt:item.ket, fm: item.foto, fo: item.foto_out}) }>
//                                 <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:30, marginRight:30, marginTop:3}}>
//                                     <Text style={{color:'#7E7E7E', fontSize:12}}>{moment(item.created).format("DD MMMM YYYY")}</Text>
//                                     <Text style={{color:'#7E7E7E', fontSize:12}}>{item.cek_in} - {item.cek_out}</Text>
//                                     <Text style={{fontSize:12, color: item.status=== 'Hadir' ? WARNA_UTAMA : item.status === 'Perdin' ? WARNA_PRIMARY : item.status === 'Cuti' | item.status === 'Sakit' ? WARNA_WARNING : WARNA_DANGER}}>{item.status}</Text>
//                                 </View>
//                             </TouchableOpacity>
//                         }
//                         keyExtractor={(item, index) => index.toString()}
//                         showsVerticalScrollIndicator={false}
//                         ListEmptyComponent={() =>
//                             <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '30%' }}>
//                             <Text style={{ fontSize: 18, color: '#7E7E7E' }}>{this.state.text2}</Text>
//                             </View>
//                         }
//                         /> */}
//                 <Modal animationType = {"fade"} transparent = {true}
//                     visible = {this.state.modalPesan}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
//                     <SafeAreaView style={style.containerSafe}>
//                     <View style={style.ModalCont}>
//                             <View style={style.containerLaporanPesan}>
//                             <Text style={style.txtPresensiPesan}>Pesan Singkat</Text>
//                             <View style={{width:'100%', marginTop:20,  flexDirection:'row', justifyContent:'space-between'}}>
//                                 <Text style={{marginLeft:25, color:'#7e7e7e'}}>Pesan</Text>
//                             </View>
//                             <View style={style.infoContainer} >
//                                     <TextInput style={style.inputLap} placeholder="Tuliskan pesan untuk bawahan disini..." 
//                                     placeholderTextColor='#A9A9A9'
//                                     value={this.state.pesan}
//                                     onChangeText={(des) => this.setState({ pesan: des })}
//                                     multiline={true}
//                                     numberOfLines={5}
//                                     returnKeyType='next'
//                                     ></TextInput>
//                             </View>
//                             <View style={style.btnCon}>
//                                 <TouchableOpacity style={style.btnBatal} onPress={() => this.props.navigation.navigate('Home', this.setState({ modalPesan: false, modalLaporan:true }))}><Text style={{color:'#8F8E8E', fontWeight:'bold'}} >Batal</Text></TouchableOpacity>
                                
//                                 <TouchableOpacity style={this.state.pesan === ''? style.btnSimpanUn : style.btnSimpan} onPress={() => 
//                                   this.state.block === true ? ToastAndroid.show('Data Sedang Diproses', ToastAndroid.SHORT) :
//                                   this.state.pesan === ''? alert('Tuliskan pesan anda!') :
//                                   this.setState({ block: true }) & this.sendPesan()}
//                                    ><Text style={{color:'white', fontWeight:'bold'}}>Kirim</Text></TouchableOpacity>
                                
//                             </View>
                        
//                         </View>
//                     </View>
//                     </SafeAreaView>
//                 </Modal>
//                 <Modal animationType = {"fade"} transparent = {true}
//                     visible = {this.state.modalPresensi}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
//                     <SafeAreaView style={style.containerSafe}>
//                     <TouchableOpacity activeOpacity={1.0} onPress={()=> this.setState({modalPresensi:false})} style={style.ModalCont}>
//                     <View style={{
//                               paddingTop: 5,
//                               marginHorizontal:10,
//                               backgroundColor: this.props.user.tema === 0 ? '#ffffff' : '#333',
//                               // flexDirection: 'row',
//                               borderRadius: 20,
//                               height: 430,
//                               shadowColor: "#333",
//                               shadowOffset: {
//                                 width: 1,
//                                 height: 1,
//                               },
//                               shadowOpacity: 0.3,
//                               shadowRadius: 2,
//                               elevation: 3,
//                               alignItems: 'center'
//                             }}>
//                             <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.setState({ modalPresensi: false }))} style={{position:'absolute', right:20, top:20}}>
//                                 <Close />
//                             </TouchableOpacity>
//                             <Text style={style.txtPresensi}>Rincian Presensi</Text>
//                             <ScrollView style={{marginTop:10, marginBottom:30}}>
//                                 <View style={style.form}>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       fontWeight: 'bold',
//                                       marginVertical: 5,
//                                       marginLeft:20,
//                                       width:100,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>Jam Masuk</Text>
//                                     <Text style={{color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}} > : </Text>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       marginHorizontal: 5,
//                                       fontWeight: 'bold',
//                                       width:150,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>{this.state.jm}</Text>
//                                     {/* <Text style={style.kolek}> dari </Text>
//                                     <Text style={style.jumlah2}>sd</Text> */}
//                                 </View>
//                                 <View style={style.form}>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       fontWeight: 'bold',
//                                       marginVertical: 5,
//                                       marginLeft:20,
//                                       width:100,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>Jam Istirahat</Text>
//                                     <Text style={{color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}> : </Text>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       marginHorizontal: 5,
//                                       fontWeight: 'bold',
//                                       width:150,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>{this.state.jo} s/d {this.state.ji}</Text>
//                                     {/* <Text style={style.kolek}> dari </Text>
//                                     <Text style={style.jumlah2}>sd</Text> */}
//                                 </View>
//                                 <View style={style.form}>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       fontWeight: 'bold',
//                                       marginVertical: 5,
//                                       marginLeft:20,
//                                       width:100,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>Jam Pulang</Text>
//                                     <Text style={{color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}> : </Text>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       marginHorizontal: 5,
//                                       fontWeight: 'bold',
//                                       width:150,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>{this.state.jp} </Text>
//                                     {/* <Text style={style.kolek}> dari </Text>
//                                     <Text style={style.jumlah2}>sd</Text> */}
//                                 </View>
//                                 <View style={style.form}>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       fontWeight: 'bold',
//                                       marginVertical: 5,
//                                       marginLeft:20,
//                                       width:100,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>Status</Text>
//                                     <Text style={{color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}> : </Text>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       marginHorizontal: 5,
//                                       fontWeight: 'bold',
//                                       width:150,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>{this.state.st}</Text>
//                                     {/* <Text style={style.kolek}> dari </Text>
//                                     <Text style={style.jumlah2}>sd</Text> */}
//                                 </View>
//                                 <View style={style.form}>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       fontWeight: 'bold',
//                                       marginVertical: 5,
//                                       marginLeft:20,
//                                       width:100,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>Keterangan</Text>
                                    
//                                     <Text style={{color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}> : </Text>
//                                     <Text style={{
//                                       fontSize: 12,
//                                       marginHorizontal: 5,
//                                       width:150,
//                                       color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'
//                                     }}>{this.state.kt}</Text>
//                                     {/* <Text style={style.kolek}> dari </Text>
//                                     <Text style={style.jumlah2}>sd</Text> */}
                                   
//                                 </View>

//                             <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', marginTop: this.state.kt === '' | this.state.kt === null ? 20 : 0}}>
//                                 <View style={{width:'50%', justifyContent:'center', alignItems:'center', paddingLeft:20}}>
//                                     <Text style={{fontWeight:'bold', fontSize:12, color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}>Masuk</Text>
//                                     <View style={{width:'50%', height:3, backgroundColor:'#51C9C2', borderTopLeftRadius:10, borderTopRightRadius:10, marginTop:5}} />
//                                 </View>
//                                 <View style={{width:'50%', justifyContent:'center', alignItems:'center', paddingRight:20}}>
//                                     <Text style={{fontWeight:'bold', fontSize:12, color: this.props.user.tema === 0 ? '#000' : '#a7a7a7'}}>Pulang</Text>
//                                     <View style={{width:'50%', height:3, backgroundColor:'#51C9C2', borderTopLeftRadius:10, borderTopRightRadius:10, marginTop:5}} />
//                                 </View>
//                             </View>
//                             <View style={style.containerImg}> 
//                                 <TouchableOpacity onPress={() => this.setState({modalImg:true, modalPresensi:false, imgSee : this.state.fm})} style={{height:100, width:'45%'}}>
//                                 {/* {this.props.user.name === "Eggy Gilang Ajie Poetra" ?
//                                 <Image source={Gilang} style={{height:'100%', width:'100%'}}  />
//                                 : */}
//                                 <Image source={{uri:'https://kilauindonesia.org/datakilau/gambarKehadiran/' + this.state.fm}} style={{height:'100%', width:'100%'}}  />
                               
//                                 </TouchableOpacity>
//                                 <TouchableOpacity onPress={() => this.setState({modalImg:true, modalPresensi:false, imgSee : this.state.fo})} style={{height:100,  width:'45%'}}>
//                                 <Image source={{uri:'https://kilauindonesia.org/datakilau/gambarKehadiran/' + this.state.fo}} style={{height:'100%', width:'100%'}}/>
//                                 </TouchableOpacity>                               
//                             </View>
//                             {this.state.id_req != null ? 
//                             <View style={style.containerBtn}>
//                                 <TouchableOpacity style={style.btnOk} onPress={() => {
//                                     this.setState({ modalPresensi: false }),
//                                     this.props.navigation.navigate('RincianDinas', {id_req: this.state.id_req})}}>
//                                     <Text style={{color:'#51C9C2', fontWeight:'bold', fontSize:16}}>Lihat Rincian Dinas Luar</Text>
//                                 </TouchableOpacity>
//                             </View>
//                             :
//                             <View/>
//                             }
//                             </ScrollView>
                            
                        
//                         </View>
//                     </TouchableOpacity>
//                     </SafeAreaView>
//                 </Modal>

//                 <Modal animationType = {"fade"} transparent = {true}
//                     visible = {this.state.modalImg}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
//                     <SafeAreaView style={style.containerSafe}>
//                     <View style={style.ModalContImg}>
//                             <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.setState({ modalImg: false, modalPresensi:true }))} style={{position:'absolute', right:20, top:20}}>
//                                 <Close />
//                             </TouchableOpacity>
//                             <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
//                               {/* {this.state.imgSee === '' ?
//                                 <Image source={Gilang} style={{height:'60%', width:'100%'}}  />
//                               : */}
//                                 <Image source={{uri:'https://kilauindonesia.org/datakilau/gambarKehadiran/' + this.state.imgSee}} style={{height:'60%', width:'100%'}}/>
                              
//                             </View>
//                     </View>
//                     </SafeAreaView>
//                 </Modal>
                
                
                    
                
//                 <Modal animationType = {"fade"} transparent = {true}
//                     visible = {this.state.modalSebelumPulang}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    
//                     <View style={style.ModalCont}>
//                         <View style={style.container3}>
//                         <View style={style.context2}>
//                             <Text style={style.kolek}></Text>
//                             <Text style={style.jumlah2}></Text>
//                         </View>
//                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Home', this.setState({ modalSebelumPulang: false }))} style={style.buka} >
//                             <Text style={style.txtbtn}>Belum saatnya Pulang</Text>
//                         </TouchableOpacity>
//                         <Text onPress={() => this.props.navigation.navigate('Home', this.setState({ modalSebelumPulang: false }))}>Close</Text>
//                         </View>
//                     </View>
//                 </Modal>
//                 <Modal animationType = {"fade"} transparent = {true}
//                     visible = {this.state.modalSetelahPulang}
//                     onRequestClose = {() => { console.log("Modal has been closed.") } }>
//                     <SafeAreaView style={style.containerSafe}>
//                     <View style={style.ModalCont}>
//                             <View style={style.containerLaporan}>
//                             <Text style={style.txtPresensi}>Laporan Pekerjaan</Text>
//                             <View style={{width:'100%', marginTop:20}}>
//                                 <Text style={{marginLeft:30, color:'#7e7e7e'}}>Deskripsi</Text>
//                             </View>
//                             <View style={style.infoContainer} >
//                                     <TextInput style={style.inputText} placeholder="Deskripsikan Pekerjaan Anda..." 
//                                     placeholderTextColor='#A9A9A9'
//                                     keyboardType="email-address"
//                                     value={deskripsi} onChangeText={deskripsi => this.setState({ deskripsi })}
//                                     multiline={true}
//                                     numberOfLines={5}
//                                     returnKeyType='next'
//                                     autoCorrect={false}></TextInput>
//                             </View>
//                             <View style={{width:'100%', marginTop:10}}>
//                                 <Text style={{marginLeft:30, color:'#7e7e7e'}}>File pekerjaan (optional)</Text>
//                             </View>
//                             <View style={style.fileLap} >
//                                 <TextInput  style={{color:'black', width:'60%', padding:5}} placeholder="" 
//                                     placeholderTextColor='#A9A9A9'
//                                     keyboardType="email-address"
//                                     returnKeyType='next'
//                                     autoCorrect={false} value={this.state.file.name}>

//                                 </TextInput>
//                                 <TouchableOpacity 
//                                         onPress={() =>this.docPicker()}
//                                         >
//                                         <Text style={{padding:5, backgroundColor: this.state.file.name === "" ? '#8e8e8e' : '#51C9C2', borderRadius:5 ,marginLeft:10, color:'white', fontWeight:'bold'}}>Upload File</Text>
//                                 </TouchableOpacity>
                                
//                             </View>
                            
                            
                            
//                             <View style={style.containerBtn}>
//                                 <TouchableOpacity style={style.btnCancel} onPress={() => this.props.navigation.navigate('Home', this.setState({ modalSetelahPulang: false }))}><Text style={{color:'#8F8E8E', fontWeight:'bold'}} >Batal</Text></TouchableOpacity>
//                                 <TouchableOpacity style={this.state.file.name === '' || this.state.deskripsi === ''? style.btnSimpanUn : style.btnSimpan} onPress={() => this.props.navigation.navigate('Home', this.setState({ modalSetelahPulang: false }))}><Text style={{color:'white', fontWeight:'bold'}}>Kirim</Text></TouchableOpacity>
//                             </View>
                        
//                         </View>
//                     </View>
//                     </SafeAreaView>
//                 </Modal>
//             </ScrollView>
//             </View>
            

//             {reqnowjab.length > 0 ?
//                 <TouchableOpacity style={style.refresh} onPress={() => this.props.navigation.navigate('DaftarRequest')}>
//                     {reqnow.length > 0 ?
//                     <ReqCircleRed/>
//                     :
//                     this.props.user.tema === 0 ?
//                     <ReqCircle/>
//                     :
//                     <ReqCircleDark/>
//                     }
//                 </TouchableOpacity>
//                 :
//                 <View></View>
//                 }
//                 {this.state.reqreq.length > 0 ?
//                     <View style={{width:15, height:15, borderRadius:20, justifyContent:'center', alignItems:'center',backgroundColor:'#FFA415', position:'absolute', right:30, bottom:115,}}>
//                         <Text style={{fontSize:8,color:'#fff'}}>{this.state.reqreq.length}
//                         </Text>
//                     </View>
//                     :
//                     <View/>
//             }
//             <View style={{
//                 position:'absolute',
//                 flexDirection: 'row',
//                 backgroundColor: this.props.user.tema === 0 ? '#ffffff' : '#1b1e23',
//                 justifyContent: 'space-between',
//                 paddingRight:30,
//                 paddingLeft:15,
//                 paddingVertical: 10,
//                 shadowColor: "#333",
//                 shadowOffset: {
//                   width: 1,
//                   height: 1,
//                 },
//                 shadowOpacity: 0.3,
//                 shadowRadius: 2,
//                 bottom : 10,
//                 marginRight:30,
//                 marginLeft:30,
//                 elevation: 3,
//                 borderRadius: 15,
//                 left:0, right:0,
//                 height: 70
//             }}>
//                 <TouchableOpacity onPress={() => this.props.navigation.replace('Home')} style={{
//                     alignItems: 'center',
//                     justifyContent:'center',
//                     flexDirection:'row',
//                     backgroundColor: this.props.user.tema === 0 ? this.props.user.color === 1 ? '#EBE3FF' : '#D7FFFD' : '#333',
//                     borderRadius:15,
//                     paddingLeft:15,
//                     paddingRight:15,
//                     marginRight:-30
//                 }}
//                     >
//                     { this.props.user.color === 0 ?
//                     <View><IconRumahAktif /></View>
//                     :
//                     <View><IconHomePurple /></View>
//                     }
//                     <Text style={{
//                         fontSize: 13,
//                         color: this.props.user.color === 0 ? '#51C9C2' : '#604B9A', marginLeft:5, fontWeight:'bold'
//                     }}>HOME</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.props.navigation.replace('Laporan')} 
//                 style={style.containerIcon}
//                     >
//                     <View>
//                         <IconLaporan />
//                         { this.state.notiffeed.length + this.state.belumFeed.length > 0 ?
//                         <View style={{borderRadius:10, width:20, height:20, backgroundColor:'red', position:'absolute', top:-5, right:-10, justifyContent:'center', alignItems:'center'}} >
//                             <Text style={{color:'white', fontStyle:'bold', fontSize:10}}>{this.state.notiffeed.length + this.state.belumFeed.length}</Text>
//                         </View>
                        
//                         :
//                         // this.state.notiffeed.length > 0 ?
//                         // <View style={{borderRadius:10, width:20, height:20, backgroundColor:'red', position:'absolute', top:-5, right:-10, justifyContent:'center', alignItems:'center'}} >
//                         //     <Text style={{color:'white', fontStyle:'bold', fontSize:10}}>{this.state.notiffeed.length}</Text>
//                         // </View>
//                         // :
//                         <View></View>
//                         }
//                     </View>
//                     {/* <Text style={style.textTabUn}>Laporan</Text> */}
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.props.navigation.replace('Akun', {modal:false})} style={style.containerIcon}
//                     >
//                     <View><Profile /></View>
//                     {this.state.getget.length === 0 ? <View/> :
//                     <View style={{borderRadius:10, width:20, height:20, backgroundColor:'red', position:'absolute', top:5, right:-10, justifyContent:'center', alignItems:'center'}} >
//                             <Text style={{color:'white', fontStyle:'bold', fontSize:10}}>{jumjum}</Text>
//                         </View>
//                     }
//                     {/* <Text style={style.textTabUn}>Akun</Text> */}
//                 </TouchableOpacity>
//                 </View>
                
//             </View>
            
//         )
//     }
// }



// const style = StyleSheet.create({
//     backList:{
//         paddingLeft:10,
//         paddingRight:10,
//         flexDirection:'row', 
//         flexWrap:'wrap',
//       },
//       btnBatal: {
//         position:'absolute',
//         left:25,
//         width:'50%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding:10,
//         fontWeight:'bold',
//         borderWidth: 1,
//         borderColor: '#E9E9E9',
//         justifyContent: 'center',alignItems: 'center'
//       },
//       inputLap: {
//         color: '#2E3E5C',
//         fontSize: 12,
//         paddingLeft: 5,
//         textAlign:'justify',
//         height:100,
//         marginHorizontal: 15
//       },
//       btnCon: {
//         borderRadius: 10,
//         backgroundColor:'#fff',
//         padding:40,
//         position:'absolute',
//         justifyContent: 'center',alignItems: 'center',
//         bottom:0,
//         left:0,
//         right:0, 
//       },
//     containerIcon: {
//         alignItems: 'center',
//         justifyContent:'center'
//       },
//       containerIconS: {
//         alignItems: 'center',
//         justifyContent:'center',
//         flexDirection:'row',
//         backgroundColor:'#fafafa',
//         borderRadius:15,
//         paddingLeft:15,
//         paddingRight:15,
//         marginRight:-30
//       },
//       ModalContImg: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#000000',
//       },
//     textTabAktif: {
//         fontSize: 13,
//         color: '#51C9C2' ,
//         marginTop: 8
//       },
//       textTabUn: {
//         fontSize: 13,
//         color: '#C8C8C8' ,
//         marginTop: 8
//       },
//     TabItem: {
        
//       },
//     ModalCont: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#00000099',
//         paddingHorizontal:10,
//       },
//       ModalCont2: {
//         flex: 1,
//         // alignItems: 'center',
//         backgroundColor: '#00000079',
//       },
//       ModalCont233: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent:'center',
//         backgroundColor: '#00000079',
//       },
//       ModalCont21: {
//         flex: 1,
//       },
//       refresh: {
//           padding: 10,
//           position: 'absolute',
//           bottom:95,
//           right:15,
//           flexDirection: 'row',
//           borderRadius: 5,
//           // marginHorizontal: 5,
//           height: 45,
          
//           alignItems: 'center',
//           justifyContent: 'center'
//       },
//       containerSafe: {
//         flex: 1,
//         flexDirection: 'column',
//      },
//       infoContainer: {
//         width:'85%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         marginTop: 5,
//         borderWidth: 1,
//         borderColor: '#E9E9E9',
//       },
//       btnCancel: {
//         position:'absolute',
//         left:25,
//         width:'50%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding:10,
//         fontWeight:'bold',
//         borderWidth: 1,
//         borderColor: '#E9E9E9',
//         justifyContent: 'center',alignItems: 'center'
//       },
//       btnSimpan: {
//         position:'absolute',
//         right:25,
//         width:'50%',
//         fontWeight:'bold',
//         backgroundColor: '#51C9C2',
//         borderRadius: 10,
//         padding:10,
//         borderWidth: 1,
//         borderColor: '#E9E9E9',
//         justifyContent: 'center',alignItems: 'center'
//       },
//       btnSimpanUn: {
//         position:'absolute',
//         right:25,
//         width:'50%',
//         fontWeight:'bold',
//         backgroundColor: '#C6C6C6',
//         borderRadius: 10,
//         padding:10,
//         borderWidth: 1,
//         borderColor: '#E9E9E9',
//         justifyContent: 'center',alignItems: 'center'
//       },
//       containerBtn: {
//         borderRadius: 10,
//         backgroundColor:'#fff',
//         padding:40,
//         position:'absolute',
//         justifyContent: 'center',alignItems: 'center',
//         bottom:0,
//         left:0,
//         right:0, 
//       },
//       containerImg: {
//         marginTop:10,
//         flexDirection:'row',
//         justifyContent:'space-between',
//         paddingLeft:30, paddingRight:30,
//       },
//       fileLap: {
//         width:'85%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         marginTop: 5,
//         height:50,
//         borderWidth: 1,
//         flexWrap:'wrap',
//         padding:10,
//         flexDirection:'column',
//         borderColor: '#E9E9E9',
//       },
//       inputText: {
//         color: '#2E3E5C',
//         fontSize: 15,
//         paddingLeft: 5,
//         height:100,
//         marginHorizontal: 15
//       },
//       txtPresensi:{
//         justifyContent: 'center',alignItems: 'center',
//         fontSize:18, 
//         marginTop:20,
//         fontWeight: 'bold', 
//         color:'#7e7e7e'
//       },
//       txtPresensiPesan:{
//         justifyContent: 'center',alignItems: 'center',
//         fontSize:18, 
//         marginTop:20,
//         fontWeight: 'bold', 
//         color:'#51C9C2',
//       },
//       ModalLaporan: {
//         flex: 1,
//         justifyContent: 'center',
//         // alignItems: 'center',
//         backgroundColor: '#00000099',
//         paddingHorizontal: '10%',
//       },
//       context2: {
//         width: '100%',
//         marginTop: 30,
//         alignItems: 'center'
//       },
//       buka: {
//         padding: 10,
//         backgroundColor: '#51C9C2',
//         flexDirection: 'row',
//         borderRadius: 5,
//         marginVertical: 5,
//         // marginHorizontal: 5,
//         height: 40,
//         width: '47.5%',
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
    
//         elevation: 3,
//         alignItems: 'center',
//         justifyContent: 'center'
//       },
//       txtbtn: {
//         width: '100%',
//         color: '#fff',
//         fontSize: 15,
//         fontWeight: 'bold',
//         textAlign: 'center'
//       },
//       container3: {
//         padding: 10,
//         paddingTop: 5,
//         backgroundColor: 'white',
//         // flexDirection: 'row',
//         justifyContent: 'center',
//         borderRadius: 20,
//         marginVertical: 6,
//         marginHorizontal: 5,
//         height: 280,
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
    
//         elevation: 3,
//         alignItems: 'center'
//       },
//       container22: {
//         position:'absolute',
//         bottom:0,
//         left:0, 
//         right:0,
//         backgroundColor: '#ffffff',
//         // flexDirection: 'row',
//         borderTopLeftRadius:30,
//         borderTopRightRadius:30,
//         height: '40%',
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
    
//         elevation: 3,
//         alignItems:'center'
//       },
//       container223: {
//         position:'absolute',
//         bottom:0,
//         left:0, 
//         right:0,
//         backgroundColor: 'white',
//         // flexDirection: 'row',
//         height: '100%',
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
    
//         elevation: 3,
//         alignItems:'center'
//       },
//       containerLaporan: {
//         paddingTop: 5,
//         marginHorizontal:10,
//         backgroundColor: 'white',
//         // flexDirection: 'row',
//         borderRadius: 20,
//         height: 430,
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         alignItems: 'center'
//       },

//       containerLaporanPesan: {
//         paddingTop: 5,
//         marginHorizontal:10,
//         backgroundColor: 'white',
//         // flexDirection: 'row',
//         borderRadius: 20,
//         height: 280,
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         alignItems: 'center'
//       },
      
//     groupdatetime:{
//         position:'absolute',
//         top:20,
//         left:30,
//         right: 30,
//         flexDirection:'row', 
//         flexWrap:'wrap'
//     },
//     pesananAktif: {
//         marginTop: 25,
//         paddingHorizontal: 20,
//         borderTopRightRadius: 0,
//         borderTopLeftRadius: 30,
//     },
//     textInOut:{
//         color: '#fff',
//         fontSize:15
//     },
//     textBulanIni:{
//         color: '#494949',
//         fontSize:16,
//         fontWeight: 'bold',
//         marginLeft:30,
//         marginTop:10,
//         marginBottom:10
//     },
//     timeInOut:{
//         color: '#fff',
//         fontSize:12,
//     },
//     iconLayanan:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: -10,
//         marginBottom: 15,
//         marginHorizontal: 5,
//         flexWrap: 'wrap',
//     },
//     iconLay: {
//         position:'absolute',
//         bottom:20,
//         right:0,
//         left:0,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         flex:1,
//         marginLeft: 35,
//         marginRight:35,
//     },
//     gridMenu: {
//         position:'absolute',
//         width:'100%',
//         right:0,
//         left:0,
//         padding:30,
//         paddingTop:-10,
//         justifyContent: 'space-between',
//         flexDirection: 'row',
//         flex:1,
//     },
//     grouptop:{
//         marginTop: 20,
//         marginLeft:30
//     },
//     texttop:{
//         fontSize:15,
//         color: '#afafaf',
//     },
//     texttop1:{
        
//     },
//     texttime:{
//         fontSize:25,
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     textdate:{
//         fontSize:14,
//         color: '#fff',
//     },
//     borderAbsensi: {
//         width:80,
//         borderRadius: 5,
//         height: 60,
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         backgroundColor:'white',
//       },
//       borderAbsensiUn: {
//         marginTop:10,
//         position:'relative',
//         width:90,
//         backgroundColor: '#fff',
//         shadowColor: "#333",
//         shadowOffset: {
//             width: 1,
//             height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         borderRadius: 7,
//         height: 70,
//         margin:5,
//       },
//       borderAbsensiUnDark: {
//         marginTop:10,
//         position:'relative',
//         width:90,
//         backgroundColor: '#1b1e23',
//         shadowColor: "#333",
//         shadowOffset: {
//             width: 1,
//             height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         borderRadius: 7,
//         height: 70,
//         margin:5,
//       },
//     cardtop: {
//         position:'relative',
//         width:'90%',
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         height: 140,
//         alignItems: 'center',
//       },
//       cardtopLap: {
//         width:'95%',
//         backgroundColor: '#f4f4f4',
        
//         borderRadius: 10,
//         height: 50,
//         elevation:0.5,
//         alignItems: 'center',
//       },
//       cardtopA: {
//         position:'relative',
//         width:'88%',
//         backgroundColor:'#f4f4f4',
//         shadowColor: "#333",
//         borderRadius:20,
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         height: 140,
//         marginTop:30,
//         alignItems: 'center',
//       },
//       cardtop2: {
//         position:'relative',
//         width:'100%',
//         height: '100%',
//         shadowColor: "#333",
//         shadowOffset: {
//           width: 1,
//           height: 1,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 2,
//         elevation: 3,
//         height: 140,
//         alignItems: 'center',
//       },
//     container: {
//         flex:1,
//         flexDirection: 'column',
//     },
//     containerLap: {
//         flex: 1,
//         padding: 10,
//       },
//     header: {
       
//         // paddingHorizontal: 10,
//     },
//     form: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingHorizontal: 10,
//         width: '100%'
//       },
//     jumlah2: {
//         fontSize: 12,
//         marginHorizontal: 5,
//         fontWeight:'bold',
//         width:150,
//       },
//       jumlahKet: {
//         fontSize: 12,
//         marginHorizontal: 5,
//         width:150,
//       },
//       kolek: {
//         fontSize: 12,
//         fontWeight: 'bold',
//         marginVertical: 5,
//         marginLeft:20,
//         width:100
//       },
//       btnOk: {
//         position:'absolute',
//         width:'100%',
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding:10,
//         fontWeight:'bold',
//         borderWidth: 2,
//         borderColor: '#51C9C2',
//         justifyContent: 'center',alignItems: 'center'
//       },
//       mp:{
//         margin:40, marginTop:20, marginBottom:-20, fontSize:12, fontWeight:'bold',
//         borderWidth:2, borderColor:'white', borderBottomColor:'#51C9C2', width:70, textAlign:'center',
//       },
// })
//     const mapStateToProps = (state) => {
//     return {
//         user: state,
//     };
//     };
    
//     const mapDispatchToProps = (dispatch) => {
//     return {
//         changeUser: (data) => dispatch({ type: 'CHANGE/USER', payload: data }),
//     };
//     };
//     export default connect(mapStateToProps, mapDispatchToProps)(Home);

// {/* <View style={style.gridMenu}>
//                         <View style={{justifyContent: 'center',alignItems: 'center',}}>
//                             <View style={style.cardMasuk}>
//                                 <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}}>
//                                     <Image source={MasukHijau} style={{marginTop:5}}/>
//                                 </TouchableOpacity>
//                             </View>
//                             <Text style={{marginTop:5, color: '#5E5E5E'}}>Masuk</Text>
//                         </View> 
//                         <View style={{justifyContent: 'center',alignItems: 'center',}}>
//                             <View style={style.cardMasuk}>
//                                 <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}}>
//                                     <Image source={PulangMerah} style={{marginTop:5}}/>
//                                 </TouchableOpacity>
//                             </View>
//                             <Text style={{marginTop:5, color: '#5E5E5E'}}>Pulang</Text>
//                         </View> 
//                         <View style={{justifyContent: 'center',alignItems: 'center',}}>
//                             <View style={style.cardMasuk}>
//                                 <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',}}>
//                                     <Image source={RequestKuning}/>
//                                 </TouchableOpacity>
//                             </View>
//                             <Text style={{marginTop:5, color: '#5E5E5E'}}>Request</Text>
//                         </View> 
//                     </View>
//                 <View style={{left:0}}>
//                     <Text>mmmmmmmmmmm</Text>
//                 </View> */}