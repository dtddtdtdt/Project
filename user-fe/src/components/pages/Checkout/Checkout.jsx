import React from "react";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useFormik} from 'formik';
import * as Yup from 'yup'
import swal from 'sweetalert';




const Checkout = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalUniqueItems, items, cartTotal, emptyCart } = useCart();
  // eslint-disable-next-line
  const [total, setTotal] = useState(cartTotal)
  const getUser = useSelector(
    (state) => state.auth.login?.currentUser.username
  );

  const arrayProduct = items.map((product) => ({
    productId: product.id,
    name: product.title,
    productImage: product.image,
    qty: product.quantity,
    price: product.price,
  }));

  

  const formik = useFormik({
    initialValues:{
      fullName: "",
      phoneNumber: "",
      city: "",
      address: "",
      district: "",
      User: getUser,
      notes: "",
      listProducts: arrayProduct,
      total: total
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("*Do not leave this box blank!").min(4, ("Please enter your first and last name!")),
      phoneNumber: Yup.string().required("*Do not leave this box blank!").matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[./[0-9]*$/, "Please enter the correct phone number!"),
      city: Yup.string().required("Please select province!"),
      address: Yup.string().required("*Do not leave this box blank!"),
      district: Yup.string().required("Select district"),
      notes: Yup.string(),
      listProducts: Yup.array(),
      
    }),
    onSubmit: async (values) => {
      
      try {
        await axios.post('https://server-api-guke.onrender.com/api/import/order', values);
        swal({
          title: "Order Successes!",
          icon: "success",
        });
        emptyCart()
        navigate('/'); 
    } catch (err) {
        
        swal({
          title: "Order Fails!",
          icon: "error",
        });
    }
    }
  })


  console.log(formik.values)


  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUser(user?.accessToken, dispatch);
    }
  });

  //


  



  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src="/assets/Checkout/checkout.png"
            alt=""
            width="72"
            height="72"
          />
          <h2>Checkout</h2>
        </div>
        {/* Products */}
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Cart</span>
              <span className="badge bg-primary rounded-pill">
                {totalUniqueItems}
              </span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item justify-content-between lh-condensed">
                <table className="table table-light table-hover m-0" >
                  <tbody>
                    {items.map((item, index) => {
                      return (
                        <tr key={index} value={formik.values.arrayProduct} onChange={formik.handleChange}>
                          <td>
                            <img
                              src={item.image}
                              style={{ height: "40px", width: "40px" }}
                              alt={item.title}
                            />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price.toLocaleString()}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>₫{cartTotal.toLocaleString()}</strong>
              </li>
            </ul>
          </div>

          {/* Billing */}
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Information</h4>
            <form className="needs-validation" novalidate="" />
            <div className="mb-3">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                spellCheck="false"
                id ="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                />
                {formik.errors.fullName && (
                  <p style={{color: "red"}}>{formik.errors.fullName}</p>
                )}
               
            </div>

            <div className="mb-3">
              <label htmlFor="email">Phone number</label>
              <input
                type="number"
                className="form-control"
                placeholder="0123456789"
                spellCheck="false"
                id ="phoneNumber"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </div>
            {formik.errors.phoneNumber && (
                  <p style={{color: "red"}}>{formik.errors.phoneNumber}</p>
                )}

                    {/* Address */}

            <div class="row">
              <div class="col-md-5 mb-3">
                <label htmlFor="country">Province</label>
                <select
                  class="custom-select d-block w-100"
                  id="city"
                  spellCheck="false"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                >
                 
                  <option value="">Choose...</option>
                  <option>Ho Chi Minh</option>
                </select>
                {formik.errors.city && (
                  <p style={{color: "red"}}>{formik.errors.city}</p>
                )}
        
              </div>
              <div class="col-md-5 mb-3">
                <label htmlFor="state">District</label>
                <select class="custom-select d-block w-100" id="district" name="district"  value={formik.values.district}
                onChange={formik.handleChange}>
                  
                  <option value="">Choose...</option>
                  <option>District 1</option>
                  <option>District 2</option>
                  <option>District 3</option>
                  <option>District 4</option>
                  <option>District 5</option>
                  <option>District 6</option>
                  <option>District 7</option>
                  <option>District 8</option>
                  <option>District 9</option>
                  <option>District 10</option>
                  <option>District 11</option>
                  <option>District 12</option>
                  
         
                </select>
                {formik.errors.district && (
                  <p style={{color: "red"}}>{formik.errors.district}</p>
                )}
                
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Số Nhà"
                spellCheck="false"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address && (
                  <p style={{color: "red"}}>{formik.errors.address}</p>
                )}
            </div>

            <hr className="mb-4" />

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Note
              </label>
              <textarea
                className="form-control"
                id="notes"
                rows="3"
                spellCheck="false"
                name="notes"
                value={formik.values.notes}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={formik.handleSubmit}>
              Order
            </button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default Checkout;
