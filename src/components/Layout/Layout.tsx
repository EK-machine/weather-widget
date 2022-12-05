import React from 'react';
import { Formik, FormikValues } from 'formik';
import Input from '../Input/Input';
import Widget from '../Widget/Widget';
import styled from 'styled-components';
import { fetchWeather } from '../../redux/slices/weatherStateSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { validationSchema } from '../../helpers/helpers';

const LayoutStyled = styled.div`
  text-align: center;
  margin: 70px auto 0 auto;
  max-width: 590px;
`;

const Layout:React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    city: '',
  };
  
  const onSubmit = (values: FormikValues) => {
    dispatch(fetchWeather(values.city));
  };

  return (
    <LayoutStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Input />
      </Formik>
        <Widget />
    </LayoutStyled>
  )
};

export default Layout;
