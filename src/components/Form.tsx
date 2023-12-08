import React, { ChangeEvent, useState } from 'react'
import { FormProps } from '../interface/FormProps';
import { TrainingInterface } from '../interface/TrainingInterface';

const Form: React.FC<FormProps> = ({ addTraining }) => {
    const [form, setForm] = useState<TrainingInterface>({date: '', distance: 0});
    const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.name === 'date' ? new Date(event.target.value).getTime() : +event.target.value
        setForm({...form, [event.target.name]: value});    
    }

    const handlerSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
        event.preventDefault();
        addTraining(form)
        event.target.reset()
    }

    return (
        <form className='form' onSubmit={handlerSubmit}>
            <label className='form-row'>
                <span>Дата (ДД.ММ.ГГ)</span>
                <input
                    className='form-input'
                    type="date"
                    name="date"
                    onChange={handlerChange}
                    required
                />
            </label>
            <label className='form-row'>
                <span>Пройдено км</span>
                <input
                    className='form-input'
                    type="number"
                    name="distance"
                    onChange={handlerChange}
                    required
                />
            </label>
            <input
                className='form-submit'
                type="submit"
                value="OK"
            />
        </form>
    )
}

export default Form