import { useState } from 'react';
export default function Form({ addNewData, clearData}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};
        if (!name) {
            newErrors.name = 'Name is required';
        }
        if (!age || isNaN(age)) {
            newErrors.age = 'Age is required and must be a number';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            newErrors.email = 'Entered value must be a valid email address';
        }
        if (!phoneNumber ) {
            newErrors.phoneNumber = 'Phone number is required';
        }

        if (name && (name.length<3 || name.length>10)) {
            newErrors.name = 'Name should contain 3-10 chars';
        }
        if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone number is required and must be a valid 10-digit number';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        addNewData({
            name,
            age,
            email,
            phoneNumber,
        })
        resetFields();
    };

    const handleReset = (event) => {
        event.preventDefault();

        setErrors({});

        resetFields()
    }

    const resetFields = () => {
        setName('')
        setAge('')
        setPhoneNumber('')
        setEmail('')
    }

    return (
        <div className="form">
            <div>
                <img className='logo' src="https://res.cloudinary.com/driv8kibp/image/upload/v1669982957/Youkraft%20assets/Logos/Logo_0007.gif" alt="Youkraft logo" />
            </div>

            <form onSubmit={handleSubmit}>
                <div className='form-element input-group'>
                    <input
                        id="name"
                        type="text"
                        className ={`${errors.name ? 'error': ''}`}
                        value={name}
                        minLength={3}
                        maxLength={10}
                        placeholder="Name*"
                        onChange={(event) => setName(event.target.value)}
                        required />
                </div>
                <div className='form-element input-group'>
                    <input
                        id='age'
                        className={`${errors.age ? 'error' : ''}`}
                        type="number"
                        value={age}
                        placeholder="Age*"
                        onChange={(event) => setAge(event.target.value)}
                        required
                    />
                </div>
                <div className='form-element input-group'>
                    <input
                        id='email'
                        className={`${errors.email ? 'error' : ''}`}
                        type="text"
                        value={email}
                        placeholder="Email*"
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        />
                </div>
                <div className='form-element input-group'>
                    <input
                        id="phone"
                        className={`${errors.phoneNumber ? 'error' : ''}`}
                        type="number"
                        value={phoneNumber}
                        placeholder="Phone Number(10 digits)*"
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        required
                    />
                </div>

                <div className='action-button '>
                    <button onClick={handleSubmit} className="btn submit" type='submit'>
                        Submit
                    </button>
                    <button onClick={handleReset} className="btn reset" >
                        Reset
                    </button>
                    <button onClick={clearData} className="btn reset" type='button'>
                        Reset All Data
                    </button>
                </div>
            </form>
        </div>
    );
}