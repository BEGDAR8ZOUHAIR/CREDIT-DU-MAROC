import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCompte } from "../features/comptes/compteSlice";

function CompteForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [cin, setCin] = useState("");
    const [agence, setAgence] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [rib, setRib] = useState("");
    const [solde, setSolde] = useState("");
    const [type, setType] = useState("");

    
 

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createCompte({ fullName , email , password , birthDate , cin , agence , phoneNumber , rib , solde , type }));
      setFullName("");
      setEmail("");
      setPassword("");
      setBirthDate("");
      setCin("");
      setAgence("");
      setPhoneNumber("");
      setRib("");
      setSolde("");
      setType("");
    };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your fullName"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="birthDate"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="Enter your birthDate"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="cin"
            id="cin"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
            placeholder="Enter your cin"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="agence"
            id="agence"
            value={agence}
            onChange={(e) => setAgence(e.target.value)}
            placeholder="Enter your agence"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phoneNumber"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="rib"
            id="rib"
            value={rib}
            onChange={(e) => setRib(e.target.value)}
            placeholder="Enter your rib"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="solde"
            id="solde"
            value={solde}
            onChange={(e) => setSolde(e.target.value)}
            placeholder="Enter your solde"
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Enter your type"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Compte
          </button>
        </div>
      </form>
    </section>
  );
}

export default  CompteForm ;
