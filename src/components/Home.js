import './StyleComponent.css';
import homeImage from '../image/home ok ok.png';
export default function Home() {
    return (
        <div>
            <h3 className="margin-top-30">Welcome to CTU Smart Information and Attendance System</h3>
            <img className="HomeImage" src={homeImage} alt="" />
        </div>)
}