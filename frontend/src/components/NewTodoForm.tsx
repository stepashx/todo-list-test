import * as React from 'react';
import style from './NewTodoForm.module.scss';
import {
    Formik,
    Form,
    Field,
} from 'formik';

interface Props {
    changeEditMode: () => void
}

interface MyFormValues {
    title: string;
    description: string,
    status: string
}

const NewTodoForm: React.FC<Props> = ({ changeEditMode }) => {
    const initialValues: MyFormValues = {
        title: '',
        description: '',
        status: ''
    };
    return (
        <div className={style.modal}>
            <div className={style.close} onClick={changeEditMode}>&times;</div>
            <div className={style.wrapper}>
                <h1>New task</h1>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, actions) => {
                        console.log({values, actions});
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                        actions.resetForm();
                    }}
                >
                    <Form className={style.form}>
                        <input type="submit" hidden/>
                        <label htmlFor="title">Title</label>
                        <Field id="title" name="title" placeholder="Your title" autoFocus={true}/>

                        <label htmlFor="status">Status</label>
                        <Field id="status" name="status" placeholder="Your status"/>

                        <Field as='textarea' id="description" name="description" placeholder="Your description"/>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default NewTodoForm;