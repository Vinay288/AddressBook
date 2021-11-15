import "../addressbook-form/addressbook-form.scss";
import { Link} from 'react-router-dom'
const AddressBookForm = (props) => {
    return (
        <div>
            <header class="header-content header">
                <div class="logo-content">
                    <img src="assets/contact_logo.png" alt="address-book-logo" />
                    <div>
                        <span class="address-text">ADDRESS</span><br />
                        <span class="address-text address-book">BOOK</span>
                    </div>
                </div>
            </header>

            <div class="form-content">
                <form class="form" action="#">
                    <div class="form-head">
                        <h1 class="form-head-title">Person Address Form</h1>
                        <Link to="/home" class="close-button"><img src="../assets/cross.png" /></Link>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="name">Full Name</label>
                        <input class="input" type="text" id="name" name="name" autocomplete="disable" required />
                        <error-output id="name-error" class="text-error" for="text"></error-output>
                    </div>
                    <div class="row-content">
                        <label class="label text" for="phoneNumber">Phone Number</label>
                        <input class="input" type="tel" id="phoneNumber" name="phoneNumber" autocomplete="disable" required />
                        <error-output id="phoneNumber-error" class="tel-error" for="tel"></error-output>
                    </div>
                    <div class="row-content">
                        <div class="text-row">
                            <label class="label text" for="address">Address</label>
                            <textarea id="address" class="input" name="address" placeholder="" style={{ height: "100px"}}autocomplete="disable"></textarea>
                            <error-output id="address-error" class="add-error" for="address"></error-output>
                        </div>
                    </div>
                    <div class="row-content location-row">
                        <div>
                            <label class="label text" for="city">City</label>
                            <select id="city" name="City">
                                <option value="" disabled selected hidden>Select City</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Cochin">Cochin</option>
                            </select>
                        </div>
                        <div class="state-row">
                            <label class="label text" for="state">State</label>
                            <select id="state" name="State">
                                <option value="" disabled selected hidden>Select State</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Kerala">Kerala</option>
                            </select>
                        </div>
                        <div>
                            <label class="label text" for="zip">Zipcode</label>
                            <input class="input" type="text" id="zip" name="zip" required autocomplete="disable" />
                            <error-output id="zip-error" class="zip-error" for="zip"></error-output>
                        </div>
                    </div>
                    <div class="buttonParent">
                        <div class="submit-reset">
                            <button type="submit" class="button submitButton" id="submitButton" onclick="save()">
                                Add
                            </button>
                            <button type="reset" class="resetButton button" id="resetButton" onclick="reset()"
                                >Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddressBookForm;