import React from "react";

const MyForm = (props) => {
  return (
    <form className="Faaram">
      {props.github && props.linkedin ? <h2>SignUp</h2> : <h2>Login</h2>}

      <div style={{ width: "29vw" }}>
        <label htmlFor="exampleInputEmail1" className="form-label">
          {props.userDetails}
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      {props.github && props.linkedin ? (
        <>
          <div style={{ width: "29vw" }}>
            <label for="exampleInputEmail1" className="form-label">
              Github-Account
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div style={{ width: "29vw" }}>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Linkedin-Account
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </>
      ) : (
        ""
      )}

      {props.github && props.linkedin ? (
        <>
          <div className="mb-3" style={{ width: "29vw" }}>
            <label for="exampleInputPassword1" className="form-label">
              Create Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="**********"
            />
          </div>
          <div className="mb-3" style={{ width: "29vw" }}>
            <label for="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="**********"
            />
          </div>
        </>
      ) : (
        <div className="mb-3" style={{ width: "29vw" }}>
          <label htmlFor="exampleInputPassword1" className="form-label">
            {props.personal}
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="**********"
          />
        </div>
      )}

      {props.github && props.linkedin ? (
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Show Password
          </label>
        </div>
      ) : (
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input "
            id="exampleCheck1"
          />
          <label className="form-check-label small" htmlFor="exampleCheck1">
            Remember Me
          </label>
        </div>
      )}

      {props.github && props.linkedin ? (
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      ) : (
        <button type="submit" className="btn btn-sm btn-primary">
          Login
        </button>
      )}
    </form>
  );
};

// MyForm.defaultprops =()=> {
//   github={false}
//   linkedin={false}
// }

export default MyForm;
