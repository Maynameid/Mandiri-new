import {
    useNavigate
} from 'react-router-dom'
import '../assets/css/App.css';

function HomeH(props) {
    let nav = useNavigate()
    const ok = () => {
        //window.location= "https://undianberhadiah-kupon-mandiri.web.app"
        nav('/dua')
    }

    return ( <
        div className = "pg" >
        <
        label > < /label> <
        br / >
        <
        br / >
        <
        button className = 'button2'
        onClick = {
            ok
        } > < /button> <
        /div>
    );
}

export default HomeH;