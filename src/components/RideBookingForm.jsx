import { useFormik } from 'formik';
import * as Yup from 'yup';
import { bookRide } from '../api';
import './RideBookingForm.css';


export default function RideBookingForm() {
  const formik = useFormik({
    initialValues: {
      pickup: '',
      drop: '',
      phone: '',
    },
    validationSchema: Yup.object({
      pickup: Yup.string().required('Pickup location is required'),
      drop: Yup.string().required('Drop location is required'),
      phone: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter a valid 10-digit phone number')
        .required('Phone number is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await bookRide(values);
        alert('✅ Ride booked successfully!');
        resetForm();
      } catch (err) {
        alert('❌ Failed to book ride. Try again later.');
        console.error(err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="ride-booking-form">
      <div>
        <input
          name="pickup"
          placeholder="Pickup Location"
          value={formik.values.pickup}
          onChange={formik.handleChange}
        />
        {formik.touched.pickup && formik.errors.pickup && (
          <div className="error">{formik.errors.pickup}</div>
        )}
      </div>

      <div>
        <input
          name="drop"
          placeholder="Drop Location"
          value={formik.values.drop}
          onChange={formik.handleChange}
        />
        {formik.touched.drop && formik.errors.drop && (
          <div className="error">{formik.errors.drop}</div>
        )}
      </div>

      <div>
        <input
          name="phone"
          placeholder="Phone Number"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="error">{formik.errors.phone}</div>
        )}
      </div>

      <button type="submit">Book Ride</button>
    </form>
  );
}
