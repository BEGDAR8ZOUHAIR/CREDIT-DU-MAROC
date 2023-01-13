import { useState  } from "react";
import { useDispatch } from "react-redux";
import { deleteCompte } from "../features/comptes/compteSlice";
import { updateCompte } from "../features/comptes/compteSlice";

function CompteItem({ compte }) {
  const [id, setId] = useState(compte._id);
     const [fullName, setFullName] = useState(compte.fullName);
     const [email, setEmail] = useState(compte.email);
     const [password, setPassword] = useState(compte.password);
     const [birthDate, setBirthDate] = useState(compte.birthDate);
     const [cin, setCin] = useState(cin.setCin);
     const [agence, setAgence] = useState(compte.agence);
     const [phoneNumber, setPhoneNumber] = useState(compte.phoneNumber);
     const [rib, setRib] = useState(compte.rib);
     const [solde, setSolde] = useState(compte.solde);
     const [type, setType] = useState(compte.type);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    
    const div = document.getElementById(compte._id);
    div.style.display = "none";
    dispatch(updateCompte({ id, fullName }));
  };

  return (
    <div className="compte">
      <div className="title">{fullName}</div>
      <div className="title">{email}</div>
      <div className="title">{password}</div>
      <div className="title">{birthDate}</div>
      <div className="title">{cin}</div>
      <div className="title">{phoneNumber}</div>
      <div className="title">{agence}</div>
      <div className="title">{rib}</div>
      <div className="title">{solde}</div>
      <div className="title">{type}</div> 
      <button
        onClick={() => dispatch(deleteCompte(compte._id))}
        className="close"
      >
        X
      </button>
      <button
        onClick={() => {
          setFullName(compte.fullName);
          setId(compte._id);
          const div = document.getElementById(compte._id);
          div.style.display = "block";
        }}
        className="update"
      >
        Update
      </button>

      <div className="date">
        {new Date(compte.createdAt).toLocaleString("en-US")}
      </div>
       update form
       <form
        className="update-form"
        style={{ display: "none" }}
        id={compte._id}
        name={compte._id}
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="form-control"
          placeholder="Update your compte"
        />
        <button className="update-form1" type="submit-form">
          Update
        </button>
      </form>
          
    </div>
  );
}

export default CompteItem;
