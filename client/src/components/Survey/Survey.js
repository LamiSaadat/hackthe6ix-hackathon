import "./Survey.scss";

function Survey() {
  return (
    <>
      <section>
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__question">
              Choose your favorite monster
            </legend>
            <div className="form__radio">
              <label className="form__label">
                <input type="radio" name="student" value="student"></input>
                I'm a student
              </label>
              <label className="form__label">
                <input
                  type="radio"
                  name="professional"
                  value="professional"
                ></input>
                I'm a professional
              </label>
              <label className="form__label">
                <input type="radio" name="retired" value="retired"></input>
                I'm a retired
              </label>
              <label className="form__label">
                <input type="radio" name="other" value="other"></input>
                Other
              </label>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Survey;
