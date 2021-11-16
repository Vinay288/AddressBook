import '../home/home.scss'
import { Link } from 'react-router-dom'
import Display from '../display/display';
const Home = (props) => {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
                    <img src="assets/contact_logo.png" alt="logo" />
                    <div>
                        <span class="address-text">ADDRESS</span><br />
                        <span class="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>
            <div class="main-content">
                <div class="header-content">
                    <div class="address-detail-text">
                        Person Details
                        <div class="address-count">10</div>
                    </div>
                    <Link to="/" class="add-button">
                        <img src="assets/add_person.png" alt="" /></Link>
                </div>
                <div class="table-main">
                    <Display  />
                </div>
            </div>
        </div>
    );
}
export default Home;