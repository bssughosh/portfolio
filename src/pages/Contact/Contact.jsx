import { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";
import { Grid } from "@material-ui/core";
import { AiFillMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { memo } from "react";

const ContactForm = () => {
  const form = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const from_email = form.current.email.value;
    const from_name = form.current.name.value;
    const message = form.current.message.value ?? "";

    const data = { from_email, from_name, message };

    setIsLoading(true);

    emailjs
      .send("service_nrcgp3w", "template_b85ava5", data, "NaHUZbuY1MOZTUibc")
      .then(
        (result) => {
          console.log(result.text);
          alert("I will respond to your message as soon as possible");
          setIsLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(
            "There was some error when sending your message. Please try again"
          );
          setIsLoading(false);
          e.target.reset();
        }
      );
  };

  return (
    <div className={styles.form}>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control type="textarea" placeholder="Message" name="message" />
        </Form.Group>

        <Button
          className={styles.submitButton}
          type="submit"
          disabled={isLoading}
        >
          Send Message
        </Button>
      </Form>
    </div>
  );
};

const ContactMethods = () => {
  return (
    <Grid container className={styles.methods}>
      <Grid item xs={12} md={3} lg={3} xl={3} className={styles.method}>
        <a href="mailto:bssughosh27@gmail.com" target="_blank" rel="noreferrer">
          <AiFillMail />
          <h6>bssughosh27@gmail.com</h6>
        </a>
      </Grid>
      <Grid item xs={12} md={3} lg={3} xl={3} className={styles.method}>
        <a
          href="https://www.linkedin.com/in/sughosh-sudhanvan/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
          <h6>sughosh-sudhanvan</h6>
        </a>
      </Grid>
      <Grid item xs={12} md={3} lg={3} xl={3} className={styles.method}>
        <a href="https://github.com/bssughosh" target="_blank" rel="noreferrer">
          <AiFillGithub />
          <h6>bssughosh</h6>
        </a>
      </Grid>
    </Grid>
  );
};

const Contact = () => {
  return (
    <div className={styles.main}>
      <ContactForm />
      <ContactMethods />
    </div>
  );
};

export default memo(Contact);
