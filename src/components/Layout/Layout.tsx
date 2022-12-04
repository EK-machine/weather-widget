import React, { useEffect } from 'react';
import { Formik, FormikValues } from 'formik';
import * as Yup from "yup";
import Input from '../Input/Input';
import Widget from '../Widget/Widget';
import styled from 'styled-components';
import { fetchLatLon } from '../../redux/slices/latLonStateSlice';
import { fetchWeather, fetchAirQuality } from '../../redux/slices/weatherStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';

const LayoutStyled = styled.div`
  text-align: center;
  margin: 70px auto 0 auto;
  max-width: 590px;
`;

const Layout:React.FC = () => {
  const latLonCity = useSelector((state: RootState) => state.latLon);
  const dispatch = useDispatch<AppDispatch>();

  const initialValues = {
    city: '',
  };
  
  const onSubmit = (values: FormikValues) => {
    dispatch(fetchLatLon(values.city));
  };
  
  const validationSchema = Yup.object({
    city: Yup.string().matches(/^[a-zA-Z]+$/ , 'We could not find weather information for the location above').required()
  });

  useEffect(() => {
    if(latLonCity.city) {
      const latLon = {lat: latLonCity.lat, lon: latLonCity.lon}
      dispatch(fetchWeather(latLon));
      dispatch(fetchAirQuality(latLon));
    }
  }, [latLonCity.city]);

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
