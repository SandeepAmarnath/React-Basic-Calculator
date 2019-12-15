import React, { Fragment } from "react";
import Button from "./Button/Button";
import classes from "./Buttons.module.css";

const buttons = (props) => {
  return (
    <Fragment>
      <div className={classes.ButtonPanel}>
        <div>
          <Button value="0" click={props.clicked} />
          <Button value="1" click={props.clicked} />
          <Button value="2" click={props.clicked} />
        </div>

        <div>
          <Button value="3" click={props.clicked} />
          <Button value="4" click={props.clicked} />
          <Button value="5" click={props.clicked} />
        </div>

        <div>
          <Button value="6" click={props.clicked} />
          <Button value="7" click={props.clicked} />
          <Button value="8" click={props.clicked} />
        </div>
        <div>
          <Button value="9" click={props.clicked} />
          <Button value="." click={props.clicked} />
          <Button value="%" click={props.clicked} operation />
        </div>

        <div>
          <Button value="+" click={props.clicked} operation />
          <Button value="-" click={props.clicked} operation />
          <Button value="*" click={props.clicked} operation />
        </div>

        <div>
          <Button value="/" click={props.clicked} operation />
          <Button value="=" click={props.clicked} get />
          <Button value="AC" click={props.clicked} erase />
        </div>
      </div>
    </Fragment>
  );
};

export default buttons;
