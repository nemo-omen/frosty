import { ValueObject } from "./ValueObject";

class Email extends ValueObject<{ value: string; }> {
  public static readonly EMAIL_PATTERN: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  private constructor (props: { value: string; }) {
    super(props);
  }

  get value(): string {
    return this.props.value;
  }

  public static create(email: string): Email {
    if (email === undefined || email === null || email.length <= 6 || email.length > 100) {
      throw new Error("Email must be more than 6 characters and less than 100 characters");
    }
    if (!this.EMAIL_PATTERN.test(email)) {
      throw new Error("Invalid email");
    }
    return new Email({ value: email });
  }
}