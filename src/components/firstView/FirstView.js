import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../reduxCart/ReducerCart";

import { newValue } from "./ID";

const FirstView = () => {


  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  let total = 0;

  count.map((v) => (total += v.price));

  return (
    <div>
      <h3 className="ms-lg-3 ms-md-0 ms-sm-0">
        Favourite <span className="text-danger">Product</span>{" "}
      </h3>

      <div className="row">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <div className="row">
            {newValue.map((v) => (
              <div className="col-lg-3 col-md-12 col-sm-12 shadow  m-4    text-center">
                <h4 className="text-danger"> {v.name}</h4>
                <h4>Price : ${v.price}</h4>

                <h4>Id : {v.id}</h4>
                <button
                  className="btn btn-primary mb-5"
                  onClick={() => dispatch(increment(v))}
                >
                  {" "}
                  add me
                </button>
              </div>
            ))}
          </div>
        </div>


        <div className="col-lg-3 col-md-12 col-sm-12">
          <h5 className="mb-3  text-danger">Added Product : {count.length}</h5>

          {count.map((v, i) => (
            <div>
              <div className="row">
                <div className="col-1">{i + 1}</div>
                <div className="col-5">{v.name}</div>
                <div className="col-4">$ {v.price} </div>
                <div className="col-1">
                  {" "}
                  <button
                    className="btn btn-primary mb-1"
                    onClick={() => dispatch(decrement(v.id))}
                  >
                    dlt
                  </button>{" "}
                </div>
              </div>

              <div></div>
            </div>
          ))}

          <div>
            <h4 className="ms-lg-5 ms-md-0 ms-sm-0"> Total ${total}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
