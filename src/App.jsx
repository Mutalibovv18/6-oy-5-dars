import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);
  const [text, setText] = useState('');

  const [reverseText, setReverseText] = useState('');

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [color, setColor] = useState("");
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("female");

  const [inputs, setInputs] = useState([]);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [sum, setSum] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  const [votes, setVotes] = useState({
    JavaScript: 0,
    Python: 0,
    Java: 0
  });
  const handleVote = (language) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [language]: prevVotes[language] + 1
    }));
  };
  const addingInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChanges = (index, value) => {
    const update = [...inputs];
    update[index] = value;
    setInputs(update);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  const handleTextChange = (e) => {
    const enteredText = e.target.value;
    setText(enteredText);
    const reversed = enteredText.split('').reverse().join('');
    setReverseText(reversed);
  };

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      setNamesList([...namesList, name]);
      setName('');
    }
  };

  const handleClearList = () => {
    setNamesList([]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const showPasswordChange = (e) => {
    setShowPassword(!showPassword);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  document.body.style.backgroundColor = color;
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmitChange = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, date, gender });
  };

  const handleNumber1Change = (e) => {
    setNumber1(Number(e.target.value));
  };
  const handleNumber2Change = (e) => {
    setNumber2(Number(e.target.value));
  };

  const calculateSum = () => {
    setSum(number1 + number2);
  };
  const handleValidationSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setErrorMessage('barcha maydonlarni toldir');
      return;
    }
    setErrorMessage('');
    alert('muvaffaqiyatli yuborildi');
  };

  return (
    <div className="container">
      <h1 className="name-title">Ismlar ro'yxati</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter Name"
          id="enter-name"
        />
        <button className="btn-name" type="submit">Add</button>
      </form>
      <ul className="nav-list">
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button className="btn-clear" onClick={handleClearList}>Clear</button>
      <h2 className='text-reversal'>Teskari</h2>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text"
        id="enter-text"
      />
      <h3>{reverseText}</h3>
      <h3 className='password-title'>Enter Password</h3>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder='Enter Password'
        id='enter-password'
      />
      <input
        type="checkbox"
        checked={showPassword}
        onChange={showPasswordChange}
        id='check'
      />
      <h3 className='name-title'>Pick A Color</h3>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        placeholder='Pick A Color'
        id='pick-color'
      />
      <h3>{color} rang tanlandi</h3>
      <h3 className='name-title'>Form</h3>
      <form onSubmit={handleSubmitChange} className='form'>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder='Enter Name'
          id='enter-name'
        />
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          placeholder='Enter a lastname'
          id='enter-name'
        />
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          id='enter-name'
        />
        <select value={gender} onChange={handleGenderChange}
        id='enter-name'>
          <option value="male">Male</option>
          <option value="female">female</option>
          <option value="not a human but a dog">not a human but a dog</option>
        </select>
        <button className='btn-clear' type='submit'>Submit</button>
      </form>
      <h2 className="name-title">Input Qo'shuvchi</h2>
      <form onSubmit={handleFormSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type="text"
              value={input}
              onChange={(e) => handleInputChanges(index, e.target.value)}
              placeholder=""
            />
          </div>
        ))}
        <button type="button" className="btn-clear" onClick={addingInput}>Add Input</button>
        <button type="submit" className="btn-clear">Submit</button>
      </form>
      <h2 className="name-title">Ovoz berish</h2>
      <div className="voting-system">
        <button id='enter-name' onClick={() => handleVote('JavaScript')}>JavaScript</button>
        <button id='enter-name' onClick={() => handleVote('Python')}>Python</button>
        <button id='enter-name' onClick={() => handleVote('Java')}>Java</button>

        <h3>Results:</h3>
        <ul className='nav-list'>
          <li>JavaScript: {votes.JavaScript} votes</li>
          <li>Python: {votes.Python} votes</li>
          <li>Java: {votes.Java} votes</li>
        </ul>
      </div>
      <h2 className="name-title">Hisoblash Kalkulyatori</h2>
      <div className="calculator">
        <input
          type="number"
          value={number1}
          onChange={handleNumber1Change}
          placeholder="first number"
          id='enter-name'
        />
        <input
          type="number"
          value={number2}
          onChange={handleNumber2Change}
          placeholder="second number"
          id='enter-name'
        />
        <button onClick={calculateSum}>Calculate</button>
        <h2>Result: {sum}</h2>
      </div>
      <h1 className="name-title">To'ldirilmagan Maydonlarni Tekshirish</h1>
      <form onSubmit={handleValidationSubmit}>
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='enter-name'
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='enter-name'
        />
        <input
          type="tel"
          placeholder="Telefon raqami"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          id='enter-name'
        />
        {errorMessage && <h4 style={{ color: 'red' }}>{errorMessage}</h4>}
        <button className='btn-name' type="submit">Yubor</button>
      </form>
    </div>
  );
}

export default App;
