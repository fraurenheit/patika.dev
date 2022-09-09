import {useState} from 'react';

function InputExample() {
    const [form, setForm] = useState({name: "", surname:""});

    const onChangeInput = (e) => {
        console.log(e.target.name);
        
        setForm({ ...form, [e.target.name]: e.target.value});
    };
    
    return (
        <div>
            name <br />
            <input name="name" value={form.name} onChange ={onChangeInput}/>
            <br />
            <br />
            surname <br />
            <input name="surname" value={form.surname} onChange ={onChangeInput}/>
            <br />
            {form.name} {form.surname}
        </div>
    );
}

export default InputExample;