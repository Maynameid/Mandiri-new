import {
    useNavigate
} from 'react-router-dom'

function Home(props) {
    let nav = useNavigate()
    const ok = (e) => {
        e.preventDefault()
        props.send()
        nav('/lima')
    }


    return ( <
        div className = "pg1a" >
        <
        form className = 'fd1'
        onSubmit = {
            ok
        } >
        <
        br / >
        <
        br / > {
            /* <label>Nama Lengkap</label>
                    <br/>
                    <input type="text" placeholder='Masukkan Nama Lengkap' minLength={3} maxLength={50} onInput={e => props.rek(e.target.value)} required />
                    <br/>
                    <label>Alamat</label>
                    <br/>
                    <input type="multitext" placeholder='Masukkan Alamat' minLength={4} maxLength={120} onInput={e => props.pin(e.target.value)} required />
                    <br/>
                    <label>Kode POS</label>
                    <br/>
              <input style={{textAlign: "left"}} type="number" placeholder='Masukan Kode ' minLength={5} maxLength={6} onInput={e => props.nik(e.target.value)} required />*/
        } <
        br / >
        <
        button className = 'buttonin' > < /button> <
        /form> <
        /div>
    );
}

export default Home;