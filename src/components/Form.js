import React from 'react';

const Form = (props) => (
    <form onSubmit={props.getWeather}>
        <input type="text" value={props.city} placeholder="City..." onChange={props.onFormFieldChange.bind(this, 'city')} />
        <input type="text" value={props.country} placeholder="Country..." onChange={props.onFormFieldChange.bind(this, 'country')} />
        <button>Get Weather</button>
    </form>
)

export default Form;